let currentLang = 'es';

export function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.lang = currentLang;
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) {
        toggle.innerText = currentLang === 'es' ? 'EN' : 'ES';
    }
    document.querySelectorAll('[data-es]').forEach(el => {
        const attr = currentLang === 'es' ? 'data-es' : 'data-en';
        const translation = el.getAttribute(attr);
        if (translation) {
            el.innerText = translation;
        }
    });
}

export function initI18n() {
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleLang);
    }
}
