window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
  }
  prevScrollpos = currentScrollPos;
};

