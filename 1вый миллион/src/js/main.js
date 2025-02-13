let acc = document.querySelectorAll('.accordion');

acc.forEach(item => {
    item.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      return;
    }
    acc.forEach(e=>e.classList.remove('active'));
    e.target.classList.add('active');
  });
});
$(document).ready(function(){
  $('ul.menu-tabs__caption').on('click', 'li:not(.menu-tabs__btn_active)', function () {
      $(this)
          .addClass('menu-tabs__btn_active').siblings().removeClass('menu-tabs__btn_active')
          .closest('div.menu-tabs').find('div.menu-tabs__content').removeClass('menu-tabs__content_active').eq($(this).index()).addClass('menu-tabs__content_active');
  });
  $('.burger-menu').on('click', function () {
      $('.burger-menu').toggleClass('burger-menu_active')
      $('.burger-nav').toggleClass('burger-nav_active') 
  })
})