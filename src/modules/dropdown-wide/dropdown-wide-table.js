import  $ from 'jquery'// подключение к файлу библиотеки jquery

let numberAdults = 0;
let amountChildren = 0;
let numberBabies = 0;

$('.js-dropdown-wide').on('click',showTable);
//открытие /
function showTable(){
    $('.js-dropdown-wide').toggleClass("dropdown-wide_active")
    $('.js-dropdown-wide__table').toggle();
    $('.js-dropdown-wide__input').toggleClass("dropdown-wide__input_border-bottom");
}

//уменьшения числа/
$('.js-dropdown-wide__circle-top').on('click',lessNumberTop);
$('.js-dropdown-wide__circle-center').on('click',lessNumberCenter);
$('.js-dropdown-wide__circle-bottom').on('click',lessNumberBottom);

function lessNumberTop(){
    if( numberAdults>0 ){
        numberAdults--;
        $('.js-dropdown-wide__number-adults').text(numberAdults);  
    }
   if(numberAdults==0){
    return $('.js-dropdown-wide__circle-top').addClass("dropdown-wide__circle_border-pale"),
    $('.js-dropdown-wide__less-sign-top').addClass("dropdown-wide__less-sign-pale");
   }
}
function lessNumberCenter(){
    if( amountChildren>0 ){
        amountChildren--;
    $('.js-dropdown-wide__number-children').text(amountChildren);     
    }
    if(amountChildren==0){
    return $('.js-dropdown-wide__circle-center').addClass("dropdown-wide__circle_border-pale"),
    $('.js-dropdown-wide__less-sign-center').addClass("dropdown-wide__less-sign-pale");
    }
}
function lessNumberBottom(){
    if( numberBabies>0 ){
        numberBabies--;
        $('.js-dropdown-wide__number-babies').text(numberBabies);
    }
    if(numberBabies==0){
    return $('.js-dropdown-wide__circle-bottom').addClass("dropdown-wide__circle_border-pale"),
    $('.js-dropdown-wide__less-sign-bottom').addClass("dropdown-wide__less-sign-pale");  
    } 
}
//увеличения числа/
$('.js-dropdown-wide__circle-adults').on('click',moreNumberAdults);
function moreNumberAdults(){
        numberAdults++;
        $('.js-dropdown-wide__number-adults').text(numberAdults); 
        if(numberAdults>1)return;
        $('.js-dropdown-wide__circle-top').removeClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-top').removeClass("dropdown-wide__less-sign-pale");
}
$('.js-dropdown-wide__circle-children').on('click',moreNumberChildren);
function moreNumberChildren(){
        amountChildren++;
        $('.js-dropdown-wide__number-children').text(amountChildren);
        if(amountChildren>1)return;
        $('.js-dropdown-wide__circle-center').removeClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-center').removeClass("dropdown-wide__less-sign-pale");
}
$('.js-dropdown-wide__circle-babies').on('click',moreNumberBabies);
function moreNumberBabies(){
        numberBabies++;
        $('.js-dropdown-wide__number-babies').text(numberBabies);
        if(numberBabies>1)return;
        $('.js-dropdown-wide__circle-bottom').removeClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-bottom').removeClass("dropdown-wide__less-sign-pale");
}    
////

//очистка поля input/таблицы/
$(".js-dropdown-wide__clear").on('click',clearTable)

function clearTable(event){
  resetNumbers();
  addСlassesSignCircle(event);
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
    if(wideClear.className === wideClear1){
        $('.js-dropdown-wide__circle-top').addClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-top').addClass("dropdown-wide__less-sign-pale");
        $('.js-dropdown-wide__circle-center').addClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-center').addClass("dropdown-wide__less-sign-pale");
        $('.js-dropdown-wide__circle-bottom').addClass("dropdown-wide__circle_border-pale");
        $('.js-dropdown-wide__less-sign-bottom').addClass("dropdown-wide__less-sign-pale");
    }         
}
///////////////////////////////
//вставить текст в input/
$(".js-dropdown-wide__apply").on('click',insertTable)

function insertTable(){
    if(numberAdults>0)
    {
        $('.js-dropdown-wide__input').val(numberAdults + amountChildren + " " + 'гостя');
        $('.js-dropdown-wide__table').toggle();
        $('.js-dropdown-wide__input').toggleClass("dropdown-wide__input_border-bottom");
        $('.js-dropdown-wide').toggleClass("dropdown-wide_active");
    }
    if(numberAdults>0 && numberBabies>0)
    {
        $('.js-dropdown-wide__input').val(numberAdults + amountChildren + " " + 'гостя' + " " + numberBabies + " " + "младенцы");  
    }
}
////////////////////////////////
$('.js-dropdown-wide__table').hide();