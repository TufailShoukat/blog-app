const colo = document.getElementById("colo")
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) { // You can adjust the scroll value
        navbar.style.backgroundColor = 'white';
        colo.style.color = "black"
    }
   else{
    navbar.style.backgroundColor = '#74737A';
   colo.style.color = "white"

   }
});
