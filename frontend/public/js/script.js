(function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtns = Array.from(document.querySelectorAll('.modal-close, #modal-close-2'));
    const buyBtn = document.getElementById('modal-buy');

    function openModal(title, desc) {
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modal.setAttribute('aria-hidden', 'false');
        // trap focus simple
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // abrir modal desde botones
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            // evita que el click en el botón secundario haga doble acción
            const action = e.target.getAttribute('data-action');
            openModal(card.dataset.title || 'Juego', card.dataset.desc || 'Descripción no disponible');
        });
    });

    closeBtns.forEach(b => b.addEventListener('click', closeModal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

})();