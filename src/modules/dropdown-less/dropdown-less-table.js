import  $ from 'jquery'// подключение к файлу библиотеки jquery

let numberDorm = 0;
let amountBed = 0;
let numberBathrooms = 0;

$('.js-dropdown-less').on('click',showTable);
//открытие /
function showTable(event){
    $('.js-dropdown-less').toggleClass("dropdown-less_active")
    $('.js-dropdown-less__table').toggle();
    $('.js-dropdown-less__input').toggleClass("dropdown-less__input_border-bottom");
}

//уменьшения числа/
$('.js-dropdown-less__circle-top').on('click',lessNumberTop);
$('.js-dropdown-less__circle-center').on('click',lessNumberCenter);
$('.js-dropdown-less__circle-bottom').on('click',lessNumberBottom);

function lessNumberTop(){
    if( numberDorm>0 ){
        numberDorm--;
        insertTableNumberDorm()
        $('.js-dropdown-less__number-dorm').text(numberDorm);  
    }
   if(numberDorm==0){
    return $('.js-dropdown-less__circle-top').addClass("dropdown-less__circle_border-pale"),
    $('.js-dropdown-less__less-sign-top').addClass("dropdown-less__less-sign-pale"),
    deletionTableNumberDorm();
   }
}
function lessNumberCenter(){
    if( amountBed>0 ){
        amountBed--;
        insertTableNumberBed();
    $('.js-dropdown-less__number-bed').text(amountBed);     
    }
    if(amountBed==0){
    return $('.js-dropdown-less__circle-center').addClass("dropdown-less__circle_border-pale"),
    $('.js-dropdown-less__less-sign-center').addClass("dropdown-less__less-sign-pale"),
    deletionTableNumberBed();
    }
}
function lessNumberBottom(){
    if( numberBathrooms>0 ){
        numberBathrooms--;
        insertTableNumberBathrooms()
        $('.js-dropdown-less__number-bathrooms').text(numberBathrooms);
    }
    if(numberBathrooms==0){
    return $('.js-dropdown-less__circle-bottom').addClass("dropdown-less__circle_border-pale"),
    $('.js-dropdown-less__less-sign-bottom').addClass("dropdown-less__less-sign-pale"),
    deletionTableNumberBathrooms();;  
    } 
}
//увеличения числа/
$('.js-dropdown-less__circle-dorm').on('click',moreNumberDorm);
function moreNumberDorm(){
        numberDorm++;
        insertTableNumberDorm();
        $('.js-dropdown-less__number-dorm').text(numberDorm);
        
        if(numberDorm>1)return;
        $('.js-dropdown-less__circle-top').removeClass("dropdown-less__circle_border-pale");
        $('.js-dropdown-less__less-sign-top').removeClass("dropdown-less__less-sign-pale");
}
$('.js-dropdown-less__circle-bed').on('click',moreNumberBed);
function moreNumberBed(){
        amountBed++;
        insertTableNumberBed();
        $('.js-dropdown-less__number-bed').text(amountBed);
        if(amountBed>1)return;
        $('.js-dropdown-less__circle-center').removeClass("dropdown-less__circle_border-pale");
        $('.js-dropdown-less__less-sign-center').removeClass("dropdown-less__less-sign-pale");
}
$('.js-dropdown-less__circle-bathrooms').on('click',moreNumberBathrooms);
function moreNumberBathrooms(){
        numberBathrooms++;
        insertTableNumberBathrooms();
        $('.js-dropdown-less__number-bathrooms').text(numberBathrooms);
        if(numberBathrooms>1)return;
        $('.js-dropdown-less__circle-bottom').removeClass("dropdown-less__circle_border-pale");
        $('.js-dropdown-less__less-sign-bottom').removeClass("dropdown-less__less-sign-pale");
}    
////

//вставить текст в input/
function insertTableNumberDorm(){
    if(amountBed == 0 && numberBathrooms == 0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,');  
    }
    if(numberDorm==0)
        {
            $('.js-dropdown-less__input').val("");  
        }

    if(amountBed>0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,');
    }
    
    if(numberBathrooms>0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
    if(amountBed > 0 && numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
}

function insertTableNumberBed(){
    if(numberDorm == 0 && numberBathrooms == 0)
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,');
    }
    if(numberDorm>0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,');
    }
    
    if(numberBathrooms>0)
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
    if(numberDorm > 0 && numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
}
function insertTableNumberBathrooms(){
    if(numberDorm == 0 && amountBed == 0)
    {
        $('.js-dropdown-less__input').val(numberBathrooms + " " + 'ванные комнаты,');
    }
    if(amountBed>0)
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
    
    if(numberDorm>0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
    if(numberDorm > 0 && amountBed > 0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
}
//удаление из инпутов
function deletionTableNumberDorm(){
    if(numberDorm==0)
        {
            $('.js-dropdown-less__input').val("");  
        }
    if(amountBed>0)
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,');
    }
    if(numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(numberBathrooms + " " + 'ванные комнаты,');
    }
    if(amountBed > 0 && numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
}
function deletionTableNumberBed(){
    if(amountBed==0)
        {
            $('.js-dropdown-less__input').val("");  
        }
    if(numberDorm>0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,');
    }
    if(numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(numberBathrooms + " " + 'ванные комнаты,');
    }
    if(numberDorm > 0 && numberBathrooms > 0)
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + numberBathrooms + " " + 'ванные комнаты,');
    }
}
function deletionTableNumberBathrooms(){
    if(numberBathrooms==0)
        {
            $('.js-dropdown-less__input').val("");  
        }
    if(numberDorm>0 )
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,');
    }
    if(amountBed > 0 )
    {
        $('.js-dropdown-less__input').val(amountBed + " " + 'кровати,');
    }
    if(numberDorm > 0 && amountBed > 0 )
    {
        $('.js-dropdown-less__input').val(numberDorm + " " + 'спальни,' + " " + amountBed + " " + 'кровати,');
    }
}
////////////////////////////////
$('.js-dropdown-less__table').hide();