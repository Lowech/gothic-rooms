import  $ from 'jquery'// подключение к файлу библиотеки jquery

let itemsLike = document.querySelectorAll(".js-like-button__number");
let $numberValue;
let one = 1;
let result;
function plusMinusLike(event){
    for(let item of itemsLike){
        if(event.currentTarget.contains(item) && event.currentTarget.classList.contains('like-button_not-active-color')){
            $numberValue = $(item).text();
            result = +$numberValue + one;

         $(item).text(result);   
        }
        if(event.currentTarget.contains(item) && !event.currentTarget.classList.contains('like-button_not-active-color')){
            $numberValue = $(item).text();
            result = +$numberValue - one;

         $(item).text(result); 
        }
    }  
}
function colorAddRemove(event){
if(event.currentTarget.classList.contains('like-button_not-active-color')){
        $(event.currentTarget.firstChild).attr("src", "./src/modules/all-button/mixin-like-button/img/favorite.png");
        $(event.currentTarget).removeClass("like-button_not-active-color");
        $(event.currentTarget.lastChild).removeClass("like-button__number_not-active-color");
    }
else{
        $(event.currentTarget.firstChild).attr("src", "./src/modules/all-button/mixin-like-button/img/favorite_border.png");
        $(event.currentTarget).addClass("like-button_not-active-color");
        $(event.currentTarget.lastChild).addClass("like-button__number_not-active-color");
    }
}

function totalChange (event){
    plusMinusLike(event);
    colorAddRemove(event);
}
$(".js-like-button").on("click",totalChange);