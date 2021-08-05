import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar
import  $ from 'jquery'// подключение к файлу библиотеки jquery


let $start= $('#start'),
    $end= $('#end');

    $start.datepicker({
        onSelect: function (fd, date){
            $end.data('datepicker').update('minDate', date);
        },
       
    });

    $end.datepicker({
        onSelect: function (fd, date){
            $start.data('datepicker').update('maxDate', date);
            
        },
        
        
    });


$(".datepicker-here").datepicker({
    language: {
        clear: 'очистить',
        today: 'применить'
    },
    
    offset: 10,
    multipleDates: true,
    clearButton: true,
    todayButton: true,
    navTitles: {
        days: ' MM yyyy'
    },
    position: "bottom bottom ",
    prevHtml: '<img src="src/modules/calendar/img/arrow_back.png" alt="img">',
    nextHtml: '<img src="src/modules/calendar/img/arrow_forward.png" alt="img">',
})


