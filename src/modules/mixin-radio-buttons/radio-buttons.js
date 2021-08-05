import  $ from 'jquery'// подключение к файлу библиотеки jquery
let divCircle =document.createElement('div');
    divCircle.className="circle-radio-active";

$(".js-radio-buttons-wrapper").on("click",addCheck)

function addCheck(event){
    for(let item of document.querySelectorAll('.radio-buttons-active')){
          item.classList.remove('radio-buttons-active')
        }
    if(!this.lastElementChild.previousElementSibling.classList.contains('radio-buttons-active')){
           event.currentTarget.lastElementChild.previousElementSibling.classList.add('radio-buttons-active')
        }
    $(event.currentTarget.lastElementChild).append(divCircle);       
}

