$(function() {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 1200, // работает с разрешения на 1 пиксель меньше, чем значение brakepoint
            settings: {
                dots: false
            }
        }]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    })

});