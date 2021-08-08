import  $ from 'jquery'// подключение к файлу библиотеки jquery
import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar
$(".datepicker-here").datepicker({
    language: {
        clear: 'очистить',
        today: 'применить'
    },
    dateFormat:"d M",
    offset: 10,
    range: true, 
    multipleDatesSeparator: " - ",
    multipleDates: true,
    clearButton: true,
    todayButton: true,
    navTitles: {
        days: ' MM yyyy'
    },
    prevHtml: '<img src="src/modules/calendar/img/arrow_back.png" alt="img">',
    nextHtml: '<img src="src/modules/calendar/img/arrow_forward.png" alt="img">',

    onSelect:function (fd, date){
        $(".js-filter-date-dropdown__input").val(fd.toLowerCase());
    }
    
});
document.addEventListener("click",function(event){
    if(event.target.dataset.action=="today"){
        $(".js-filter-date-dropdown__input").blur();
    }
});
/*$('.js-filter-date-dropdown').on('click',showTable);
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
}*/