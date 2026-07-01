    /* NAVBAR */

    window.addEventListener("scroll",()=>{

        const navbar=document.querySelector(".navbar");

        if(window.scrollY>40){

            navbar.style.background="rgba(0,0,0,0.82)";

        }else{

            navbar.style.background="rgba(0,0,0,0.45)";
        }

    });
    /* =========================
    LANGUAGE SWITCH
    ========================= */

    function setLang(lang){

        /* NAVIGATION */

        const navLinks = document.querySelectorAll('.nav-left a');

        const mobileLinks = document.querySelectorAll('.mobile-menu a');

        if(lang === 'en'){

            /* NAVBAR */

            navLinks[0].innerText = 'Home';
            navLinks[1].innerText = 'Interiors';
            navLinks[2].innerText = 'Architecture';
            navLinks[3].innerText = 'Services';
            navLinks[4].innerText = 'Portfolio';

            /* MOBILE MENU */

            mobileLinks[0].innerText = 'Home';
            mobileLinks[1].innerText = 'Interiors';
            mobileLinks[2].innerText = 'Architecture';
            mobileLinks[3].innerText = 'Services';
            mobileLinks[4].innerText = 'Portfolio';
            mobileLinks[5].innerText = 'Contacts';

            /* BUTTON */

            document.querySelector('.nav-btn').innerText='Contact Us';

            /* TITLE */

            document.querySelector('.services-top h1').innerText='Services';

            /* CARDS */

            document.querySelectorAll('.service-content h3')[0].innerHTML='Interior<br>Design';

            document.querySelectorAll('.service-content h3')[1].innerHTML='Architecture';

            document.querySelectorAll('.service-content h3')[2].innerHTML='3D<br>Visualization';

            document.querySelectorAll('.service-content h3')[3].innerHTML='Custom<br>Furniture';

            document.querySelectorAll('.service-content h3')[4].innerHTML='Premium<br>Outdoor';

            document.querySelectorAll('.service-content h3')[5].innerHTML='Luxury<br>Interior';

            /* CARD BUTTONS */

            document.querySelectorAll('.service-btn').forEach(btn=>{

                btn.innerText='More';

            });

        }

        else{

            /* NAVBAR */

            navLinks[0].innerText = 'Главная';
            navLinks[1].innerText = 'Интерьеры';
            navLinks[2].innerText = 'Архитектура';
            navLinks[3].innerText = 'Услуги';
            navLinks[4].innerText = 'Портфолио';

            /* MOBILE MENU */

            mobileLinks[0].innerText = 'Главная';
            mobileLinks[1].innerText = 'Интерьеры';
            mobileLinks[2].innerText = 'Архитектура';
            mobileLinks[3].innerText = 'Услуги';
            mobileLinks[4].innerText = 'Портфолио';
            mobileLinks[5].innerText = 'Контакты';

            /* BUTTON */

            document.querySelector('.nav-btn').innerText='Написать нам';

            /* TITLE */

            document.querySelector('.services-top h1').innerText='Услуги';

            /* CARDS */

            document.querySelectorAll('.service-content h3')[0].innerHTML='Дизайн<br>интерьера';

            document.querySelectorAll('.service-content h3')[1].innerHTML='Архитектура';

            document.querySelectorAll('.service-content h3')[2].innerHTML='3D<br>визуализация';

            document.querySelectorAll('.service-content h3')[3].innerHTML='Индивидуальная<br>мебель';

            document.querySelectorAll('.service-content h3')[4].innerHTML='Premium<br>Outdoor';

            document.querySelectorAll('.service-content h3')[5].innerHTML='Luxury<br>Interior';

            /* CARD BUTTONS */

            document.querySelectorAll('.service-btn').forEach(btn=>{

                btn.innerText='Подробнее';

            });

        }

    }

    /* LANGUAGE */

    function setLang(lang){

        if(lang === 'en'){

            document.querySelector('.services-top h1').innerText='Services';

            document.querySelectorAll('.service-content h3')[0].innerHTML='Interior<br>Design';

            document.querySelectorAll('.service-content h3')[1].innerHTML='Architecture';

            document.querySelectorAll('.service-content h3')[2].innerHTML='3D<br>Visualization';

            document.querySelectorAll('.service-content h3')[3].innerHTML='Custom<br>Furniture';

            document.querySelectorAll('.service-content h3')[4].innerHTML='Premium<br>Outdoor';

            document.querySelectorAll('.service-content h3')[5].innerHTML='Luxury<br>Interior';

            document.querySelectorAll('.service-btn').forEach(btn=>{

                btn.innerText='More';

            });

            document.querySelector('.nav-btn').innerText='Contact Us';

        }

        else{

            document.querySelector('.services-top h1').innerText='Услуги';

            document.querySelectorAll('.service-content h3')[0].innerHTML='Дизайн<br>интерьера';

            document.querySelectorAll('.service-content h3')[1].innerHTML='Архитектура';

            document.querySelectorAll('.service-content h3')[2].innerHTML='3D<br>визуализация';

            document.querySelectorAll('.service-content h3')[3].innerHTML='Индивидуальная<br>мебель';

            document.querySelectorAll('.service-content h3')[4].innerHTML='Premium<br>Outdoor';

            document.querySelectorAll('.service-content h3')[5].innerHTML='Luxury<br>Interior';

            document.querySelectorAll('.service-btn').forEach(btn=>{

                btn.innerText='Подробнее';

            });

            document.querySelector('.nav-btn').innerText='Написать нам';

        }

    }/* =========================
    MOBILE MENU
    ========================= */

    function toggleMenu(){

        document
        .getElementById("mobileMenu")
        .classList
        .toggle("active");

    }
    /* ───────── OPEN PRIVACY ───────── */

    function openPrivacy() {

        const overlay = document.getElementById('privacyOverlay');
    
        overlay.classList.add('open');
    
        document.body.style.overflow = 'hidden';
    
    }
    
    /* ───────── CLOSE PRIVACY ───────── */
    
    function closePrivacy() {
    
        const overlay = document.getElementById('privacyOverlay');
    
        overlay.classList.remove('open');
    
        document.body.style.overflow = '';
    
    }
    
    /* ───────── ESC CLOSE ───────── */
    
    document.addEventListener('keydown', (e) => {
    
        if (e.key === 'Escape') {
    
        closePrivacy();
    
        }
    
    });const translations = {

        ru: {
    
            home: "Главная",
    
            interiors: "Интерьеры",
    
            architecture: "Архитектура",
    
            services: "Услуги",
    
            portfolio: "Портфолио",
    
            contacts: "Контакты",
    
            contactBtn: "Написать нам",
    
            servicesTitle: "Услуги",
    
            card1: "Дизайн<br>интерьера",
    
            card2: "Архитектура",
    
            card3: "3D<br>визуализация",
    
            card4: "Индивидуальная<br>мебель",
    
            card5: "Авторский надзор",
    
            card6: "День с дизайнером" ,
    
            moreBtn: "Подробнее",
    
            footerContacts: "Контакты",
    
            socials: "Социальные сети",
    
            privacy: "Политика конфиденциальности",
    
            privacyTitle: "Политика конфиденциальности",
    
            general: "Общие положения"
    
        },
    
        en: {
    
            home: "Home",
    
            interiors: "Interiors",
    
            architecture: "Architecture",
    
            services: "Services",
    
            portfolio: "Portfolio",
    
            contacts: "Contacts",
    
            contactBtn: "Contact Us",
    
            servicesTitle: "Services",
    
            card1: "Interior<br>Design",
    
            card2: "Architecture",
    
            card3: "3D<br>Visualization",
    
            card4: "Custom<br>Furniture",
    
            card5: "A day with a designer",
    
            card6: "Author's supervision",
    
            moreBtn: "More",
    
            footerContacts: "Contacts",
    
            socials: "Social Media",
    
            privacy: "Privacy Policy",
    
            privacyTitle: "Privacy Policy",
    
            general: "General Provisions"
    
        }
    
    };
    
    function setLang(lang){
    
        document.querySelectorAll("[data-i18n]").forEach(el=>{
    
            const key = el.getAttribute("data-i18n");
    
            if(translations[lang][key]){
    
                el.innerHTML = translations[lang][key];
    
            }
    
        });
    
    }
    ru: {

        privacy: "Политика конфиденциальности"
    
    }
    
    en: {
    
        privacy: "Privacy Policy"
    
    }
    function toggleMobileContacts(){
        document
            .getElementById("mobileContactMenu")
            .classList
            .toggle("active");
    }
    