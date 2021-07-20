import  $ from 'jquery'// подключение к файлу библиотеки jquery


//$("#block-entrance-guests").on('blur',Hide);
$("#table-guests").on('click',Show);
function Hide(){
    $('#table-guests').hide();
}
function Show(event){
    //console.log(event.currentTarget.id)
    if(event.target.id==='dropdownlessinput' || event.target.id==='dropdownlesstable' )
    {
        $('#dropdownlesstable').show();
    }
     else{
        $('#dropdownlesstable').hide();
     }    
}
//$('#dropdownlesstable').hide();