// Virtuous Weeds - javaScript 

// This script does the following:
// - When in <750px mode, causes the navigation bar to stick to top of page once it has been scrolled to that position.

// Declare variable for sticky navigation bar in <750px mode.
var navbar = document.getElementById("navigation");
var navbarClassList = navbar.classList;

function checkNavPos() {
  if (window.innerWidth < 750) {
    if (window.pageYOffset >= 62) { 
      navbarClassList.add("sticky");
    } else {
      navbarClassList.remove("sticky");
    } 
  } else {
    navbarClassList.remove('sticky');
    }
}

window.onscroll = function() {checkNavPos()};
window.onresize = function() {checkNavPos()};


