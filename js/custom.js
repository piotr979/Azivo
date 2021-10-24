(function() {

    // SLIDER 
    const slider = document.getElementById("my-slider");
    const slides = slider.children;

    slides.item(0).style.opacity = 1;
    const slidesCount = slides.length;
    let currentSlide = 0;
    let nextSlide = 1;
    setInterval(function() {


            slides.item(currentSlide).style.opacity = 0;
            nextSlide = nextSlide == (slidesCount - 1) ? 0 : currentSlide + 1;
            slides.item(nextSlide).style.opacity = 1;
            currentSlide = nextSlide;
        }

        , 3600);

})();