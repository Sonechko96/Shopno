$(document).ready(function(){


$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});


$('.info-block__carousel').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
});

$('.block__button, .close').on('click', function () {
    $(this).closest('.block');
    $(this).closest('.block').find('.block__button').toggleClass('d-none');
    $(this).closest('.block').find('.close').toggleClass('d-none');
    $(this).closest('.block').find('.block-inner').toggleClass('block-inner_active');
    $(this).closest('.block').find('.block__topic').toggleClass('d-none');
    $(this).closest('.block').find('.block__description').toggleClass('d-none');
})


});
