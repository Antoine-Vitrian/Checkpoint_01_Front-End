document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const controlAreas = document.querySelectorAll('.control-area');

    controlAreas.forEach(area => {
        area.addEventListener('click', () => {
            const imageName = area.getAttribute('data-image');
            mainImage.src = `../assets/imgs/${imageName}`;
            
            // Adiciona uma animação de zoom
            mainImage.style.transform = 'scale(1.1)';
            setTimeout(() => {
                mainImage.style.transform = 'scale(1)';
            }, 300);

            // Atualiza a classe ativa
            controlAreas.forEach(a => a.classList.remove('active'));
            area.classList.add('active');
        });
    });
});
