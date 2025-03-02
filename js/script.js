

/*--------------------Side Bar Nav Accordion--------------------------*/
var acc = document.getElementsByClassName("navAccordion");
var i;
    
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navPanel = this.nextElementSibling;
    if (navPanel.style.display === "block") {
        navPanel.style.display = "none";
        } else {
        navPanel.style.display = "block";
        }
    });
}
var acc = document.getElementsByClassName("navAccordion",);
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navPanel = this.nextElementSibling;
    if (navPanel.style.maxHeight) {
        navPanel.style.maxHeight = null;
        } else {
        navPanel.style.maxHeight = navPanel.scrollHeight + "px";
    }
});
}
/*--------------------title Chance Animation--------------------------*/
$(document).ready(function() {
    const titleWords = ["solutions specialist", "photographer", "trail runner", "dog dad"]; // Add more words as needed
    let currentIndex = 0;

    setInterval(function() {
        $(".titleChange").fadeOut(500, function() { // Fade out current word
            $(this).text(titleWords[currentIndex]); // Change the text
            $(this).fadeIn(500); // Fade in the new word
            currentIndex = (currentIndex + 1) % titleWords.length; // Cycle through the words
        });
    }, 1500); // Change the word every 2 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("#menuToggle");
    const navLinks = document.getElementById(".navLinks");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("open"); 
    });
});


$(document).ready(function() {
    const images = [
        { src: '/img/headshot/aboutMePortrait.png', alt: '/img/headshot/aboutMePortrait.png' },
        { src: '/img/headshot/Garrett-denim-7.jpg', alt: '/img/headshot/Garrett-denim-7.jpg' },
        // ... more images
    ];

    $.each(images, function(index, image) {
        $('<img>').attr('src', image.src).attr('alt', image.alt).appendTo('.gallery');
    });
});

const sections = document.querySelectorAll('div[id^="section"]'); // Select all sections
const navLinks = document.querySelectorAll('.breadcrumb-menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight   
 / 3)) { // Adjust the /3 for sensitivity
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');   

    }
  });
});