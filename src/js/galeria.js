document.addEventListener('DOMContentLoaded', () => {
    const imagemPrincipal = document.getElementById('imagem-principal');
    const areasControle = document.querySelectorAll('.area-controle');

    areasControle.forEach(area => {
        area.addEventListener('click', () => {
            const nomeImagem = area.getAttribute('data-imagem');
            imagemPrincipal.src = `../assets/imgs/${nomeImagem}`;
            
            imagemPrincipal.style.transform = 'scale(1.1)';
            setTimeout(() => {
                imagemPrincipal.style.transform = 'scale(1)';
            }, 300);

            areasControle.forEach(a => a.classList.remove('ativo'));
            area.classList.add('ativo');
        });
    });
});
