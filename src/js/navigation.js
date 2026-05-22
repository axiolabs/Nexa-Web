export function initNavigation() {
    const form = document.getElementById('waitlistForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            window.open('https://forms.gle/s7UvxqbVVACWn2HY8', '_blank', 'noopener');
        });
    }
}
