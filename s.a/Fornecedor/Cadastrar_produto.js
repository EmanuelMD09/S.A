const sidenav = document.getElementById("mySidenav");

document.addEventListener("mousemove", function(event) {
    if (event.clientX < 50) { // Adjust the threshold as needed
        sidenav.style.width = "250px"; // Show the navbar
    } else {
        sidenav.style.width = "0"; // Hide the navbar
    }
});

sidenav.addEventListener("mouseleave", function() {
    sidenav.style.width = "0"; // Hide the navbar when mouse leaves
});