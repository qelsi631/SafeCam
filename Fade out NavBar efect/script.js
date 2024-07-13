window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'yellow'; // Change to black when scrolling down
    navbar.style.height = '50px'; // Adjust height
  } else {
    navbar.style.backgroundColor = 'transparent'; // Change back to transparent when at the top
    navbar.style.height = '50px'; // Maintain height
  }
});


