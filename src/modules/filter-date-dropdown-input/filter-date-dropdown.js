import  $ from 'jquery'// подключение к файлу библиотеки jquery

$('.js-filter-date-dropdown').on('click',showTable);
function showTable(){
    if(this.classList.contains('filter-date-dropdown_active')){
        $('.js-filter-date-dropdown').removeClass('filter-date-dropdown_active');
        $('.datepicker-here').data('datepicker').hide(); 
    }
    else{
        $('.js-filter-date-dropdown').addClass('filter-date-dropdown_active');
        $('.datepicker-here').data('datepicker').show();
    } 
}

$(document).on('click',datepickerShow)
function datepickerShow(){
    let cls=document.querySelector('.filter-date-dropdown_active')
    if(cls){
        $('.datepicker-here').data('datepicker').show();
    }
}
