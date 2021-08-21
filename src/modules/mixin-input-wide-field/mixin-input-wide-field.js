import  $ from 'jquery'// подключение к файлу библиотеки jquery
import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar
$(".datepicker-here").datepicker({
    language: {
        clear: 'очистить',
        today: 'применить'
    },
    offset: 10,
    clearButton: true,
    todayButton: true,
    navTitles: {
        days: ' MM yyyy'
    },
    
});
document.addEventListener("click",function(event){
    if(event.target.dataset.action=="today"){
        $(".js-input-wide-field").blur();
    }
});