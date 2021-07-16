import  $ from 'jquery'// подключение к файлу библиотеки jquery

let sum = 0;
let sum1 = 0;
let sum2 = 0;
//$("#block-entrance-guests").on('blur',Hide);
$('#block-guests').on('click',Show);
function Hide(){
    $('#table-guests').hide();
}
function Show(event){
    console.log(event.currentTarget)
    if(event.target.id==='block-guests' || event.target.id==='#table-guests' || event.target.id==="table-input-guests")
    {
        $('#block-guests').toggleClass("dropdown-wide_active")
        $('#table-guests').toggle();
        $('#table-input-guests').toggleClass("dropdown-wide__input_border-bottom");
        console.log(event.target)
    }
     else{
        $('#block-guests').toggleClass("dropdown-wide_active")
        $('#table-guests').hide();
     }    
}

$("#lessNumber").on('click',lessNumber)
function lessNumber(){
    if(sum===1)
    {
        $("#lessNumber").toggleClass("dropdown-wide__circle_border-pale");
        $('.dropdown-wide__less-sign-top').toggleClass("dropdown-wide__less-sign_border-pale");
        
    }
    if(sum===0)return;
        sum--
        $('#sum').text(sum); 
        
}
$("#moreNumber").on('click',moreNumber)
function moreNumber(){
    $("#lessNumber").removeClass("dropdown-wide__circle_border-pale");
    $(".dropdown-wide__less-sign-top").removeClass("dropdown-wide__less-sign_border-pale");
        sum++
        $('#sum').text(sum);
}


//очистка поля/
$("#clearTable").on('click',clearTable)
function clearTable(){
    $('#sum').text("0");
    $('#table-input-guests').val("");
    $("#lessNumber").toggleClass("dropdown-wide__circle_border-pale");
    $('.dropdown-wide__less-sign-top').toggleClass("dropdown-wide__less-sign_border-pale");
    sum=0;
}
///////////////////////////////
//вставить текст в input/
$("#insertTable").on('click',insertTable)
function insertTable(){
    if(sum>0)
    {
        $('#table-input-guests').val(sum + " " + 'взрослые,' );
    }
    
}


////////////////////////////////
$('#table-guests').hide();
//$('#table-input-guests').blur(function()