$(document).ready(function() {

    const slider = document.getElementById("my-slider");
    const slides = slider.children;

    slides.item(0).style.opacity = 1;
    const slidesCount = slides.length;
    let currentSlide = 0;
    setInterval(function() {


            // slide 0 set to 0
            // slide 1 set to 1

            //slide 1 set to 0
            //slide 2 set to 1

            //slide 2 set to 0
            //slide 3 set to 1

            //slide 3 set to 0
            //slide 0 set to 1




            slides.item(currentSlide).style.opacity = 0;
            nextSlide = currentSlide + 1;
            if (nextSlide == slidesCount) {
                nextSlide = 0;
            }
            slides.item(nextSlide).style.opacity = 1;
            currentSlide = nextSlide;

            // slides.item(1).classList.remove("fade-out");
            // slides.item(1).classList.add("fade-in");
            // slides.item(1).classList.remove("fade-out");
            // slides.item(1).classList.add("fade-in");
        }

        , 3600);

    // poczekaj sekunde
    // jesli currentSlide = 0 set it opacity to 0
    // set nextSlide opacity to 1


    // jesli currentSlide = lastSlide
    // set currentSlide to 0 , Firstslide to 1

    // jesli currentSlide 
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        rewind: true,
        height: 100,
        autoplayTimeout: 6000,
        autoplaySpeed: 1200,
        animateOut: 'fadeOut'

    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2; // Position of the current item
        console.log(owl);
        $('h1').removeClass('animate__slideInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__slideInUp');
        console.log($('.owl-item').not('.cloned').eq(item).find('h1'));
    })

});