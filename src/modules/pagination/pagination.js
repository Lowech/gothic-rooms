import  $ from 'jquery'// подключение к файлу библиотеки jquery

(function($){
  $.fn.pagination=function(options){
    const settings=$.extend({
      amount: 15,
      arrayLinks: ["index.html","index.html" ,"index.html" ,"index.html"] 
    },options);
    return this.each(function(event){
      
/*************************view block********************************************/
      let paginationNumberWrapper=  document.createElement('div');
      paginationNumberWrapper.className = "pagination-number-wrapper";

      let paginationNumber=  document.createElement('div');
      paginationNumber.className = "pagination-number";

      let leftArrowNumberBlock=  document.createElement('div');
      leftArrowNumberBlock.className = "left-arrow-number-block";

      let imgButtonArrow=  document.createElement('img');

      let numberSlider=  document.createElement('div');
      numberSlider.className = "number-slider";

      let numberEllipsis=  document.createElement('div');
      numberEllipsis.className = "number__ellipsis";

      let PenultimateNumber= document.createElement("a");
      PenultimateNumber.className ="number__item";
       
      let maxNumber=  document.createElement('a');
      maxNumber.className = "number__max-number";

      let numberColorGreen=  document.createElement('div');
      numberColorGreen.className = "number__color-green";
      
      let paginationText=  document.createElement('div');
      paginationText.className = "pagination-text";
      
     
/************************* end view block ********************************************/

/************************* model block ********************************************/
  this.append(leftArrowNumberBlock)
  leftArrowNumberBlock.innerHTML="<span class=left-arrow-number>1</span>";

  this.append(paginationNumberWrapper)
  paginationNumberWrapper.append(paginationNumber)

  this.append(numberSlider)
  numberSlider.append(numberEllipsis);
  numberEllipsis.append(PenultimateNumber);
  PenultimateNumber.innerHTML="...";
  numberSlider.append(maxNumber);
  maxNumber.innerHTML=settings.amount;
  numberSlider.append(numberColorGreen);
  numberColorGreen.append(imgButtonArrow);
  imgButtonArrow.setAttribute('src','../src/modules/pagination/img/arrow_forward_white.png' );
  imgButtonArrow.setAttribute('alt','img');

  paginationText.innerHTML="1 – 12 из 100+ вариантов аренды";
      
      for(let i=2; i<=settings.amount-2; i++) {
        let item =  document.createElement('a');
        item.className = "number__item";
        item.append(i);
        item.setAttribute("href", settings.arrayLinks[i-2]);
        let itemBlock=  document.createElement('div');
        itemBlock.className = "number";
        itemBlock.append(item);
        paginationNumber.append(itemBlock);
      }
      
      
      this.append(paginationText)
      leftArrowNumberBlock.classList.add('number_color');
      
        
        
      
/************************* end model block ********************************************/

/************************* controller block ********************************************/
document.addEventListener("click",function(event){
  
  let numberColor= document.querySelectorAll(".number_color");
  let NumberItemColor= document.querySelector(".number_color");        
  let massNumberItem= document.querySelectorAll(".number");

  setsWidthaginationNumber();  
  function setsWidthaginationNumber(){
    let widthBlock=settings.amount-3;
    paginationNumber.style.width=NumberItemColor.getBoundingClientRect().width*widthBlock+"px";
  }
  
  function removesCurrentClass(){
    if(paginationNumber.lastElementChild.className==="number number_color")return;
    
 for(let  item of massNumberItem){
  
    if(item.classList.contains("number_color")){
      
      item.classList.remove("number_color"); 
      
    }
  } 
  
};

  if(event.target.closest(".number__color-green")){
    removesClassFirstElement();
    addsClassSecondElement();
    addsClassNextBlock();

function addsClassSecondElement(){
  if(paginationNumber.firstChild.classList.contains("number") &&
    paginationNumber.lastElementChild.className!=="number number_color" &&
      maxNumber.className!=="number__max-number number_color" &&
        numberEllipsis.className!=="number__ellipsis number_color") {
    $(paginationNumber.firstChild).addClass("number_color");
  }
}

function addsClassNextBlock(){
  if(numberEllipsis.className==="number__ellipsis number_color")  {
    numberEllipsis.classList.remove("number_color");
    numberEllipsis.nextSibling.classList.add("number_color");
  }
  if(paginationNumber.getBoundingClientRect().right===coordinatesNumberColor())  {
    paginationNumber.lastElementChild.classList.remove("number_color");
    numberEllipsis.classList.add("number_color");
  }
  
  if(NumberItemColor.closest(".pagination-number") &&
  NumberItemColor.classList.contains("number_color") ){
      removesCurrentClass();
      NumberItemColor.nextSibling.classList.add("number_color");
  } 
}
} 

function coordinatesNumberColor(){
  return NumberItemColor.getBoundingClientRect().right;
}

movesPaginationNumber();
function movesPaginationNumber(){
  if(coordinatesNumberColor()===paginationNumber.getBoundingClientRect().right) return;
  if(coordinatesNumberColor()===paginationNumberWrapper.getBoundingClientRect().right && event.target.closest(".number__color-green")){
    paginationNumber.style.left = +paginationNumber.offsetLeft-40+"px";
    
  }
  
}
function returnsStartingPosition(){
  paginationNumber.style.left = 0+"px";
}

addPenultimateNumber();
function addPenultimateNumber(){
  
  if(paginationNumber.lastElementChild.className==="number number_color"){
  PenultimateNumber.innerHTML=settings.amount-1;
 }
}
function removePenultimateNumber(){
  PenultimateNumber.innerHTML="...";
}
          function removesClassFirstElement(){
            let elementOne = document.querySelector(".left-arrow-number-block");
            if(elementOne.className!=="left-arrow-number-block number_color"){
              
              return;
            }
            else{
              elementOne.classList.remove("number_color");
            }
            
          }

  
          
  function removesClassNumberColor(){
   
      if(event.target.closest(".number") ||
      event.target.closest(".left-arrow-number-block") ||
      event.target.closest(".number__ellipsis") &&
      PenultimateNumber.innerHTML!=="..." ||
      event.target.closest(".number__max-number")){
            numberColor.forEach(element => {
              
              $(element).removeClass("number_color");
  
            });
          }
        }
        
        removesClassNumberColor();
        addff();
        
  function addff(){
    
    if(event.target.closest(".number")) {
      event.target.closest(".number").classList.add("number_color"); 
    }
    if(event.target.closest(".number__max-number")) {
      event.target.closest(".number__max-number").classList.add("number_color");
    }
    
    if(event.target.closest(".left-arrow-number-block")) {
      event.target.closest(".left-arrow-number-block").classList.add("number_color"); 
      returnsStartingPosition();
      removePenultimateNumber();
    }
    if(event.target.closest(".number__ellipsis") &&
    PenultimateNumber.innerHTML!=="..."){
      
      event.target.closest(".number__ellipsis").classList.add("number_color"); 
      
    }
  }

    });
  });
}
})(jQuery);
console.log($(".js-pagination-plagin").pagination({amount:15}));