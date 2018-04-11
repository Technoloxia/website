/* Javascript document */



/* Side navigation for smaller screens */

function openSideNav() 
{
	"use strict";
    document.getElementById("side-nav").style.width = "20vw";
	document.getElementById("menu-icon").style.opacity="0";
}

function closeSideNav() {
	"use strict";
    document.getElementById("side-nav").style.width = "0";
	document.getElementById("menu-icon").style.opacity="100";
}



/* Make top navigation sticky */

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("top-bar");
var nav = document.getElementById("top-nav");
var navbarSticky = navbar.offsetTop;
var navSticky=nav.offsetTop;

function myFunction() 
{
  if (window.pageYOffset >= navbarSticky) 
  {
   
	  navbar.classList.add("sticky");
  } 
  else 
  {
	
    navbar.classList.remove("sticky");
  }
	
	if(window.pageYOffset>=navSticky)
		{
			nav.classList.add("sticky");
		}
	else
		{
			nav.classList.remove("sticky");
		}
	
}



/* Smooth Scrolling */

$(document).ready(function() 
{	
	"use strict";
 	$("a").on('click', 
	function(event) 
	{
    	var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800);}); 
	
	$('.carousel').carousel();
	
	$('.collapsible').collapsible();
	$('.collapsible').collapsible('open', 0);
});

	
/* Add a countdown Timer */

var countDownDate = new Date("June 29, 2018 08:00:00").getTime();
var x = setInterval(function() 
{
	var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + " DAYS";
	document.getElementById("minutes").innerHTML = minutes + " MINUTES";
	document.getElementById("hours").innerHTML = hours + " HOURS";
	document.getElementById("seconds").innerHTML = seconds + " SECONDS";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdowntext").innerHTML = "TECHNOLOXIA";
    }
}, 1000);


