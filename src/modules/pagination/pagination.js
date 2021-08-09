import 'paginationjs/dist/pagination.js' //plugins pagination
import  $ from 'jquery'// подключение к файлу библиотеки jquery

(function($){
  $.fn.pagination=function(options){
    let settings=$.extend({
      amount: 6,
    },options);
    return this.each(function(event){
      //this.style.width=settings.width+"px";
      let paginationNumber=  document.createElement('div');
      paginationNumber.className = "pagination-number";

      let imgButtonArrow=  document.createElement('img');

      let numberSlider=  document.createElement('div');
      numberSlider.className = "number-lider";
      let numberEllipsis=  document.createElement('div');
      numberEllipsis.className = "number__ellipsis";

      let maxNumber=  document.createElement('span');
      maxNumber.className = "number__max-number";

      let numberColorGreen=  document.createElement('div');
      numberColorGreen.className = "number__color-green";

      numberColorGreen.append(imgButtonArrow);
      numberSlider.append(numberEllipsis);
      numberSlider.append(maxNumber);
      numberSlider.append(numberColorGreen);

      numberEllipsis.innerHTML="...";
      maxNumber.innerHTML=settings.amount;
      imgButtonArrow.setAttribute('src','../src/modules/pagination/img/arrow_forward_white.png' );
      imgButtonArrow.setAttribute('alt','img');
      
      console.log()

      let paginationText=  document.createElement('div');
      paginationText.className = "pagination-text";
      paginationText.innerHTML="1 – 12 из 100+ вариантов аренды";

      for(let i=1; i<=settings.amount; i++) {
        let item=  document.createElement('span');
        item.className = "number__item";
        item.append(i);
        let itemBlock=  document.createElement('div');
        itemBlock.className = "number";
        itemBlock.append(item);
        paginationNumber.append(itemBlock);
        this.append(paginationNumber)
      }
      this.append(numberSlider)
      this.append(paginationText)
      paginationNumber.firstChild.classList.add('number_color');
      
      
      document.addEventListener("click",function(event){
        let massNumber= document.querySelectorAll(".number");
        let numberSlider= document.querySelector(".number-lider");

        
        paginationNumber.style.left = +paginationNumber.offsetLeft-40+"px";
        console.log(paginationNumber.style.left)
        if(event.target.className=="number__color-green"){
         let iu= document.querySelector('.number_color');
          if(iu.nextSibling.className=="number__color-green" || iu.nextSibling.className=="number ellipsis")return;
          $(".number_color").removeClass("number_color");
          iu.nextSibling.classList.add("number_color");
          
        }
        if(event.target.className=="number"){
          event.target.classList.add("number_color");
          
          massNumber.forEach(element => {
            
              $(".number_color").removeClass("number_color");
              console.log(element.className)
              if(event.target.className=="number"){
                event.target.classList.add("number_color");
              }
          });
        }
      })
      
      
    //this.append(mass);
      ///mass[0].className="number__item_color";
    });
  };
})(jQuery);
console.log($(".js-pagination-plagin").pagination({amount:8}));