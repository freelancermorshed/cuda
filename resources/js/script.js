//mixitup plugin
$(document).ready(function(){

  //STICKY MENU(NAVIGATION)
  $(".js--services-section").waypoint(function(direction){
      if (direction == "down") {
          $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
  });





  //MIXITUP(PORTFOLIO)
var mixer = mixitup('.container');

});
//HAMBURGER MENU
$('li a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({scrollTop: top}, 500)
});





function openNav() {
   document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
   document.getElementById("myNav").style.width = "0%";
}
