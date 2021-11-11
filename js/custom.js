(function () {
  const check_in = document.querySelector('input[name="check_in"]');

  // veryfies if check_in exisits on page. If yes, it triggers calendar script
  if (check_in != null) {
    const check_out = document.querySelector('input[name="check_out"]');
    const datepicker_in = new Datepicker(check_in, {
      // ...options
    });
    const datepicker_out = new Datepicker(check_out, {
      // ...options
    });
  }


  // *********
  // NAVMENU
  // **********

  const btnNav = document.querySelector(".btn-mobile-nav");
  const header = document.getElementsByTagName("header").item(0);
  console.log("Test");
  btnNav.addEventListener("click", function () {
    console.log("Test");
    header.classList.toggle("nav-open");
  });

   // *********
  // SLIDER
  // **********
  const slides = document.querySelectorAll("#my-slider > .slide");
  // const slides = slider.children;
  if (slides.length > 0) {
    slides.item(0).style.opacity = 1;
    const slidesCount = slides.length;
    let currentSlide = 0;
    let nextSlide = 1;

    const slideText = document.querySelectorAll(".slide-text__head");
    const slideSubText = document.querySelectorAll(".slide-text__subhead");
    console.log(slideText);
    setInterval(
      function () {
        slides.item(currentSlide).style.opacity = 0;
        nextSlide = nextSlide == slidesCount - 1 ? 0 : currentSlide + 1;

        console.log(currentSlide);
        console.log(slideText.length);

        if (currentSlide < slideText.length) {
          slideText[currentSlide].classList.remove("animate__slideInUp");
          slideSubText[currentSlide].classList.remove("animate__slideInUp");
        }
        // here currentSlide is previous slide
        currentSlide = nextSlide;
        slides.item(nextSlide).style.opacity = 1;

        //if must be repeated for the some condition, need to find better way
        if (currentSlide < slideText.length) {
          slideText[currentSlide].classList.add("animate__slideInUp");
          slideSubText[currentSlide].classList.add("animate__slideInUp");
        }
      },

      5000
    );
  }
})();

// owl.on('changed.owl.carousel', function (event) {
//     var item = event.item.index - 2;     // Position of the current item
//     console.log(owl);
//     $('h2').removeClass('animate__slideInUp');

//     $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__slideInUp');
//     console.log($('.owl-item').not('.cloned').eq(item).find('h1'));
// });
