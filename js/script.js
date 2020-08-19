$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__menu').css({'opacity' : '1.0'})
    $('.header__burger, .header__menu, .iphone-off, .menu__item').toggleClass('active');

    // Блокировка прокрутки при открытом меню
    $('body').toggleClass('lock');
  }); 

  // Ссылки меню для перехода по странице
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top -  $(".header__body").height()}, 500);
    // проверим существования класса active у элемента
 if ($('.header__burger').hasClass('active')) {

  $( ".header__menu" ).animate({
   
    opacity: 0.0 // прозрачность элемента

  }, 500, "linear");
  $('.header__burger, .header__menu, .iphone-off, .menu__item').toggleClass('active');

  } else {
       return false;
      }

  // var target = $(this).attr('href');
  // $('html, body').animate({scrollTop: $(target).offset().top -  $(".header__body").height()}, 500);
  // return false;
});

  // $('.menu__item').click(function(event){

  //   // проверим существования класса active у элемента
  //    if ($('.header__burger').hasClass('active')) {

  //         $( ".header__menu" ).animate({
           
  //           opacity: 0.0 // прозрачность элемента

  //         }, 500, "linear");
  //         $('.header__burger, .header__menu, .iphone-off, .menu__item').toggleClass('active');

  //      } else {
  //              return false;
  //             }
  // }); 

  

  // Ссылки меню для перехода по странице
    // $("#js-btn").on("click", function(event){
    //   event.preventDefault();
    //   var top = $("#our_advantages").offset().top -  $(".header__body").height(); 
    //   // $(".header__body").height() - для вычитания высоты меню
    //  $("html, body").animate({scrollTop:top},500);
    // });

   
 
});
