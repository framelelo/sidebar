$(document).ready(function () {
  
  $("#hamburger, .nav").on("click", function () {
    $("body").toggleClass("open-nav");
  });  
$(".src").on("click", function () {
		 $(".src-bar").addClass("open-src"); 
	}); 
});
