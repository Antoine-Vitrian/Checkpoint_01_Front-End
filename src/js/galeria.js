document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const controlAreas = document.querySelectorAll('.control-area');

    controlAreas.forEach(area => {
        area.addEventListener('click', () => {
            const imageName = area.getAttribute('data-image');
            mainImage.src = `../assets/imgs/${imageName}`;
            
            mainImage.style.transform = 'scale(1.1)';
            setTimeout(() => {
                mainImage.style.transform = 'scale(1)';
            }, 300);

            controlAreas.forEach(a => a.classList.remove('active'));
            area.classList.add('active');
        });
    });
});
