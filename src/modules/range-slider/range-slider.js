import  $ from 'jquery'// подключение к файлу библиотеки jquery

(function($){
  $.fn.rangeSlider=function(options){
    const settings=$.extend({
      oneRange: false,
      arrayLinks: ["index.html","index.html" ,"index.html" ,"index.html"] 
    },options);
    
    return this.each(function(event){
      
/*************************view block********************************************/


      let  rangeSlider= document.createElement("div");
      rangeSlider.classList.add("range-slider");

      let  sumBlock=document.createElement("div");
      sumBlock.classList.add("sum-block");

      let  rangeSliderTitle=document.createElement("h2");
      rangeSliderTitle.classList.add("range-slider-title");

      let  rangeSliderSum=document.createElement("div");
      rangeSliderSum.classList.add("range-slider__sum");

      let  sumMin=document.createElement("span");
      sumMin.classList.add("sum-min");

      let  hyphen=document.createElement("div");
      hyphen.classList.add("hyphen");

      let  sumMax=document.createElement("span");
      sumMax.classList.add("sum-max");

      let  bandContainer=document.createElement("div");
      bandContainer.classList.add("band-container");
     
      let  backgroundMin=document.createElement("div");
      backgroundMin.classList.add("background-min");

      let  backgroundMax=document.createElement("div");
      backgroundMax.classList.add("backgroun-max");

      let  backgroundMinCircle=document.createElement("div");
      backgroundMinCircle.classList.add("background-min__circle");

      let  backgroundMaxCircle=document.createElement("div");
      backgroundMaxCircle.classList.add("background-max__circle");

      let  rangeSliderText=document.createElement("div");
      rangeSliderText.classList.add("range-slider-text");
/************************* end view block ********************************************/

/************************* model block ********************************************/
  rangeSliderTitle.innerHTML="диапазон цены";
  sumMin.innerHTML="5 000₽";
  hyphen.innerHTML=" - ";
  sumMax.innerHTML="10 000₽";
  rangeSliderText.innerHTML="Стоимость за сутки пребывания в номере";

  rangeSlider.append(sumBlock,bandContainer,rangeSliderText);
  sumBlock.append(rangeSliderTitle,rangeSliderSum);
  rangeSliderSum.append(sumMin,hyphen,sumMax);
  bandContainer.append(backgroundMin,backgroundMax);
  backgroundMin.append(backgroundMinCircle);
  backgroundMax.append(backgroundMaxCircle);
  this.append(rangeSlider)

  //leftArrowNumberBlock.innerHTML="<span class=left-arrow-number>1</span>";

  
      
/************************* end model block ********************************************/
if(settings.oneRange===true){
  backgroundMin.style.display="none";
}

/************************* controller block ********************************************/
document.addEventListener("mousedown",function(event){
  if(event.clientX<=bandContainer.getBoundingClientRect().right && 
  event.clientX>=bandContainer.getBoundingClientRect().left){
    if(event.target===backgroundMinCircle){
      backgroundMinCircle.addEventListener("mousemove",setsMinValue);
      
    }
    if(event.target===backgroundMaxCircle){
      
      backgroundMaxCircle.addEventListener("mousemove",setsMaxValue);
      
    }
    
    //console.log(bandBorder.getBoundingClientRect().width-event.clientX-bandContainer.getBoundingClientRect().left)
  }
  
  //console.log(event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left)
  
});
////////
function setsMaxValue(event){
  if(event.clientX>=bandContainer.getBoundingClientRect().right || 
  event.clientX<=bandContainer.getBoundingClientRect().left ){
    return;
  }
else{
  backgroundMaxCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
  backgroundMax.style.width=event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left+2+"px";

  sumMax.innerHTML=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
}
}
////////
////////
function setsMinValue(event){
  if(event.clientX>=bandContainer.getBoundingClientRect().right || 
  event.clientX<=bandContainer.getBoundingClientRect().left || 
  event.clientX>=backgroundMaxCircle.getBoundingClientRect().left){
    return;
  }
else{

  backgroundMinCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
  backgroundMin.style.width=event.clientX-bandContainer.getBoundingClientRect().left+2+"px";
  
  sumMin.innerHTML=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
}
}
////////
document.addEventListener("mouseup",function(event){
  backgroundMaxCircle.removeEventListener('mousemove',setsMaxValue);
  backgroundMinCircle.removeEventListener('mousemove',setsMinValue);
});
  });
}
})(jQuery);
$(".js-range-slider").rangeSlider({oneRange:false});

/*$('.band-border__left').mousedown(mouseLeft);
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
}*/