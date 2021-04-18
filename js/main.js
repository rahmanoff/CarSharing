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
        autoplay: true

    })
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    })

});