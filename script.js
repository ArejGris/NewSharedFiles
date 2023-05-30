$(function(){
    $('.slides').slick({
        slidesToShow:4,
        dots:false,
        slidesToScroll:2,
        arrows:true,
        responsive:[
          {
            breakpoint:480,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
            }
          },
          {
            breakpoint:780,
            settings:{
              slidesToShow:2,
            }
          },
          {
            breakpoint:1100,
            settings:{
              slidesToShow:3,
            }
          }
        ]
  
  
      });
    }
)