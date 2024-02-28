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

// Scroll to the About Me section when the button is clicked
document.getElementById('view-work-button').addEventListener('click', function() {
  document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 200, // Adjust the number of particles
      "density": {
        "enable": true,
        "value_area": 800 // Adjust the density of particles
      }
    },
    "color": {
      "value": ["#487e7e", "#ffffff"] // Adjust the color of particles
    },
    "shape": {
      "type": "circle", // Choose the shape of particles (circle, edge, triangle, polygon, star)
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      }
    },
    "opacity": {
      "value": 0.5, // Adjust the opacity of particles
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2, // Adjust the size of particles
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150, // Adjust the distance between particles
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, // Adjust the speed of particles
      "direction": "none", // Choose the direction of particles (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab" // Choose interaction mode on hover (grab, bubble, repulse, or remove)
      },
      "onclick": {
        "enable": false,
        "mode": "push" // Choose interaction mode on click (push or remove)
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
