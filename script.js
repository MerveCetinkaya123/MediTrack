const roles = {
  patient: {
    login: {
      title: "Hasta Girişi",
      description: "QR ile reçete görüntüleme, önceki reçetelere erişim ve yakındaki eczane bilgileri için hasta hesabınızla giriş yapın.",
      extraLabel: "",
      extraPlaceholder: "",
      fieldOneLabel: "T.C. Kimlik Numarası",
      fieldOnePlaceholder: "11 haneli kimlik numaranızı girin",
      fieldTwoLabel: "Telefon Numarası",
      fieldTwoPlaceholder: "05xx xxx xx xx",
      passwordLabel: "Şifre",
      passwordPlaceholder: "Şifrenizi girin",
      submitText: "Hasta olarak giriş yap",
      previewTitle: "Giriş sonrası hızlı erişim",
      previewTags: ["QR Reçete Oku", "Önceki Reçetelerim", "Yakındaki Eczaneler"]
    },
    register: {
      title: "Hasta Kaydı",
      description: "Yeni hasta hesabı oluşturarak reçete geçmişinizi, QR işlemlerinizi ve eczane aramalarınızı sistemde takip edebilirsiniz.",
      extraLabel: "Ad Soyad",
      extraPlaceholder: "Adınızı ve soyadınızı girin",
      fieldOneLabel: "T.C. Kimlik Numarası",
      fieldOnePlaceholder: "11 haneli kimlik numaranızı girin",
      fieldTwoLabel: "Telefon Numarası",
      fieldTwoPlaceholder: "05xx xxx xx xx",
      passwordLabel: "Şifre Oluştur",
      passwordPlaceholder: "Yeni şifrenizi oluşturun",
      submitText: "Hasta kaydını tamamla",
      previewTitle: "Kayıt sonrası kullanılacak alanlar",
      previewTags: ["QR Reçete Erişimi", "Reçete Geçmişi", "Yakındaki Eczaneler"]
    }
  },
  pharmacy: {
    login: {
      title: "Eczane Girişi",
      description: "Eczane stoğunu görüntülemek, eksik ilaçları işaretlemek ve depodan tedarik talebi oluşturmak için giriş yapın.",
      extraLabel: "",
      extraPlaceholder: "",
      fieldOneLabel: "Eczane Kodu",
      fieldOnePlaceholder: "Örn: KAD-ECZ-102",
      fieldTwoLabel: "Yetkili Eczacı E-postası",
      fieldTwoPlaceholder: "eczaci@ornek.com",
      passwordLabel: "Yetkili Şifre",
      passwordPlaceholder: "Yetkili şifrenizi girin",
      submitText: "Eczane olarak giriş yap",
      previewTitle: "Giriş sonrası hızlı erişim",
      previewTags: ["Stok Durumu", "Eksik İlaç Bildir", "Depoya Talep Gönder"]
    },
    register: {
      title: "Eczane Kaydı",
      description: "Yeni eczane hesabı oluşturarak stok takibi, hasta talepleri ve depo bağlantılarını sistem üzerinde yönetebilirsiniz.",
      extraLabel: "Eczane Adı",
      extraPlaceholder: "Örn: Kadıköy Health Pharmacy",
      fieldOneLabel: "Eczane Kodu",
      fieldOnePlaceholder: "Örn: KAD-ECZ-102",
      fieldTwoLabel: "Yetkili Eczacı E-postası",
      fieldTwoPlaceholder: "eczaci@ornek.com",
      passwordLabel: "Şifre Oluştur",
      passwordPlaceholder: "Kurumsal giriş şifresi oluşturun",
      submitText: "Eczane kaydını tamamla",
      previewTitle: "Kayıt sonrası kullanılacak alanlar",
      previewTags: ["Stok Yönetimi", "İlaç Durumu", "Tedarik Talepleri"]
    }
  },
  warehouse: {
    login: {
      title: "Depo Girişi",
      description: "Bölgesel ilaç taleplerini görmek, sevkiyat planlamak ve stok akışını yönetmek için depo hesabınıza giriş yapın.",
      extraLabel: "",
      extraPlaceholder: "",
      fieldOneLabel: "Dağıtım Merkezi Kodu",
      fieldOnePlaceholder: "Örn: MARMARA-DC-01",
      fieldTwoLabel: "Yetkili Personel E-postası",
fieldTwoPlaceholder: "depo@ornek.com",
      passwordLabel: "Sistem Şifresi",
      passwordPlaceholder: "Sistem şifrenizi girin",
      submitText: "Depo olarak giriş yap",
      previewTitle: "Giriş sonrası hızlı erişim",
      previewTags: ["Talep Bildirimleri", "Bölgesel Stok", "Sevkiyat Onayı"]
    },
    register: {
      title: "Depo Kaydı",
      description: "Bölgesel dağıtım merkezi hesabı oluşturarak sevkiyat, onay ve stok akışını merkezi olarak yönetebilirsiniz.",
      extraLabel: "Depo / Merkez Adı",
      extraPlaceholder: "Örn: Marmara Pharma Distribution Center",
      fieldOneLabel: "Dağıtım Merkezi Kodu",
      fieldOnePlaceholder: "Örn: MARMARA-DC-01",
      fieldTwoLabel: "Yetkili Personel E-postası",
      fieldTwoPlaceholder: "depo@ornek.com",
      passwordLabel: "Şifre Oluştur",
      passwordPlaceholder: "Merkez şifresini oluşturun",
      submitText: "Depo kaydını tamamla",
      previewTitle: "Kayıt sonrası kullanılacak alanlar",
      previewTags: ["Sevkiyat Yönetimi", "Talep Onayı", "Bölgesel Stok Takibi"]
    }
  }
};

const roleTabs = document.querySelectorAll('.role-tab');
const authTabs = document.querySelectorAll('.auth-tab');
const authHeading = document.getElementById('auth-heading');
const authSubtext = document.getElementById('auth-subtext');
const roleTitle = document.getElementById('role-title');
const roleDescription = document.getElementById('role-description');
const registerNameRow = document.getElementById('register-name-row');
const extraGroup = document.getElementById('extra-group');
const labelExtra = document.getElementById('label-extra');
const fieldExtra = document.getElementById('field-extra');
const labelOne = document.getElementById('label-one');
const labelTwo = document.getElementById('label-two');
const passwordLabel = document.getElementById('password-label');
const fieldOne = document.getElementById('field-one');
const fieldTwo = document.getElementById('field-two');
const fieldPassword = document.getElementById('field-password');
const confirmPasswordGroup = document.getElementById('confirm-password-group');
const agreementText = document.getElementById('agreement-text');
const switchLink = document.getElementById('switch-link');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const submitBtn = document.getElementById('submit-btn');
const previewTitle = document.getElementById('preview-title');
const previewTags = document.getElementById('preview-tags');
const switchNote = document.getElementById('switch-note');
const loginForm = document.getElementById('login-form');

let currentMode = 'login';

function renderRole(roleKey) {
  const role = roles[roleKey][currentMode];

  roleTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.role === roleKey);
  });

  authTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === currentMode);
  });

  authHeading.textContent = currentMode === 'login' ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun';
  authSubtext.textContent = currentMode === 'login'
    ? 'Önce işlem türünü, ardından rolünüzü seçin. Sistem, seçtiğiniz kullanıcı tipine uygun alanları gösterecektir.'
    : 'Yeni kayıt için işlem türünü ve rolünüzü seçin. Sistem, seçilen role göre gerekli bilgileri isteyecektir.';

  roleTitle.textContent = role.title;
  roleDescription.textContent = role.description;
  labelOne.textContent = role.fieldOneLabel;
  labelTwo.textContent = role.fieldTwoLabel;
  passwordLabel.textContent = role.passwordLabel;
  fieldOne.placeholder = role.fieldOnePlaceholder;
  fieldTwo.placeholder = role.fieldTwoPlaceholder;
  fieldPassword.placeholder = role.passwordPlaceholder;
  submitBtn.textContent = role.submitText;
  previewTitle.textContent = role.previewTitle;

 if (currentMode === 'register') {
  registerNameRow.classList.remove('hidden');
  confirmPasswordGroup.classList.remove('hidden');

  if (roleKey === 'patient') {
    extraGroup.classList.add('hidden');
  } else {
    extraGroup.classList.remove('hidden');
    labelExtra.textContent = role.extraLabel;
    fieldExtra.placeholder = role.extraPlaceholder;
  }

  agreementText.textContent = 'Kullanım koşullarını kabul ediyorum';
  switchLink.textContent = 'Zaten hesabın var mı? Giriş yap';
  forgotPasswordBtn.classList.add('hidden');
} else {
    registerNameRow.classList.add('hidden');
    extraGroup.classList.add('hidden');
    confirmPasswordGroup.classList.add('hidden');
    agreementText.textContent = 'Beni hatırla';
    switchLink.textContent = 'Hesabın yok mu? Kayıt ol';
    forgotPasswordBtn.classList.remove('hidden');
  }

  switchNote.textContent = currentMode === 'login'
    ? 'Yeni kullanıcılar için kayıt seçeneği kullanılabilir. Kurumsal kullanıcılar için bu alan başvuru/hesap oluşturma mantığıyla da ilerleyebilir.'
    : 'Bu kayıt alanı proje prototipi içindir. Gerçek sistemde eczane ve depo kayıtları admin onayı ile ilerleyebilir.';

  previewTags.innerHTML = role.previewTags
    .map(tag => `<span class="preview-tag">${tag}</span>`)
    .join('');
}

authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentMode = tab.dataset.mode;
    const activeRole = document.querySelector('.role-tab.active').dataset.role;
    renderRole(activeRole);
  });
});

switchLink.addEventListener('click', () => {
  currentMode = currentMode === 'login' ? 'register' : 'login';
  const activeRole = document.querySelector('.role-tab.active').dataset.role;
  renderRole(activeRole);
});

roleTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    renderRole(tab.dataset.role);
  });
});
const API_BASE_URL = "http://localhost:3000/api";

function saveCurrentUser(user) {
  localStorage.setItem("meditrackCurrentUser", JSON.stringify(user));
  localStorage.setItem("meditrackRole", user.role);
  localStorage.setItem("meditrackDisplayName", user.fullName);
}

function redirectByRole(role) {
  const pageMap = {
    patient: "PatientDashboard.html",
    pharmacy: "PharmacyDashboard.html",
    warehouse: "WarehouseDashboard.html"
  };

  window.location.href = pageMap[role];
}

function getRegisterFullName(role, firstName, lastName, extraValue) {
  if (role === "patient") {
    return `${firstName} ${lastName}`.trim();
  }

  return extraValue || `${firstName} ${lastName}`.trim();
}
loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const activeRole = document.querySelector('.role-tab.active').dataset.role;

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const confirmPasswordInput = document.getElementById('field-confirm-password');

  const firstName = firstNameInput ? firstNameInput.value.trim() : '';
  const lastName = lastNameInput ? lastNameInput.value.trim() : '';
  const extraValue = fieldExtra ? fieldExtra.value.trim() : '';
  const valueOne = fieldOne.value.trim();
  const valueTwo = fieldTwo.value.trim();
  const password = fieldPassword.value.trim();
  const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value.trim() : '';

  try {
    submitBtn.disabled = true;

    if (!password) {
      alert("Şifre zorunlu.");
      return;
    }

    if (currentMode === 'register') {
      if (!valueOne || !valueTwo) {
        alert("Lütfen gerekli alanları doldurun.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Şifreler eşleşmiyor.");
        return;
      }

      const fullName = getRegisterFullName(activeRole, firstName, lastName, extraValue);

      if (!fullName) {
        alert("Ad bilgisi zorunlu.");
        return;
      }

      const registerPayload = {
        fullName,
        role: activeRole,
        password
      };

      if (activeRole === 'patient') {
        registerPayload.tc = valueOne;
      }

      if (activeRole === 'pharmacy') {
        registerPayload.pharmacyNo = valueOne;
        registerPayload.email = valueTwo;
      }

      if (activeRole === 'warehouse') {
  registerPayload.centerCode = valueOne;
  registerPayload.email = valueTwo;
     }

      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerPayload)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Kayıt başarısız.");
        return;
      }

      saveCurrentUser(data.user);
      alert("Kayıt başarılı.");
      redirectByRole(data.user.role);
      return;
    }

   let identifier = valueOne;
    if (!identifier) {
      alert("Lütfen giriş bilgisini doldurun.");
      return;
    }

    const loginPayload = {
      role: activeRole,
      identifier,
      password
    };

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Giriş başarısız.");
      return;
    }

    saveCurrentUser(data.user);
    alert("Giriş başarılı.");
    redirectByRole(data.user.role);

  } catch (error) {
    console.error("Auth error:", error);
    alert("Sunucuya bağlanırken hata oluştu.");
  } finally {
    submitBtn.disabled = false;
  }
});

renderRole('patient');