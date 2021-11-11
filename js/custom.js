(function() {

    // SLIDER 
    const slides = document.querySelectorAll("#my-slider > .slide");
    // const slides = slider.children;
    console.log(slides);
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

    const check_in = document.querySelector('input[name="check_in"]');
    const check_out = document.querySelector('input[name="check_out"]');
    const datepicker_in = new Datepicker(check_in, {
        // ...options
    });
    const datepicker_out = new Datepicker(check_out, {
        // ...options
    });

})();


// *********
// NAVMENU
// **********

const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
btnNav.addEventListener('click', function() {
   header.classList.toggle('nav-open');
})
