import  $ from 'jquery'// подключение к файлу библиотеки jquery

let numberAdults = 0;
let amountChildren = 0;
let numberBabies = 0;
let adults=document.querySelector('.js-dropdown-wide__number-adults');
let children=document.querySelector('.js-dropdown-wide__number-children');
let babies = document.querySelector('.js-dropdown-wide__number-babies');
let circleTop = document.querySelector('.js-dropdown-wide__circle-top');
let signTop = document.querySelector('.js-dropdown-wide__less-sign-top');
let circleCenter = document.querySelector('.js-dropdown-wide__circle-center');
let signCenter = document.querySelector('.js-dropdown-wide__less-sign-center');
let circleBottom = document.querySelector('.js-dropdown-wide__circle-bottom');
let signBottom = document.querySelector('.js-dropdown-wide__less-sign-bottom');

$('.js-dropdown-wide').on('click',showTable);
//открытие /
function showTable(){
    $('.js-dropdown-wide').toggleClass("dropdown-wide_active")
    $('#table-guests').toggle();
    $('.js-dropdown-wide__input').toggleClass("dropdown-wide__input_border-bottom");
}

//уменьшения числа/
$('.js-dropdown-wide__circle-top').on('click',lessNumberTop);
$('.js-dropdown-wide__circle-center').on('click',lessNumberCenter);
$('.js-dropdown-wide__circle-bottom').on('click',lessNumberBottom);
$(document).on('click',moreNumber);

function lessNumberTop(event){
    addСlassesSignCircle(event);
    if( circleTop.className == event.currentTarget.className  && numberAdults>=1 ){
        numberAdults--;
        $('.js-dropdown-wide__number-adults').text(numberAdults); 
    }
   if(numberAdults<=0){
    addСlassesSignCircle(event);
    return;
   }
}
function lessNumberCenter(event){
    console.log(circleCenter.className == event.currentTarget.className  && numberAdults>=1 )
    
    if(circleCenter.className == event.currentTarget.className  && amountChildren>=1 ){
        amountChildren--;
    $('.js-dropdown-wide__number-children').text(amountChildren);
        
    }
    if(numberAdults<=0){
        addСlassesSignCircle(event);
        return;
    }
}
function lessNumberBottom(event){
    if(circleBottom.className == event.currentTarget.className  && numberBabies>=1  ){
        numberBabies--;
        $('.js-dropdown-wide__number-babies').text(numberBabies);
    }
    if(numberAdults<=0){
        addСlassesSignCircle(event);
        return;  
    } 
}
//увеличения числа/
//$(".dropdown-wide__circle").on('click',moreNumber)

function moreNumber(event){
    let circleAdults = document.querySelector('.dropdown-wide__circle-adults');
    let signAdults = document.querySelector('.dropdown-wide__more-sign-adults');
    let circleChildren = document.querySelector('.dropdown-wide__circle-children');
    let signChildren = document.querySelector('.dropdown-wide__more-sign-children');
    let circleBabies = event.target.className;
    let signBabies = event.target.className;
    //console.log(event.target)
    if(signAdults.className == event.target.className || circleAdults.className == event.target.className){
        numberAdults++;
        $('.js-dropdown-wide__number-adults').text(numberAdults); 
        deletingСlassesSignCircle(event);
    }
    if(signChildren.className == event.target.className || circleChildren.className == event.target.className){
        amountChildren++
        $('.js-dropdown-wide__number-children').text(amountChildren);
     deletingСlassesSignCircle(event)  
    }
    if(signBabies=="dropdown-wide__more-sign-babies" || circleBabies=="dropdown-wide__circle-babies"){
        numberBabies++
        $('.js-dropdown-wide__number-babies').text(numberBabies);
        deletingСlassesSignCircle(event)
    }
}
////

//очистка поля input/таблицы/
$(".js-dropdown-wide__clear").on('click',clearTable)

function clearTable(event){
  resetNumbers();
  addСlassesSignCircle(event);
  console.log(event.target.className)
  $('.js-dropdown-wide__input').val("");
}

//сброс значений поля колличества на ноль/
function resetNumbers(){
  $('.js-dropdown-wide__number-adults').text("0");
  $('.js-dropdown-wide__number-children').text("0");
  $('.js-dropdown-wide__number-babies').text("0");
  numberAdults=0;
  amountChildren=0;
  numberBabies = 0;
}

    
//добавления классов модификаций/
function addСlassesSignCircle(event){
     let wideClear = document.querySelector('.dropdown-wide__clear');
     let wideClear1 = event.target.className;
     console.log(circleCenter.className)
    if(event.currentTarget.className == circleTop.className || wideClear.className === wideClear1){
        $('.js-dropdown-wide__circle-top').addClass("dropdown-wide__circle_border-pale-top");
        $('.js-dropdown-wide__less-sign-top').addClass("dropdown-wide__less-sign-pale-top");
    }
    if(event.currentTarget.className == circleCenter.className  || wideClear.className === wideClear1){
        $('.js-dropdown-wide__circle-center').addClass("dropdown-wide__circle_border-pale-center");
        $('.js-dropdown-wide__less-sign-center').addClass("dropdown-wide__less-sign-pale-center");
    }    
    if(event.currentTarget.className == circleBottom.className || wideClear.className === wideClear1){
        $('.js-dropdown-wide__circle-bottom').addClass("dropdown-wide__circle_border-pale-bottom");
        $('.js-dropdown-wide__less-sign-bottom').addClass("dropdown-wide__less-sign-pale-bottom");
    }    
         
}
//удаление классов модификаций/
function deletingСlassesSignCircle(event){
    //console.log(event)
    if(event.target.className == "dropdown-wide__more-sign-adults" || event.target.className == "dropdown-wide__circle-adults"){
        $('.js-dropdown-wide__circle-top').removeClass("dropdown-wide__circle_border-pale-top");
        $('.js-dropdown-wide__less-sign-top').removeClass("dropdown-wide__less-sign-pale-top");
    }
    if(event.target.className == "dropdown-wide__more-sign-children" || event.target.className == "dropdown-wide__circle-children"){    
        $('.js-dropdown-wide__circle-center').removeClass("dropdown-wide__circle_border-pale-center");
        $('.js-dropdown-wide__less-sign-center').removeClass("dropdown-wide__less-sign-pale-center");
    }
    if(event.target.className == "dropdown-wide__more-sign-babies" || event.target.className == "dropdown-wide__circle-babies"){
        $('.js-dropdown-wide__circle-bottom').removeClass("dropdown-wide__circle_border-pale-bottom");
        $('.js-dropdown-wide__less-sign-bottom').removeClass("dropdown-wide__less-sign-pale-bottom");
    }
}
///////////////////////////////
//вставить текст в input/
$("#insertTable").on('click',insertTable)

function insertTable(){
    if(numberAdults>0)
    {
        $('.js-dropdown-wide__input').val(numberAdults + " " + 'взрослые,'+ amountChildren + " " + "дети" + " " + numberBabies + " " + "младенцы");
        $('#table-guests').toggle();
        $('.js-dropdown-wide__input').toggleClass("dropdown-wide__input_border-bottom");
        $('.js-dropdown-wide').toggleClass("dropdown-wide_active")
    }
    
}


////////////////////////////////
$('#table-guests').hide();
//$('#table-input-guests').blur(function()