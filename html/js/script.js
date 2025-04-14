document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada e script.js funcionando!');

    // Função para adicionar a classe 'visible' aos elementos quando entram na viewport
    function handleScroll() {
        const contentBlocks = document.querySelectorAll('.content-block');
        contentBlocks.forEach(block => {
            const blockPosition = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (blockPosition < windowHeight - 100) {
                block.classList.add('visible');
            }
        });
    }

    // Adiciona o evento de rolagem para chamar a função handleScroll
    window.addEventListener('scroll', handleScroll);

    // Chama a função handleScroll para verificar a posição inicial dos elementos
    handleScroll();

    // Função para rolagem suave
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            if (targetId && document.getElementById(targetId)) {
                event.preventDefault();
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Função para abrir e fechar a barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}


