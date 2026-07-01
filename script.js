// ── TRANSLATIONS ──
const translations = {
  ru: {
    // Navbar
    'nav-portfolio':  'Портфолио',
    'nav-products':   'Изделия',
    'nav-about':      'О нас',
    'nav-services':   'Услуги',
    'nav-vacancies':  'Вакансии',
    'nav-contacts':   'Контакты',

    // Hero
    'hero-title':     'Создаём проекты как единое целое',
    'hero-sub':       'Чистая эстетика, продуманные решения и внимание к каждой детали.',
    'hero-btn':       'Оставить заявку',

    // Projects
    'projects-heading':   'Проекты',
    'label-interior':     'Дизайн интерьера',
    'label-products':     'Изделия',
    'label-arch':         'Архитектура',

    // Stats
    'stat-projects':  'Завершённых проектов',
    'stat-years':     'Лет опыта',
    'stat-clients':   'Довольных клиентов',
    'stat-support':   'Поддержка клиентов',

    // Services
    'services-heading':   'Услуги',
    'svc-arch':           'Архитектура',
    'svc-interior':       'Дизайн-проект интерьера',
    'svc-custom':         'Индивидуальные изделия',
    'svc-visual':         'Визуализация',
    'svc-btn':            'Оставить заявку',

    // About
    'about-label':    'О нас',
    'about-title':    'Мы создаём эмоции через дизайн',
    'about-desc':     '<strong>Mukaab</strong> — это команда опытных архитекторов и дизайнеров, специализирующихся на создании премиальных интерьеров. Каждый проект — это уникальное путешествие от идеи к реальности.',
    'check-1':        'Индивидуальный подход к каждому клиенту',
    'check-2':        'Гарантия качества и сроков выполнения',
    'check-3':        'Использование экологичных материалов',
    'check-4':        'Полный цикл от проектирования до сдачи',

    // Contacts
    'contacts-label':     'Контакты',
    'clabel-phone':       'Телефон',
    'clabel-email':       'Email',
    'clabel-address':     'Адрес',
    'clabel-social':      'Социальные сети',
    'address-val':        'Минск, Беларусь',
    'form-label':         'Оставить заявку',
    'ph-name':            'Имя',
    'ph-phone':           'Телефон',
    'opt-call':           'Позвонить',
    'opt-write':          'Написать',
  'agree-text':         'В соответствии с политикой обработки персональных данных и соответствии <a href="#" onclick="openPrivacy(); return false;">политикой конфиденциальности</a>',

    // Footer
    'footer-p': '© 2026 | ООО «Мукааб» УНП: 193790928',
     'footer-policy': 'Политика конфиденциальности',
  },

  en: {
    // Navbar
    'nav-portfolio':  'Portfolio',
    'nav-products':   'Products',
    'nav-about':      'About',
    'nav-services':   'Services',
    'nav-vacancies':  'Careers',
    'nav-contacts':   'Contacts',

    // Hero
    'hero-title':     'We Create Projects as a Unified Whole',
    'hero-sub':       'Pure aesthetics, thoughtful solutions and attention to every detail.',
    'hero-btn':       'Leave a Request',

    // Projects
    'projects-heading':   'Projects',
    'label-interior':     'Interior Design',
    'label-products':     'Products',
    'label-arch':         'Architecture',

    // Stats
    'stat-projects':  'Completed Projects',
    'stat-years':     'Years of Experience',
    'stat-clients':   'Satisfied Clients',
    'stat-support':   'Client Support',

    // Services
    'services-heading':   'Services',
    'svc-arch':           'Architecture',
    'svc-interior':       'Interior Design Project',
    'svc-custom':         'Custom Products',
    'svc-visual':         'Visualization',
    // About
    'about-label':    'About Us',
    'about-title':    'We Create Emotions Through Design',
    'about-desc':     '<strong>Mukaab</strong> is a team of experienced architects and designers specialising in creating premium interiors. Every project is a unique journey from idea to reality.',
    'agree-text':     'In accordance with the personal data processing policy and in accordance with the <a href="#" onclick="openPrivacy(); return false;">privacy policy</a>',
    'check-1':        'Individual approach to every client',
    'check-2':        'Quality and deadline guarantee',
    'check-3':        'Use of eco-friendly materials',
    'check-4':        'Full cycle from design to handover',

    // Contacts
    'contacts-label':     'Contacts',
    'clabel-phone':       'Phone',
    'clabel-email':       'Email',
    'clabel-address':     'Address',
    'clabel-social':      'Social Media',
    'address-val':        'Minsk, Belarus',
    'form-label':         'Leave a Request',
    'ph-name':            'Name',
    'ph-phone':           'Phone',
    'opt-call':           'Call me',
    'opt-write':          'Message me',
    'btn-submit':         'Send',

    // Footer
  'footer-p': '© 2026 | LLC "MUKAAB". Tax ID: 193790928',
'footer-policy': 'Privacy Policy',
  }
};

// ── APPLY LANGUAGE ──
function applyLang(lang) {
  const t = translations[lang];

  // helper: set innerText safely
  const setText = (sel, key) => {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.textContent = t[key];
  };
  const setHTML = (sel, key) => {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.innerHTML = t[key];
  };
  const setAttr = (sel, attr, key) => {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.setAttribute(attr, t[key]);
  };

  // Navbar
  setText('[data-i18n="nav-portfolio"]',  'nav-portfolio');
  setText('[data-i18n="nav-products"]',   'nav-products');
  setText('[data-i18n="nav-about"]',      'nav-about');
  setText('[data-i18n="nav-services"]',   'nav-services');
  setText('[data-i18n="nav-vacancies"]',  'nav-vacancies');
  setText('[data-i18n="nav-contacts"]',   'nav-contacts');

  // Hero
  setText('[data-i18n="hero-title"]',     'hero-title');
  setText('[data-i18n="hero-sub"]',       'hero-sub');
  setText('[data-i18n="hero-btn"]',       'hero-btn');

  // Projects
  setText('[data-i18n="projects-heading"]', 'projects-heading');
  setText('[data-i18n="label-interior"]', 'label-interior');
  setText('[data-i18n="label-products"]', 'label-products');
  setText('[data-i18n="label-arch"]',     'label-arch');

  // Stats
  setText('[data-i18n="stat-projects"]',  'stat-projects');
  setText('[data-i18n="stat-years"]',     'stat-years');
  setText('[data-i18n="stat-clients"]',   'stat-clients');
  setText('[data-i18n="stat-support"]',   'stat-support');

  // Services
  setText('[data-i18n="services-heading"]', 'services-heading');
  setText('[data-i18n="svc-arch"]',       'svc-arch');
  setText('[data-i18n="svc-interior"]',   'svc-interior');
  setText('[data-i18n="svc-custom"]',     'svc-custom');
  setText('[data-i18n="svc-visual"]',     'svc-visual');
  document.querySelectorAll('[data-i18n="svc-btn"]').forEach(el => el.textContent = t['svc-btn']);

  // About
  setText('[data-i18n="about-label"]',    'about-label');
  setText('[data-i18n="about-title"]',    'about-title');
  setHTML('[data-i18n="about-desc"]',     'about-desc');
  setText('[data-i18n="check-1"]',        'check-1');
  setText('[data-i18n="check-2"]',        'check-2');
  setText('[data-i18n="check-3"]',        'check-3');
  setText('[data-i18n="check-4"]',        'check-4');

  // Contacts
  setText('[data-i18n="contacts-label"]', 'contacts-label');
  setText('[data-i18n="clabel-phone"]',   'clabel-phone');
  setText('[data-i18n="clabel-email"]',   'clabel-email');
  setText('[data-i18n="clabel-address"]', 'clabel-address');
  setText('[data-i18n="clabel-social"]',  'clabel-social');
  setText('[data-i18n="address-val"]',    'address-val');
  setText('[data-i18n="form-label"]',     'form-label');
  setAttr('[data-i18n="ph-name"]',   'placeholder', 'ph-name');
  setAttr('[data-i18n="ph-phone"]',  'placeholder', 'ph-phone');
  setText('[data-i18n="opt-call"]',       'opt-call');
  setText('[data-i18n="opt-write"]',      'opt-write');
  setHTML('[data-i18n="agree-text"]',     'agree-text');
  setText('[data-i18n="btn-submit"]',     'btn-submit');

  // Footer
  setHTML('[data-i18n="footer-copy"]',    'footer-copy');
  setText('[data-i18n="footer-policy"]',  'footer-policy');

  // ── html lang attribute (меняет язык документа) ──
  document.documentElement.lang = lang;

  
}

// ── LANGUAGE SWITCHER ──
function changeLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const active = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
  if (active) active.classList.add('active');
  applyLang(lang);
  applyPrivacyLang(lang);
}

/* NAVBAR SCROLL */

const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});
// ── HERO SLIDER ──
let current = 0;
const slides = document.getElementById('heroSlides');
const dots = document.querySelectorAll('.hero-dot');
function goSlide(n) {
  current = n;
  slides.style.transform = 'translateX(-' + (100 / 3 * n) + '%)';
  dots.forEach((d, i) => d.classList.toggle('active', i === n));
}
dots.forEach((dot, i) => dot.addEventListener('click', () => goSlide(i)));
setInterval(() => goSlide((current + 1) % 3), 5000);

// ── INIT ──
applyLang('ru');
applyPrivacyLang('ru');
/* ── BURGER MENU ── */
const burger = document.getElementById('burger');

const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

burger.addEventListener('click', () => {
  navLeft.classList.toggle('active');
  navRight.classList.toggle('active');
});
/* ── STATS ANIMATION ── */
window.addEventListener('load', () => {

  const stats = document.querySelectorAll('.stat-item');

  stats.forEach((item) => {

    item.classList.add('show');

  });

});
/* ----- STATS COUNTER ----- */

const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 80;

    if (current < target) {

      counter.innerText = Math.ceil(current + increment);

      counter.classList.add('updated');

      setTimeout(() => {
        counter.classList.remove('updated');
      }, 200);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;
    }

  };

  updateCounter();

});
function openPrivacy() {
  const overlay = document.getElementById('privacyOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePrivacy() {
  const overlay = document.getElementById('privacyOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePrivacy();
});

// ── PRIVACY TRANSLATIONS ──
const privacyTranslations = {
  ru: {
    'pp-label':       'Юридический документ',
    'pp-title':       'Политика конфиденциальности',
    'pp-s1-h':        'Общие положения',
    'pp-s1-p':        'Настоящая Политика определяет порядок обработки персональных данных <strong>ООО «Мукааб»</strong> в соответствии с законодательством Республики Беларусь.',
    'pp-s2-h':        'Основные понятия',
    'pp-s2-ul':       '<li><strong>Персональные данные</strong> — информация, относящаяся к физическому лицу.</li><li><strong>Обработка данных</strong> — сбор, хранение, использование, передача и удаление.</li><li><strong>Пользователь</strong> — любое лицо, посещающее сайт.</li>',
    'pp-s3-h':        'Данные, которые мы собираем',
    'pp-s3-ul':       '<li>Имя и фамилия</li><li>Номер телефона</li><li>Адрес электронной почты</li><li>Ссылки на социальные сети</li><li>Фотографии (при передаче)</li><li>IP-адрес, cookies, действия на сайте</li>',
    'pp-s4-h':        'Цели обработки',
    'pp-s4-ul':       '<li>Обработка заявок и обратная связь</li><li>Предоставление информации об услугах</li><li>Подготовка коммерческих предложений</li><li>Улучшение работы сайта</li><li>Маркетинговые коммуникации</li>',
    'pp-s5-h':        'Правовые основания',
    'pp-s5-ul':       '<li>Согласие пользователя</li><li>Заключение и исполнение договора</li><li>Требования законодательства РБ</li>',
    'pp-s6-h':        'Передача данных',
    'pp-s6-p':        'Данные не передаются третьим лицам без согласия пользователя. Исключение — сервисы аналитики и CRM, обеспечивающие работу сайта.',
    'pp-s7-h':        'Срок хранения',
    'pp-s7-p':        'Данные хранятся не дольше необходимого либо до отзыва согласия пользователем.',
    'pp-s8-h':        'Права пользователя',
    'pp-s8-ul':       '<li>Получать информацию о своих данных</li><li>Требовать изменения или удаления</li><li>Отозвать согласие на обработку</li><li>Ограничить обработку данных</li>',
    'pp-s9-h':        'Cookies',
    'pp-s9-p':        'Сайт использует cookies для работы, аналитики и персонализации. Можно отключить в настройках браузера.',
    'pp-s10-h':       'Защита данных',
    'pp-s10-p':       'Применяются организационные и технические меры защиты от несанкционированного доступа.',
    'pp-s11-h':       'Изменение политики',
    'pp-s11-p':       'Актуальная версия Политики всегда доступна на сайте.',
    'pp-s12-h':       'Контакты',
    'pp-org-label':   'Организация',
    'pp-org-val':     'ООО «Мукааб»',
    'pp-phone-label': 'Телефон',
    'pp-addr-label':  'Адрес',
    'pp-addr-val':    'Минск, Беларусь',
  },
  en: {
    'pp-label':       'Legal Document',
    'pp-title':       'Privacy Policy',
    'pp-s1-h':        'General Provisions',
    'pp-s1-p':        'This Policy defines the procedure for processing personal data by <strong>Mukaab LLC</strong> in accordance with the legislation of the Republic of Belarus.',
    'pp-s2-h':        'Key Definitions',
    'pp-s2-ul':       '<li><strong>Personal Data</strong> — information relating to an individual.</li><li><strong>Data Processing</strong> — collection, storage, use, transfer and deletion.</li><li><strong>User</strong> — any person visiting the website.</li>',
    'pp-s3-h':        'Data We Collect',
    'pp-s3-ul':       '<li>Name and surname</li><li>Phone number</li><li>Email address</li><li>Social media links</li><li>Photos (if provided)</li><li>IP address, cookies, site activity</li>',
    'pp-s4-h':        'Purposes of Processing',
    'pp-s4-ul':       '<li>Processing requests and feedback</li><li>Providing information about services</li><li>Preparing commercial proposals</li><li>Improving website performance</li><li>Marketing communications</li>',
    'pp-s5-h':        'Legal Grounds',
    'pp-s5-ul':       '<li>User consent</li><li>Conclusion and execution of a contract</li><li>Requirements of Belarusian legislation</li>',
    'pp-s6-h':        'Data Transfer',
    'pp-s6-p':        'Data is not transferred to third parties without user consent, except for analytics services and CRM systems supporting site operations.',
    'pp-s7-h':        'Retention Period',
    'pp-s7-p':        'Data is stored no longer than necessary or until the user withdraws consent.',
    'pp-s8-h':        'User Rights',
    'pp-s8-ul':       '<li>Access information about your data</li><li>Request correction or deletion</li><li>Withdraw consent to processing</li><li>Restrict data processing</li>',
    'pp-s9-h':        'Cookies',
    'pp-s9-p':        'The website uses cookies for functionality, analytics and personalisation. You can disable cookies in your browser settings.',
    'pp-s10-h':       'Data Security',
    'pp-s10-p':       'Organisational and technical measures are applied to protect data from unauthorised access.',
    'pp-s11-h':       'Policy Updates',
    'pp-s11-p':       'The current version of this Policy is always available on the website.',
    'pp-s12-h':       'Contacts',
    'pp-org-label':   'Company',
    'pp-org-val':     'Mukaab LLC',
    'pp-phone-label': 'Phone',
    'pp-addr-label':  'Address',
    'pp-addr-val':    'Minsk, Belarus',
  }
};

function applyPrivacyLang(lang) {
  const t = privacyTranslations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n^="pp-"]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    // ul элементы — innerHTML, остальные textContent или innerHTML
    if (el.tagName === 'UL' || key.endsWith('-p') || key === 'pp-s1-p' || key === 'pp-org-val' || key === 'pp-addr-val') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
}