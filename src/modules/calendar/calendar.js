import 'air-datepicker/dist/js/datepicker.min.js'//plugins calendar
import  $ from 'jquery'// подключение к файлу библиотеки jquery

$('#inputCalendar').datepicker({inline: true})
console.log($('#inputCalendar').data('datepicker'))

