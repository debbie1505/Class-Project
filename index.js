//Toggle between showing nav list and display none//
function myFunction() {
  if (window.innerWidth <= 768){
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
    document.getElementById("header").textContent = txt.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// JavaScript for sticky navbar
window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



