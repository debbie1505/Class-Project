//Toggle between showing nav list and display none//
function myFunction() {
  if (window.innerWidth <= 568){
    var x = document.getElementById("navlinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}

  var i = 0;
var txt = 'Welcome to CISS 100'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
//when the user scrolls the page,execute myFunction
window.onScroll = function () { myFunction(); };
//Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position of the navbar
var sticky = navbar.offsetTop;


  