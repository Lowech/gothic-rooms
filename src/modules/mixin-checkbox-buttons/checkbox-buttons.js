import  $ from 'jquery'// подключение к файлу библиотеки jquery

$(".checkbox-buttons").on("click",addCheck)
function addCheck(event){
    console.log(event.target.nextElementSibling)
    
$(event.target.nextElementSibling).before($(event.target.nextElementSibling).toggleClass('tick'))
}
