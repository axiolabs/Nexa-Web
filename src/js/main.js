// i18n
function applyLang(lang) {
    document.documentElement.lang = lang;
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) toggle.innerText = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-es]').forEach(el => {
        const attr = lang === 'es' ? 'data-es' : 'data-en';
        const t = el.getAttribute(attr);
        if (t) el.innerText = t;
    });
}

function toggleLang() {
    const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
    localStorage.setItem('nexa-lang', newLang);
    applyLang(newLang);
}

document.querySelector('.lang-toggle')?.addEventListener('click', toggleLang);

const savedLang = localStorage.getItem('nexa-lang');
if (savedLang && savedLang !== 'es') {
    applyLang(savedLang);
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
