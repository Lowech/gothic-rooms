import  $ from 'jquery'// подключение к файлу библиотеки jquery
import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar

var $start= $('#start'),
    $end= $('#end');

$start.datepicker({
        
        onSelect: function (fd, date){
            
                $start.val(fd.slice(0,10));
                $end.val(fd.slice(11));
                
        }, 
        language: {
            clear: 'очистить',
            today: 'применить'
        },
        
        multipleDates: true,
        range: true, 
        clearButton: true,
        todayButton: true,

        navTitles: {
            days: ' MM yyyy'
        },
           
    });

document.addEventListener("click",function(event){
    if(event.target.dataset.action=="today"){
        $start.blur();
    } 
})