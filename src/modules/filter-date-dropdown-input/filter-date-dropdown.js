import  $ from 'jquery'// подключение к файлу библиотеки jquery
import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar
$("#filter-date").datepicker({
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
    

    onSelect:function (fd, date){
        $(".js-filter-date-dropdown__input").val(fd.toLowerCase());
    }
    
});
document.addEventListener("click",function(event){
    if(event.target.dataset.action=="today"){
        $(".js-filter-date-dropdown__input").blur();
    }
});