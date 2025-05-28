window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const bolinhas = document.querySelectorAll('.bolinha');
    let index = 0;
  
    function mostrarSlide(n) {
      slides.forEach(slide => slide.classList.remove('ativo'));
      bolinhas.forEach(bolinha => bolinha.classList.remove('ativa'));
  
      slides[n].classList.add('ativo');
      bolinhas[n].classList.add('ativa');
    }
  
    function avancarSlide() {
      index++;
      if (index === slides.length) {
        index = 0;
      }
      mostrarSlide(index);
    }
  
    function autoAvancar() {
      setInterval(avancarSlide, 5000); // Trocar de slide a cada 5 segundos
    }
  
    mostrarSlide(index);
    autoAvancar();
  });
  