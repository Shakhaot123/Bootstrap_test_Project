var typed = new Typed('#typed-output', {
  strings: ["Shakhaot hossen.", "a photographer.", "a Web Designer."],
  typeSpeed: 100,         // Speed at which characters are typed
  backSpeed: 80,         // Speed at which characters are deleted
  loop: true,            // Infinite loop
  backDelay: 2000,       // Delay before starting to delete
  startDelay: 1500,       // Delay before starting the typing animation
  showCursor: true,      // Show the cursor
  cursorChar: '|',       // Character for the blinking cursor
  smartBackspace: true,  // Only backspace the words that are not common
});




// Get the gear box and sliding box elements
const gearBox = document.querySelector('.gear-box');
const slidingBox = document.querySelector('.sliding-box');

// Variable to track the box state (open or closed)
let isOpen = false;

// Add click event listener on the gear box
gearBox.addEventListener('click', () => {
    if (isOpen) {
        // If the box is open, slide both the box and gear back to hidden
        slidingBox.style.left = '-350px'; // Hide the sliding box
        gearBox.style.left = '0'; // Move the gear back to the original position
    } else {
        // If the box is closed, slide both the box and gear out
        slidingBox.style.left = '0'; // Bring the box into view
        gearBox.style.left = '200px'; // Move the gear to the edge of the sliding box
    }

    // Toggle the state
    isOpen = !isOpen;
});




const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo-img");

window.addEventListener("scroll", function() {
    if (window.scrollY > 150) {
        // When scrolled down more than 50px, change the navbar background, logo, and link color
        navbar.classList.remove("transparent");
        navbar.classList.add("solid");
        logo.src = "img/logo-dark.png";  // Change to black logo
    } else {
        // At the top of the page, revert the navbar, logo, and link color
        navbar.classList.remove("solid");
        navbar.classList.add("transparent");
        logo.src = "img/logo.png ";  // Change to white logo
    }
});


// Select all the tab links
const tabLinks = document.querySelectorAll('.pill-link');

// Add click event listeners to the tab links
tabLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Get the target tab content ID
    const targetTab = this.getAttribute('href').substring(1);

    // Remove active class from all tab links and tab content
    tabLinks.forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));

    // Add active class to clicked link and corresponding tab content
    this.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}