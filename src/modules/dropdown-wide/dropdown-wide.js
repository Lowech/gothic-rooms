import  $ from 'jquery'// подключение к файлу библиотеки jquery


//$("#block-entrance-guests").on('blur',Hide);
$("body").on('click',Show);
function Hide(){
    $('#table-guests').hide();
}
function Show(event){
    console.log(event.currentTarget.id)
    if(event.currentTarget.id==='block-guests' || event.currentTarget.id==='#table-guests' || event.target.id==="table-input-guests")
    {
        $('#table-guests').show();
    }
     else{
        $('#table-guests').hide();
     }    
}
$('#table-guests').hide();

