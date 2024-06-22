/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,/*"value": 80,*/
        "density": {
          "enable": true,
          "value_area": 600/*"value_area": 800*/
        }
      },
      "color": {
        "value": "random"/*"value": "#ffffff" #f5426c*/
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#2a23fa"/*"color": "#000000" #f542aa*/
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,/*"value": 0.5,*/
        "random": true,/*"random": false,*/
        "anim": {
          "enable": true,/*"enable": false,*/
          "speed": 0.2,/*"speed": 1,*/
          "opacity_min": 0,/*"opacity_min": 0.1,*/
          "sync": false
        }
      },
      "size": {
        "value": 30,/*"value": 5,*/
        "random": true,
        "anim": {
          "enable": true,/*"enable": false,*/
          "speed": 2,/*"speed": 40,*/
          "size_min": 5,/*"size_min": 0.1,*/
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,/*"enable": true,*/
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,/*"speed": 6,*/
        "direction": "top",/*"direction": "none",*/
        "random": true,/*"random": false,*/
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600/*"rotateY": 1200*/
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,/*"enable": true,*/
          "mode": "bubble"/*"mode": "repulse"*/
        },
        "onclick": {
          "enable": false,/*"enable": true,*/
          "mode": "repulse"/*"mode": "push"*/
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,/*"distance": 400,*/
          "size": 0,/*"size": 40,*/
          "duration": 2,
          "opacity": 0,/*"opacity": 8,*/
          "speed": 3
        },
        "repulse": {
          "distance": 400/*"distance": 200*/,
          "duration":0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);