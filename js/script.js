document.addEventListener('DOMContentLoaded', function () {
    const pdfUrls = {
      'card-france': 'img/countries/pd/France.pdf',
      'card-italy': 'img/countries/pd/Italy.pdf',
      'card-japan': 'img/countries/pd/Japan.pdf',
      'card-australia': 'img/countries/pd/Australia.pdf',
      'card-brazil': 'img/countries/pd/Brazil.pdf',
      'card-canada': 'img/countries/pd/Canada.pdf',
      'card-germany': 'img/countries/pd/Germany.pdf',
      'card-india': 'img/countries/pd/SuadiArabia.pdf',
      'card-spain': 'img/countries/pd/Spain.pdf',
      'card-egypt': 'img/countries/pd/Egypt.pdf',
      'card-south-africa': 'img/countries/pd/South Africa.pdf',
      'card-thailand': 'img/countries/pd/Thailand.pdf',
      'card-greece': 'img/countries/pd/Greece.pdf',
      'card-switzerland': 'img/countries/pd/Switzerland.pdf',
      'card-Dubai': 'img/countries/pd/Dubai.pdf',
      'card-China': 'img/countries/pd/Chaina.pdf',
      'card-Malaysia': 'img/countries/pd/Malaysia.pdf',
      'card-turkey': 'img/countries/pd/Turkey.pdf'
    };
  
    Object.keys(pdfUrls).forEach(function (cardId) {
      document.getElementById(cardId).addEventListener('click', function (e) {
        e.preventDefault();
        window.open(pdfUrls[cardId], '_blank');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#carouselExampleIndicators');
    var prevButton = document.querySelector('#carouselPrev');
    var nextButton = document.querySelector('#carouselNext');
  
    function updateCarouselControls() {
      var currentIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));
  
      // Disable 'Previous' button if on the first slide
      if (currentIndex === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }
  
      // Disable 'Next' button if on the last slide
      if (currentIndex === carousel.querySelectorAll('.carousel-item').length - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    }
  
    // Initialize the controls on page load
    updateCarouselControls();
  
    // Update controls when the slide event occurs
    carousel.addEventListener('slid.bs.carousel', updateCarouselControls);
  });