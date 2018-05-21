 $('.production-slider__top').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              asNavFor: ".production-slider__bottom",
              arrows: false
            });

            $(".production-slider__bottom").slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              swipe: true,
              asNavFor: ".production-slider__top",
              focusOnSelect: true,  
              prevArrow: "<div class='strelki strelki_left'></div>",
              nextArrow: "<div class='strelki strelki_right'></div>",
              responsive: [
                 {
                   breakpoint: 576,
                   settings: {
                    slidesToShow: 1,
                   }
                 }
                 ,
                 {
                   breakpoint: 768,
                   settings: {
                    slidesToShow: 1,
                   }
                 },
                  {
                    breakpoint: 970,
                    settings: {
                     slidesToShow: 3,

                    }
                  },
               ]
            });

                 $('.feedback-slider').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<div class="strelki strelki_left"></div>',
                    nextArrow: '<div class="strelki strelki_right"></div>',
                    responsive: [
                       {
                         breakpoint: 576,
                         settings: {
                          slidesToShow: 1,
                         }
                       },
                       {
                         breakpoint: 970,
                         settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                         }
                       }
                     ]
            });

                 $('.main-slider').slick({
                   infinite: true,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   arrows: false,
                   dots: true,
                   autoplay: true,
                   autoplaySpeed: 5000,
                   fade: true,
                   cssEase: 'linear',
                   responsive: [
                      {
                        breakpoint: 2500,
                        settings: "unslick"
                      }
                    ]

                 });