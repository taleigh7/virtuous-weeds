// Virtuous Weeds - javaScript 

// This script does the following:
// - When in <750px mode, causes the navigation bar to stick to top of page once it has been scrolled to that position.

// Declare variable for sticky navigation bar in <750px mode.
var navbar = document.getElementById("navigation");
var navbarClassList = navbar.classList;
var isSticky = "no";

function checkNavPos() {
  if (window.innerWidth < 750) {
    if (window.pageYOffset >= 62) {
      if (isSticky = "no") {
        navbarClassList.add("sticky");
        isSticky = "yes"
      } 
    } else {
        if (isSticky = "yes") {
          navbarClassList.remove("sticky");
          isSticky = "no"
        }
      }
  } else {
    if (isSticky = "yes") {
      navbarClassList.remove("sticky");
      isSticky = "no"      
    }
  }
}

window.onscroll = function() {checkNavPos()};
window.onresize = function() {checkNavPos()};


