import  $ from 'jquery'// подключение к файлу библиотеки jquery
$('.js-navBurger').on('click',menuAppears);
function menuAppears(){
    $('.js-navBurger__nav').toggleClass('navBurger__nav_active-show');
}
