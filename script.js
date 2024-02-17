  // Smooth scroll on anchor click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Get the button element
var pdfButton = document.getElementById('pdf-button');

// Add click event listener to the button
pdfButton.addEventListener('click', function() {
    window.open('pdfs/Robby Berling Resume.pdf', '_blank');
});