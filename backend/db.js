const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

let db;

async function initDb() {
  db = await open({
    filename: "./meditrack.db",
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullName TEXT NOT NULL,
  role TEXT NOT NULL,
  tc TEXT UNIQUE,
  pharmacyNo TEXT UNIQUE,
  centerCode TEXT UNIQUE,
  email TEXT UNIQUE,
  password TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
  `);

  console.log("Database hazır.");
}

function getDb() {
  return db;
}

module.exports = { initDb, getDb };