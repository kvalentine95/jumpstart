$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: false
  });
  var scroller = 0;
  $(window).scroll(function(){
    var topScroll = $(this).scrollTop();
    if (topScroll - scroller >= 50) {
      var heightNavBar = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + heightNavBar}, 150);
      scroller = topScroll;
    } else if (scroller - topScroll >= 50){
      $('.navbar').animate({top: '0px'}, 150);
      scroller = topScroll;
    }
  });
});
