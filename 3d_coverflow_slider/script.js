//var swiperAnimation = new SwiperAnimation();

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
    },
  
});

/*
  //var swiper = new Swiper('.tranding-slider');
  TrandingSlider.on('slideChange', function () {
    if(this.activeIndex === 1) {
      console.log("IM ON SECOND SLIDE!");
      alert("IM ON SECOND SLIDE!");
    }
  });
*/
/*image content visibility style*/
var swiper_slide=document.getElementsByClassName('swiper-slide');
var tranding_slide_content=document.getElementsByClassName('tranding-slide-content');
var swiper_pagination_bullet=document.getElementsByClassName('swiper-pagination-bullet');
//var swiper_slide_active=document.getElementsByClassName('swiper-slide-active');
//console.log(swiper_slide.length);//24
//for(var i = 0; i<swiper_slide.length; i++)
for(var i = 0; i<swiper_pagination_bullet.length; i++)
{
  
    let isMainPresent = swiper_pagination_bullet[i].classList.contains('swiper-pagination-bullet-active');
    if (isMainPresent)
    {
    //tranding_slide_content[i].style.visibility = "visible";
    console.log(i);
    }
    /*
    else
    {
    //tranding_slide_content[i].style.visibility = "hidden";
    }
    */
    
    
    //console.log(swiper_slide[i]);
    
   //if(swiper_slide[i].style.zIndex == "1")
   //{
        //tranding_slide_content[i].style.visibility = "visible";
        //console.log(i+" is active");
   //}
   /*
   else if(swiper_slide[i].style.zIndex != "1")
   {
        //tranding_slide_content[i].style.visibility = "hidden";
   }
   */ 
}
