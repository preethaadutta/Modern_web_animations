//var TrandingSlider;
$('.tranding-slider').on('slideChange', function (e) {
    if(this.activeIndex === 1) 
    {
        console.log("IM ON SECOND SLIDE!");
        alert("IM ON SECOND SLIDE!");
    }

    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 20,/*rotate: 0,*/
          stretch: 0,
          depth: 700,/*depth: 100,*/
          modifier: 1,/*modifier: 2.5,*/
          slideShadows: true,
    
          /*
          effect: "fade",
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          */
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    
      });
});