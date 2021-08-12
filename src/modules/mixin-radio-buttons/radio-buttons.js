import  $ from 'jquery'// подключение к файлу библиотеки jquery
let divCircle =document.createElement('div');
    divCircle.className="circle-radio-active";

$(".js-radio-buttons-wrapper").on("click",addCheck)

function addCheck(event){
    if($(".js-radio-buttons-input-background").hasClass('radio-buttons-input-background_background-color')){
            $(".js-radio-buttons-input-background").removeClass('radio-buttons-input-background_background-color'); 
    }
    $(event.currentTarget.lastElementChild).addClass('radio-buttons-input-background_background-color');
         
$(event.currentTarget.lastElementChild).append(divCircle);     
}

