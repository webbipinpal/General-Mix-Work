var $ = jQuery;
$(document).ready(function(){

  if( $("body.front").length > 0 ) {
    $("a.colorbox-load").click();
  }
  $("iframe.cboxIframe").css({'height':'100px'});

  ScriptsInit.init();
});


var ScriptsInit = ScriptsInit || {};

ScriptsInit = {
  init: function(){
    this.setPageSlider();
    this.scrollPage();

  },

  setPageSlider: function(){
    var containerObj = $('.slider--banner');
    if(containerObj.length > 0){
      containerObj.find('.slider__content').on('init', function(){
        var  slideContentObj = $(this).find('.slick-current .slider__detail');
        var  slideContent = $(slideContentObj).html();
        $(".slider__caption").find('.slider__detail').html(slideContent);


      }).slick({
        dots:true,
        /*fade: true,*/
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        speed: 1000,
        dotsClass:'slider__dots col-xs-offset-1 col-xs-38 col-md-offset-5 col-md-15'
      });
    }



  },
  scrollPage: function () {
    var w = $( window ).width();
    var adjustTop = 190;
    if(w < 992 ){
      adjustTop = 210;
    }
    if(w < 768 ){
      adjustTop = 175;
    }

    if($('.auto-scroll').length > 0) {
      $('html, body').animate({
        scrollTop: $(".l-content").offset().top-adjustTop
      }, 1500);
    }
  },

};


$(document).ready(function(){
 
   /*product nav mobile menu icon js start here */
    $('body').click(function(e){
      if( $(window).width() < 768 ) {			
        if(!$(e.target).closest(".site-nav").length){
          if($(e.target).closest(".responsive-menu-toggle-icon").length){
            $(".site-nav").slideToggle("slow");	
          }else{
            $(".site-nav").slideUp();	
          }
        }
        }	
        
    });
    /*$(window).on('resize', function(){		
        $(".site-nav").slideUp();

      
    });*/
    $(".parent-list").click(function(){
      $(this).parent().siblings().removeClass("expanded");
      $(this).parent().toggleClass("expanded");
    });
  /*product nav mobile menu icon js end here */


});

$(window).load(function () {
  onCollegeLayout.init();
});


var onCollegeLayout = onCollegeLayout || {};
onCollegeLayout = {
  init: function () {
    /* a-partners slider js start here */
    if ($(".a-clients_slide ul").length > 0) {
      $(".a-clients_slide ul").slick({
        dotsClass: "slider__dots",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });
    }
    /* a-partners slider js end here */
    /* testimonial  slider js start here */
    if ($(".a__testimonial").length > 0) {
      $(".a__testimonial").slick({
        dotsClass: "slider__dots",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    /* testimonial slider js end here */
      /* Meet trainers slider js start here */
      if ($(".card-block-slide ul").length > 0) {
        $(".card-block-slide ul").slick({
          dotsClass: "slider__dots",
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
          arrows: true,
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
        });
      }
      /* Meet trainers slider js end here */
      
      // thumbnail title same height
      setHeight($('.products__item__details .item--title'));
      function setHeight(col) {
          var $col = $(col);
          var $maxHeight = 0;
          $col.each(function () {
              var $thisHeight = $(this).outerHeight();
              if ($thisHeight > $maxHeight) {
                  $maxHeight = $thisHeight;
              }
          });
          $col.height($maxHeight);
      }
      // thumbnail desc same height
      setHeight($('.products__item__details p'));
      function setHeight(col) {
          var $col = $(col);
          var $maxHeight = 0;
          $col.each(function () {
              var $thisHeight = $(this).outerHeight();
              if ($thisHeight > $maxHeight) {
                  $maxHeight = $thisHeight;
              }
          });
          $col.height($maxHeight);
      }
      if ($("#piyankaPro").length > 0) {
        $("#piyankaPro").on('click', function (e) {
          $('.modal-profile').fadeIn("slow");
          $('.modal__mask').fadeIn("slow");
          e.preventDefault();
        });
  
        $("body").on('click', '.trainer-profile .modal__close', function (e) {
          $(this).parents('.modal-profile').fadeOut("slow");
          $(this).parents('.modal-profile').find('.modal__mask').fadeOut("slow");
          e.preventDefault();
        });
      }
  
  }
}