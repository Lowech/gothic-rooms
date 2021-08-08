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

        prevHtml: '<img src="src/modules/calendar/img/arrow_back.png" alt="img">',
        nextHtml: '<img src="src/modules/calendar/img/arrow_forward.png" alt="img">',
           
    });

document.addEventListener("click",function(event){
    if(event.target.dataset.action=="today"){
        $start.blur();
    } 
})
/*document.addEventListener("click",function(event){
  let positionCalendar=  $('.datepicker')[0];
  positionCalendar.setAttribute('style', 'left: 850px; top: 790px;')
    console.log(typeof positionCalendar);
    
});*/