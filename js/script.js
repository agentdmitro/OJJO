lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
      
    })


// Вызов модального окна
$('.button').click( function() {
	$('.overlay').fadeIn();
  body.classList.toggle('lock');
});

$('.register__link').click( function() {
	$('.register__overlay').fadeIn();
  body.classList.toggle('lock');
});

$('.login__link').click( function() {
	$('.overlay').fadeIn();
  body.classList.toggle('lock');
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay').fadeOut();
  body.classList.toggle('lock');
});

$('.close-popup').click( function() {
	$('.register__overlay').fadeOut();
  body.classList.toggle('lock');
});
window.onscroll = function(){
    return false;
  }

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
    body.classList.toggle('lock');
	}
});

$(document).mouseup( function (e) { 
	var popup = $('.register__popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.register__overlay').fadeOut();
    body.classList.toggle('lock');
	}
});


let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};


/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});*/

