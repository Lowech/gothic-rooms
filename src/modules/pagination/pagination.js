import 'paginationjs/dist/pagination.js' //plugins pagination
import  $ from 'jquery'// подключение к файлу библиотеки jquery
console.log("ffff")



function simpleTemplating(data) {
  var html = '<ul>';
  $.each(data, function(index, item){
      html += '<li>'+ item +'</li>';
  });
  html += '</ul>';
  return html;
}
$('#pagination-container').pagination({
  dataSource: ['1',' 2',' 3', '4', '5', '6', '7',' ...' , '195'],
  pageSize: 5,
  autoHidePrevious: true,
  autoHideNext: true,
  callback: function(data, pagination) {
      // template method of yourself
      var html = simpleTemplating(data);
      $('#data-container').html(html);
  }
})
/*let coloredDlock =  document.querySelector('.js-number');
  let coloredItem =  document.querySelector('.js-number__item');
$(".js-number_color-green").on('click',sliderMovementButton);
function sliderMovementButton(){
  
  console.log(coloredDlock);
    $(coloredDlock).toggleClass('number_color');
    $(coloredItem).toggleClass('number__item_color');
    if(coloredDlock.nextSibling!='number_color'){
        $(coloredDlock.nextSibling).toggleClass('number_color');
        $(coloredDlock.nextSibling.firstChild).toggleClass('number__item_color');
    }
        
}

$(".js-number").on("click",changesColorBackgraund);
function changesColorBackgraund(event){
console.log(event.currentTarget)
    if(event.currentTarget){
        $('.js-number').toggleClass('number_color');
        $('.js-number__item').toggleClass('number__item_color');
    }
    
}*/
