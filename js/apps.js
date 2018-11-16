// Virtuous Weeds - javaScript 

// This script does the following:
// 1. When in <750px mode, causes the navigation bar to stick to top of page once it has been scrolled to that position.
// 2. Hides the 3d cards when the dropdown menu is opened.
// 3. Uses a random number generator to animate the navigation buttons hovering in space.


// Declare variable for sticky navigation bar in <750px mode.
var navbar = document.getElementById("navigation");
var navbarClassList = navbar.classList;

var dropdownMenu = document.getElementsByClassName("dropdown");
var threeDCard3 = document.getElementById("grace");

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

function hide3dCards() {
  threeDCard3.style.display = "none";
}

function show3dCards() {
  threeDCard3.style.display = "block";
}

window.onscroll = function() {checkNavPos()};
window.onresize = function() {checkNavPos()};

dropdownMenu.onmouseover = function() {hide3dCards()};
dropdownMenu.onmouseout = function() {show3dCards()};







// Emphasize key notes. Visual definition of a section of the page.


// ========================================================================================
// DEBUG
// if set nav position in function, it solves the problem of not sticking if refreshed in 750 mode while paged down,
// BUT, because nav position in <750 mode when paged down is 0, the scroll position is always > nav position, so it stays sticky even when you return to top of pag.
//using const for nav position makes for a MUCH quieter app, and solves problem of 

// from slackbot--to check if page refreshed
// if (performance.navigation.type == 1) {
//   checkNavPos();
// }


//what did it say was the longhand equivalent to window.onscroll = function() {checkNavPos()};
// I want to say or on window resize (|| windowonresize)

// window.addEventListener("resize", function(){
//   document.getElementById("demo").innerHTML = sometext;
// });




// W3School: Add the sticky class to the navigation bar when it reaches the top of the page. Remove "sticky" when user scrolls to elements above the navigation bar.

// Alan Haggi Alavi jQuery answer in slackbot

// From MDN

// The scroll event is raised when the user scrolls the contents of an element. 

// Element.onscroll is equivalent to element.addEventListener("scroll" ... ).

// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll


