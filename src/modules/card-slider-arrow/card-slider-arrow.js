import  $ from 'jquery'// подключение к файлу библиотеки jquery



$('.card-slider__img-wrapper').hover(visibleBlock);

function visibleBlock(event){
    $(event.currentTarget.lastElementChild).toggle();
    $(event.currentTarget.lastElementChild.previousElementSibling).toggle();
  
}

$('.card-slider__arrow-left-block').on("click",scrollLeftImg);
$('.card-slider__arrow-right-block').on("click",scrollImgRight);

function scrollLeftImg(event){
    let imgLeft=  event.currentTarget.parentNode.firstChild;
    let parentBlock = event.currentTarget.parentNode
    let circle = document.querySelector(".card-slider__cicle_backgroundColor-white")

    //перекрашивание backgrounda элемента li/   
    if(parentBlock.contains(circle) && circle.previousElementSibling.className=='card-slider__cicle')
    {
        circle.classList.remove("card-slider__cicle_backgroundColor-white");
        circle.previousElementSibling.classList.add("card-slider__cicle_backgroundColor-white");
    }
    //движение картинок/ 
    if(imgLeft.offsetLeft<=-1083)return;
        imgLeft.style.left = imgLeft.offsetLeft -271+'px';
        imgLeft.style.transition="left 1s";
        
}
function scrollImgRight(event){
    let imgLeft =  event.currentTarget.parentNode.firstChild;
    let parentBlock = event.currentTarget.parentNode
    let circle = document.querySelector(".card-slider__cicle_backgroundColor-white")
    //перекрашивание backgrounda элемента li/   
    if(parentBlock.contains(circle) && circle.nextElementSibling.className=='card-slider__cicle')
    {
        circle.classList.remove("card-slider__cicle_backgroundColor-white");
        circle.nextElementSibling.classList.add("card-slider__cicle_backgroundColor-white");
    }
    
    console.log();
        
    //движение картинок/   
    if(imgLeft.offsetLeft>=1085)return;
    imgLeft.style.left = imgLeft.offsetLeft +271+'px';
    imgLeft.style.transition="left 1s";
     
  }




$('.card-slider__arrow-right-block,.card-slider__arrow-left-block').hide();
