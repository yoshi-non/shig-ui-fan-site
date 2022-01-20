$(function () {
    $('.btn-trigger').on('click', function () {
        $('.btn-trigger').toggleClass('active');
        $('.hamburger_menu').toggleClass('show');
        $('.hamburger_menu_bg').toggleClass('show');
    });
    $('.hamburger_menu_bg').on('click', function () {
        $('.btn-trigger').toggleClass('active');
        $('.hamburger_menu').removeClass('show');
        $('.hamburger_menu_bg').removeClass('show');
    });
    window.onscroll = () => {
        $('.btn-trigger').removeClass('active');
        $('.hamburger_menu').removeClass('show');
        $('.hamburger_menu_bg').removeClass('show');
    }
});

