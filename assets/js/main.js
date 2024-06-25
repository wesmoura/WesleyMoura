document.addEventListener('DOMContentLoaded', () => {
    const initialSectionId = 'sobre-mim'; // ID da seção inicial
    const sections = document.querySelectorAll('.container section'); // Seleciona todas as seções
  
    // Função para mostrar uma seção específica
    function showSection(sectionId) {
      sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
      });
  
      const section = document.getElementById(sectionId);
      if (section) {
        section.style.display = 'block'; // Mostra a seção desejada
      }
    }
  
    // Mostra a seção inicialmente ao carregar a página
    showSection(initialSectionId);
  
    // Adiciona eventos de clique para cada botão de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId); // Mostra a seção correspondente ao botão clicado
      });
    });
  });
  