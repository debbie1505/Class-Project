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

//The welcome typing effect

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
document.addEventListener("DOMContentLoaded", function(){
  var navbar = document.getElementById('navbar');
  console.log(navbar);
})
//Execute the myFunction() when the window is scrolled
window.onscroll = function() { 
  stickyNavbar()
};


//Define the myFunction() that will be called when the users scrolls
function stickyNavbar() {
  //Get the navbar element by its id ("navbar")
var navbar = document.getElementById('navbar');

//Get the initial position of the navbar
var sticky = navbar.offsetTop;
  //check if the user scrolled past the initial position of the navbar
  if(window.pageYOffset >= sticky){

    //if true, add the 'sticky' class to the navbar
    navbar.classList.add('sticky');
  }
  else{

    //if false, remove the 'sticky' class from the navbar
    navbar.classList.remove('sticky');
  }

//check if the user has scrolled more than 50 pixels
  if(window.pageYOffset > 50){

    //if true, add the scroll class to the navbar
    navbar.classList.add('scroll');
  }
  else{

    //if false, remove the scroll class from the navbar
    navbar.classList.remove('scroll');
  }
  }
  console.log(navbar);
  




