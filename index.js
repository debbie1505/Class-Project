/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("navlinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
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
}

//when the user scrolls the page,execute myFunction
window.onScroll = function() {myFunction()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position of the navbar
var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. Remove sticky when you leave the scroll position
function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  }
  else{
    navbar.classList.remove("sticky")
  }
  }
}
  