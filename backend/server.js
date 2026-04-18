const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { initDb, getDb } = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

function getFieldByRole(role) {
  if (role === "patient") return "tc";
  if (role === "pharmacy") return "pharmacyNo";
  if (role === "warehouse") return "centerCode";
  return null;
}

app.get("/api/health", (req, res) => {
  res.json({ message: "MediTrack backend çalışıyor." });
});

app.post("/api/register", async (req, res) => {
  try {
    const db = getDb();
    const { fullName, role, tc, pharmacyNo, centerCode, email, password } = req.body;

    if (!fullName || !role || !password) {
      return res.status(400).json({ message: "Ad, rol ve şifre zorunlu." });
    }

    const field = getFieldByRole(role);

    if (!field) {
      return res.status(400).json({ message: "Geçersiz rol." });
    }

    let identifierValue = null;

    if (role === "patient") {
      if (!tc) {
        return res.status(400).json({ message: "Hasta için TC zorunlu." });
      }
      identifierValue = tc.trim();
    }

    if (role === "pharmacy") {
      if (!pharmacyNo) {
        return res.status(400).json({ message: "Eczane için eczane numarası zorunlu." });
      }
      identifierValue = pharmacyNo.trim();
    }

    if (role === "warehouse") {
  if (!centerCode) {
    return res.status(400).json({ message: "Depo için merkez kodu zorunlu." });
  }
  if (!email) {
    return res.status(400).json({ message: "Depo için email zorunlu." });
  }
  identifierValue = centerCode.trim();
}

    const existingUser = await db.get(
      `SELECT * FROM users WHERE ${field} = ?`,
      [identifierValue]
    );

    if (existingUser) {
      return res.status(409).json({ message: "Bu kullanıcı zaten kayıtlı." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.run(
      `
      INSERT INTO users (fullName, role, tc, pharmacyNo, centerCode, email, password)
VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
     [
  fullName.trim(),
  role,
  tc ? tc.trim() : null,
  pharmacyNo ? pharmacyNo.trim() : null,
  centerCode ? centerCode.trim() : null,
  email ? email.trim().toLowerCase() : null,
  hashedPassword
]
    );

    const newUser = await db.get(
      `SELECT id, fullName, role, tc, pharmacyNo, centerCode, email, createdAt
       FROM users
       WHERE id = ?`,
      [result.lastID]
    );

    res.status(201).json({
      message: "Kayıt başarılı.",
      user: newUser
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Sunucu hatası." });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const db = getDb();
    const { role, identifier, password } = req.body;

    if (!role || !identifier || !password) {
      return res.status(400).json({ message: "Rol, giriş bilgisi ve şifre zorunlu." });
    }

    const field = getFieldByRole(role);

    if (!field) {
      return res.status(400).json({ message: "Geçersiz rol." });
    }

    const cleanIdentifier =
  role === "warehouse" ? identifier.trim() : identifier.trim();
    const user = await db.get(
      `SELECT * FROM users WHERE role = ? AND ${field} = ?`,
      [role, cleanIdentifier]
    );

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Şifre yanlış." });
    }

    res.json({
      message: "Giriş başarılı.",
      user: {
  id: user.id,
  fullName: user.fullName,
  role: user.role,
  tc: user.tc,
  pharmacyNo: user.pharmacyNo,
  centerCode: user.centerCode,
  email: user.email,
  createdAt: user.createdAt
}
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Sunucu hatası." });
  }
});

async function startServer() {
  await initDb();

  app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
  });
}

startServer();