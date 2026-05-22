// i18n
let currentLang = 'es';

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.lang = currentLang;
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) toggle.innerText = currentLang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-es]').forEach(el => {
        const attr = currentLang === 'es' ? 'data-es' : 'data-en';
        const t = el.getAttribute(attr);
        if (t) el.innerText = t;
    });
}

document.querySelector('.lang-toggle')?.addEventListener('click', toggleLang);

// Waitlist form
document.getElementById('waitlistForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open('https://forms.gle/s7UvxqbVVACWn2HY8', '_blank', 'noopener');
});

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
