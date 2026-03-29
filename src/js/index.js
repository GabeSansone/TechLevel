const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Pega o nome da classe que está no HTML (data-animation)
            const animationClass = entry.target.dataset.animation;
            entry.target.classList.add(animationClass);
        }
    });
}, { threshold: 0.1 });

// Observa todas as seções que possuem o atributo data-animation
document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el));

// --- SEU CÓDIGO DE TROCA DE CARDS (Mantido) ---
const cards = document.querySelectorAll('.card-work-1, .card-work-2');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const currentMain = document.querySelector('.card-work-1');
        if (card === currentMain) return;

        currentMain.classList.replace('card-work-1', 'card-work-2');
        card.classList.replace('card-work-2', 'card-work-1');

        card.classList.add('ativar-animacao');

        card.addEventListener('animationend', () => {
            card.classList.remove('ativar-animacao');
        }, { once: true });
    });
});