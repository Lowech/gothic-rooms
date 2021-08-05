import  $ from 'jquery'// подключение к файлу библиотеки jquery
$(".js-toggle-wrapper").on("click", addRemoveClass)

function addRemoveClass(){
    $(".js-toggle-wrapper").toggleClass("toggle-wrapper_not-active")
    $(".js-toggle-wrapper__circle").toggleClass("toggle-wrapper__circle_not-active-color")
}