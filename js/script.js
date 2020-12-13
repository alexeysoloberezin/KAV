
$(document).ready(function(){  
 
  $('.header__btn').click(function(){
    $('.window').addClass('window-active');
    $('.popup-call').addClass('popup-call-active');
    $('.header__nav').removeClass('header__nav-active');
  });
  $('.popup-call__close').click(function(){
    $('.window').removeClass('window-active');
    $('.popup-call').removeClass('popup-call-active');
  });


  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
      });
  $('.burger').click(function(){
    $('.header__nav').addClass('header__nav-active');
    $('.window').addClass('window-active');
  });
  $('.header__burger-close').click(function(){
    $('.header__nav').removeClass('header__nav-active');
    $('.window').removeClass('window-active');
  });
  // -------filter
  $('.filter__item').click(function(){
    this.classList.toggle('filter__item-active');
    if (this.classList.contains('filter__item-all')){
      
    } else{
      $('.filter__item-all').removeClass('filter__item-active');
    }
  });
  $('.filter__item-all').click(function(){
    $('.filter__item').removeClass('filter__item-active');
    this.classList.add('filter__item-active');
  })
  // --------filter

  //   ------------Слайдеры 
  $('.header__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,    
    swipe: false,    

  });  
  var $status = $('.pagingInfo');
  var $slickElement = $('.portfolio__slides');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '\\' + slick.slideCount);
  });
  $('.portfolio__btn-next').click(function(){
    $('.portfolio__slides').slick('slickNext');
  });

  var $status1 = $('.pagingInfo-business');
  var $slickElement1 = $('.aboutus__slider');

  $slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var is = (currentSlide ? currentSlide : 0) + 1;
      $status1.text(is + '\\' + slick.slideCount);
  });
  
  $('.portfolio__slides').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,    
    lazyLoad: 'progressive'  
  });

  $('.partners__slides').slick({
    infinite: false,
    slidesToShow: 7,
    swipe: false,    
    slidesToScroll: 7,
    lazyLoad: 'progressive'  ,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,          
          slidesToScroll: 5,
          swipe: true,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 3,          
          slidesToScroll: 3,
          swipe: true,
          arrows: false,
        }
      }
    ]
  });


  $('.aboutus__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,    
    lazyLoad: 'progressive',
    fade: true ,
    speed: 500,
  });
  $('.team__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,    
    lazyLoad: 'progressive',    
  });
  $('.similar__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,    
    lazyLoad: 'progressive',    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,          
          slidesToScroll: 2,
          swipe: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,          
          slidesToScroll: 1,
          swipe: true,
         
        }
      }
    ]
  });
  
  //   ------------Слайдеры
});