const toggleBtn = document.querySelector('#flexSwitchCheckDefault'); // Select the checkbox input

// Function to change the theme
const changeMode = () => {
    const currentTheme = document.body.getAttribute('data-bs-theme'); // Use body instead of documentElement

    // Toggle the theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme); // Set the theme on the body

    // Store the new theme in local storage
    localStorage.setItem('theme', newTheme);
    
    // Update the label text based on the theme
    document.querySelector('.form-check-label').textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);

    console.log('Theme changed to:', newTheme); // Debugging log
};

// Function to set the theme based on local storage
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme'); // Retrieve saved theme
    console.log('Saved theme is:', savedTheme); // Debugging log
    if (savedTheme) {
        document.body.setAttribute('data-bs-theme', savedTheme); // Apply saved theme to the body
        toggleBtn.checked = savedTheme === 'dark'; // Update checkbox state based on the saved theme
        // Update the label text based on the saved theme
        document.querySelector('.form-check-label').textContent = savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1);
    } else {
        document.body.setAttribute('data-bs-theme', 'light'); // Default to light theme
        toggleBtn.checked = false; // Set checkbox to unchecked
    }
}

// Call setInitialTheme on page load
setInitialTheme();
toggleBtn.addEventListener('change', changeMode);




// Adding GlightBox
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});
// Adding Gallery
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("kfc-gallery-img");
  let dots = document.getElementsByClassName("smallImg");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}
// Scroll to top btn
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
