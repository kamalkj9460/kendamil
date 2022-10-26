// body load

$(window).load(function() {
	$('body').animate({ opacity:1 },500);	
});

// Scroll header fixed
$(window).load(function(){
$(window).scroll(function(){
   if ($(this).scrollTop() > 50) {
	   $('#shopify-section-header').addClass('active_header');
   } else {
	   $('#shopify-section-header').removeClass('active_header');
   }
});
  });
    


  
  $(window).on('load resize', function () {
	var wwidth = $(window).width();
  
    if(	wwidth > 767) {

$("#SearchDrawer").insertBefore("#top_header");

} 

   
else {
$("#SearchDrawer").insertBefore("#MobileNav");
  
}
  
});


$(document).ready(function(){
  
  
  var current_slide_class=($('.article-search .product-card').attr("data-color"));
  $(".article-search-title").addClass(current_slide_class);
  
  $(".search_pop_link").click(function() {
  $(".search-modal").toggleClass("active-modal");
  $(".search-overlay").fadeToggle('fast');
   $(this).toggleClass("active-li");
 });
  
 $(".search-overlay").click(function() {
  $(".search-modal").removeClass("active-modal");
  $(".search-overlay").fadeOut('fast');
   $('.search_pop_link').removeClass("active-li");
 });
  
  
  $('.filmcontainer video, .subscribe_video video').attr('autoplay', 'autoplay');
  
  
  $(".site-header__menu").click(function(){
    $("body").toggleClass('no_scroll');     
  });
  
   $(".product-single_thumbnail").click(function(){
    // alert(1);
    $(this).trigger('click'); 
 //    $(this).find('.feature-row__image').trigger('click'); 
  });
  
  
  
setTimeout(function() {  
$("#product_review > i").click(function() {
    $('html, body').animate({
        scrollTop: $("#product_icons").offset().top
    }, 500);
}); 
  }, 2000);
  
  
  setTimeout(function() {  
$(".spr-summary-actions-newreview").click(function() {
    $('html, body').animate({
        scrollTop: $("#shopify-product-reviews").offset().top - 50
    }, 500);
}); 
  }, 1000);
  
  
  setTimeout(function() {  
    var divCount = $(".flickity-slider").children(".MCItemCarousel-Item").length; 
    
    if ($(window).width() > 768 ) {
    if (divCount==1|divCount==2|divCount==3) { 
     // alert(divCount);
      $(".MCItemCarousel-scrollable").addClass("hide_arrow"); 
    } 
    }
  }, 2500);  
  
  
  
 
  });

$(window).on('load resize', function () {
    var wheight = $(window).height();
    var topheade = $('#shopify-section-header').height();
  	var topannu = $('.announcement-bar').height();
  
  //var sliderbox = $('.expert-box').height();
  
  
  
   //$(".video_wrapper, .hero--large").css("height", wheight - topheade);
  
   $(".mobile-nav-wrapper").css("height", wheight);
  
    $(".site-nav__dropdown").css("top", topheade);
  $("#added-box-wrapper").css("top", topannu);
  
  // $(".slideshow").css("height", wheight - topheade);
  
 // $("#added-box-wrapper").css("height", wheight - topannu);
  
 // $(".cap_box .slick-track").css("height", sliderbox + 27);
  
  var wwidth = $(window).width();
  $("#accordion_hor").css("width", wwidth);
  
  
  var productscience = $('#product_science').height();
  $(".product_science_img").css("height", productscience);
  
});


/*
$(document).ready(function(){
  
// Home logo slider section
   $('.logo_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.logo_thumb',
    afterChange: function (slickSlider, i) {
                        //remove all active class
                        $('.logo_thumb .slick-slide').removeClass('slick-active');
                        //set active class for current slide
                        $('.logo_thumb .slick-slide').eq(i).addClass('slick-active');
                    }
    
  });  
  $('.logo_thumb').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.logo_slider',
    dots: true, 
    centerMode: false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
         focusOnSelect: false,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  
  if ($(window).width() < 767 ) {
  } else {
  $('.logo_thumb').on('mouseenter', '.slick-slide', function (e) {
	var $currTarget = $(e.currentTarget), 
    	index = $currTarget.data('slick-index'),
        slickObj = $('.logo_slider').slick('getSlick');
    
    slickObj.slickGoTo(index);
    
});
  }
  
  $(".site-header__menu").click(function(){
    $(this).toggleClass("active_icon");
  });
	
  
});  
*/


if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
$(document).ready(function(){
  $('li.has_dropdown').each(function() {
    var clicked = false;
    $(this).bind('click', function() {
      if(!clicked) return !(clicked = true);
    });
  });
  $("li.has_dropdown").click(function(){
    $(this).find(".site-nav__dropdown").slideDown(); 
  //  $(".nav_bg").slideDown(); 
    
  });
 
  
  
});   
}



