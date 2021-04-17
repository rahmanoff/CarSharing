$(function() {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true

    })
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('')
    })
});