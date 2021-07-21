import  $ from 'jquery'// подключение к файлу библиотеки jquery

$('.js-expandable-checkbox-list__text').on('click',visibilityСheckbox);

function visibilityСheckbox(){
  $('.js-expandable-checkbox-list__text').toggleClass('expandable-checkbox-list_opening-list');
  $('.js-expandable-checkbox-list').toggle();
}
