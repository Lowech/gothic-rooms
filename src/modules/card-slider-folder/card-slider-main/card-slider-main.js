import  $ from 'jquery'// подключение к файлу библиотеки jquery

//повления стрелочек прокрутки слайдера
$('.js-card-slider__img-wrapper').hover(showBlockArrows);
function showBlockArrows(event){
    $(event.currentTarget.lastElementChild).toggle();
    $(event.currentTarget.lastElementChild.previousElementSibling).toggle();
}
////////////
//функция для левого свайпа
$('.js-card-slider__arrow-left-block').on("click",shiftsBlockPositionLeft);
function shiftsBlockPositionLeft(event){
    let leftBlockPosition=  event.currentTarget.parentNode.firstChild;
    let parentBlock = event.currentTarget.parentNode
    let WhiteCircle = document.querySelectorAll(".card-slider__cicle_backgroundColor-white")

    //перекрашивание backgrounda элемента li/ 
    for( let item of WhiteCircle){  
    if(parentBlock.contains(item) && item.previousElementSibling.className=='card-slider__cicle')
    {
        item.classList.remove("card-slider__cicle_backgroundColor-white");
        item.previousElementSibling.classList.add("card-slider__cicle_backgroundColor-white");
    }
}
    //движение картинок/ 
    if(leftBlockPosition.offsetLeft<=-1083)return;
    leftBlockPosition.style.left = leftBlockPosition.offsetLeft -271+'px';
    leftBlockPosition.style.transition="left 1s";      
}

//функция для правого свайпа
$('.js-card-slider__arrow-right-block').on("click",shiftsBlockPositionRight);
function shiftsBlockPositionRight(event){
    let leftBlockPosition =  event.currentTarget.parentNode.firstChild;
    let parentBlock = event.currentTarget.parentNode
    let WhiteCircle = document.querySelectorAll(".card-slider__cicle_backgroundColor-white")

//перекрашивание backgrounda элемента li/   
    for( let item of WhiteCircle){
    if(parentBlock.contains(item) && item.nextElementSibling.className=='card-slider__cicle')
    {
        item.classList.remove("card-slider__cicle_backgroundColor-white");
        item.nextElementSibling.classList.add("card-slider__cicle_backgroundColor-white");
    }
}
    //движение картинок/   
    if(leftBlockPosition.offsetLeft>=1085)return;
    leftBlockPosition.style.left = leftBlockPosition.offsetLeft +271+'px';
    leftBlockPosition.style.transition="left 1s";
  }
//стрелочки скрыты
$('.js-card-slider__arrow-right-block,.js-card-slider__arrow-left-block').hide();