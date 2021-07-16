import  $ from 'jquery'// подключение к файлу библиотеки jquery

$('.band-border__left').mousedown(mouseLeft);
$('.band-border__right').mousedown(mouseRight);
$('.band-border').width()
function mouseLeft(e){
  let coord=  $('.band-border').position();
    console.log(e.clientX)
    
}

function mouseRight(e){
  $('.band-border').mousemove(coords)
  
  function coords(eve){  
    eve.target.style.left=eve.target.offsetLeft-eve.clientX+1+"px";
  console.log(eve.target.offsetLeft)
    console.log(eve.clientX)
}
  if($('.band-border__right').mouseup())return;
   
}

///ввод значений через input/
$('.range-slider-tablo__button').on('click',tabloRange)
function tabloRange(){
  
 


 let BandBorderLeft= document.querySelector(".band-border");
 let tabloNumberMin= $(".range-slider-tablo__number-min").val();
 //CircleLeft.style.left = +tabloNumberMin+'px';
 BandBorderLeft.style.left = +tabloNumberMin+'px';
 console.log(tabloNumberMin )
 
 
 let BandBorderRight= document.querySelector(".band-border");
 let CircleRight= document.querySelector(".band-border__right");
 let tabloNumberMax= $(".range-slider-tablo__number-max").val();
 CircleRight.style.left = +tabloNumberMax+'px';
 BandBorderRight.style.width = +tabloNumberMax+'px';
 console.log(tabloNumberMin )
}