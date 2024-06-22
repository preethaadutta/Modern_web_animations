var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    /*
    loopAdditionalSlides:0,
    loopedSlides:1,
    */
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,/*rotate: 0,*/
      stretch: 0,
      depth: 300,/*depth: 700,100*/
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

var tranding_slide_content=document.getElementsByClassName('tranding-slide-content');
console.log(tranding_slide_content.length);//24

var button_next=document.getElementsByClassName('swiper-button-next');//next button
var button_prev=document.getElementsByClassName('swiper-button-prev');//previous button

var count=0;
slidenumber=count+1;
console.log(slidenumber);
tranding_slide_content[8].style.visibility = "visible";

button_next[0].addEventListener("click", function() 
{
    count=count+1;
    slidenumber=count+1;
    //console.log("clicked");
    console.log(slidenumber);
    if(slidenumber===2)
    {
        tranding_slide_content[8].style.visibility = "hidden";
        tranding_slide_content[9].style.visibility = "visible";
        console.log(tranding_slide_content[9]);
    }
    if(slidenumber===3)
    {
        tranding_slide_content[9].style.visibility = "hidden";
        tranding_slide_content[10].style.visibility = "visible";
        console.log(tranding_slide_content[10]);
    }
    if(slidenumber===4)
    {
        tranding_slide_content[10].style.visibility = "hidden";
        tranding_slide_content[11].style.visibility = "visible";
        console.log(tranding_slide_content[11]);
    }
    if(slidenumber===5)
    {
        tranding_slide_content[11].style.visibility = "hidden";
        tranding_slide_content[12].style.visibility = "visible";
        console.log(tranding_slide_content[12]);
    }
    if(slidenumber===6)
    {
        tranding_slide_content[12].style.visibility = "hidden";
        tranding_slide_content[13].style.visibility = "visible";
        console.log(tranding_slide_content[13]);
    }
    if(slidenumber===7)
    {
        tranding_slide_content[13].style.visibility = "hidden";
        tranding_slide_content[14].style.visibility = "visible";
        console.log(tranding_slide_content[14]);
    }
    if(slidenumber===8)
    {
        tranding_slide_content[14].style.visibility = "hidden";
        tranding_slide_content[15].style.visibility = "visible";
        console.log(tranding_slide_content[15]);
    }
    if(slidenumber===9)
    {
        tranding_slide_content[15].style.visibility = "hidden";
        tranding_slide_content[16].style.visibility = "visible";
        console.log(tranding_slide_content[16]);
    }
});



button_prev[0].addEventListener("click", function() 
{
    count=count-1;
    slidenumber=count-1;
    //console.log("clicked");
    console.log(slidenumber);
    if(slidenumber===-2)
    {
        tranding_slide_content[8].style.visibility = "hidden";
        tranding_slide_content[9].style.visibility = "visible";
        console.log(tranding_slide_content[9]);
    }
    if(slidenumber===3)
    {
        tranding_slide_content[9].style.visibility = "hidden";
        tranding_slide_content[10].style.visibility = "visible";
        console.log(tranding_slide_content[10]);
    }
    if(slidenumber===4)
    {
        tranding_slide_content[10].style.visibility = "hidden";
        tranding_slide_content[11].style.visibility = "visible";
        console.log(tranding_slide_content[11]);
    }
    if(slidenumber===5)
    {
        tranding_slide_content[11].style.visibility = "hidden";
        tranding_slide_content[12].style.visibility = "visible";
        console.log(tranding_slide_content[12]);
    }
    if(slidenumber===6)
    {
        tranding_slide_content[12].style.visibility = "hidden";
        tranding_slide_content[13].style.visibility = "visible";
        console.log(tranding_slide_content[13]);
    }
    if(slidenumber===7)
    {
        tranding_slide_content[13].style.visibility = "hidden";
        tranding_slide_content[14].style.visibility = "visible";
        console.log(tranding_slide_content[14]);
    }
    if(slidenumber===8)
    {
        tranding_slide_content[14].style.visibility = "hidden";
        tranding_slide_content[15].style.visibility = "visible";
        console.log(tranding_slide_content[15]);
    }
    if(slidenumber===9)
    {
        tranding_slide_content[15].style.visibility = "hidden";
        tranding_slide_content[16].style.visibility = "visible";
        console.log(tranding_slide_content[16]);
    }
});