import  $ from 'jquery'// подключение к файлу библиотеки jquery

$(".js-checkbox-buttons").on("click",addCheck)

function addCheck(event){
    $(event.target.nextElementSibling).before($(event.target.nextElementSibling).toggleClass('tick'))
}