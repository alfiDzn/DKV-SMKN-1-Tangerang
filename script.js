const dropdownLinks = document.querySelectorAll('[id^="dropdown-link"]');

dropdownLinks.forEach(link => {
  const dropdownMenu = link.nextElementSibling;
  let isOpen = false;

  link.addEventListener('click', (event) => {
    event.preventDefault();

// Toggle the current dropdown
    // dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    isOpen = !isOpen

    if (isOpen) {

      
      anime({
        targets: dropdownMenu,
        opacity: [0, 1],
        translateY: [-100, 20],
        duration: 200,
        easing: 'easeInOutCubic',
        begin: () => {
          dropdownMenu.style.display = 'block';
        }
      });  
    } else {
      anime({
        targets: dropdownMenu,
        opacity: 0,
        translateY: -100,
        duration: 200,
        easing: 'easeInOutCubic',
        endDelay: 300,
        complete: () => {
          dropdownMenu.style.display = 'none';
        }
      })
    }
    

    // Close all other dropdowns
    dropdownLinks.forEach(otherLink => {
      if (otherLink !== link) {
        const otherDropdownMenu = otherLink.nextElementSibling;
        anime({
          targets: otherDropdownMenu,
          opacity: 0,
          translateY: -100,
          duration: 100,
          easing: 'easeInOutCubic',
          endDelay: 200,
          complete: () => {
            otherDropdownMenu.style.display = 'none';  
          }
        });
        
      }
    });

    
  });
});

// Close dropdown when clicking outside of it
window.addEventListener('click', (event) => {
  if (!event.target.closest('.nav')) {
    dropdownLinks.forEach(link => {
      const dropdownMenu = link.nextElementSibling;
      anime({
        targets: dropdownMenu,
        opacity: 0,
        translateY: -500,
        easing: 'easeInOutCubic',
        duration: 300,
        endDelay: 400,
        complete: () => {
          dropdownMenu.style.display = 'none';
        }
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const titleSec1 = document.querySelectorAll('[Id^="animsec"]');
  anime({
    targets: titleSec1,
    translateX: [-100, 0],
    opacity: [0, 1],
    easing: 'easeInOutCubic',
    delay: anime.stagger(100),
  });
});

let char = document.querySelector('.char')

anime({
    targets: '.char',
    translateX: 0,
    scale: [
        {value: 1.1, easing: 'easeInOutExpo', duration: 400},
        {value: 1, easing: 'easeInOutExpo', duration: 600}
      ],
    loop: true,
    easing: 'easeInOutExpo',
    delay: anime.stagger(200),
});




const titlesec2 = document.querySelector('.titlesec2');
const sec2 = document.getElementById('section2');
const cardBody = document.querySelectorAll('[id^="card"]');

window.addEventListener("scroll", function() {
    const targetTop = sec2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (targetTop < windowHeight && !sec2.classList.contains('animated')) {
      anime({
        targets: [titlesec2, cardBody],
        opacity: 1, // Munculkan elemen
        translateY: -20, // Animasi geser ke atas
        duration: 300, // Durasi animasi
        easing: 'easeOutQuad', // Jenis easing
        // delay: anime.stagger(100) // Delay antar elemen
      });
    }
  });


  // card event

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const img = card.querySelector('img');

  card.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const imgHome = document.querySelector('.imghome');

anime({
  targets: imgHome,
  translateY: [-1000, 0],
  opacity: [-0, 1],
  duration: 2000,
  easing: 'easeInOutCubic'
  });
});

const imgHome = document.querySelector('.imghome');

imgHome.addEventListener('click', () => {
  console.log('ditekan');
  anime({
    targets: '.imghome',
    translateX: function() {
      return anime.random(-20, 20);
    },
    translateY: function() {
      return anime.random(-20, 20);
    },
    rotate: function() {
      return anime.random(-10, 10);
    },
    easing: 'easeOutExpo'
  })
});

  const imgHome1 = document.getElementById('imghome')

  imgHome1.addEventListener('mouseenter', () => {
    console.log('image hover');
    anime({
      targets: imgHome1,
      scale: 1.02,
    });
  })

  imgHome1.addEventListener('mouseleave', () => {
    console.log('mouseleave')
    anime({
      targets: imgHome1,
      scale: 1,
    });
  });

  const loginbtn = document.querySelector('.login-up');
  const loginfloat = document.querySelector('.login-float');

  loginbtn.addEventListener('click', () => {
    // window.open('https:\\www.youtube.com', '_blank');


    if (loginfloat.style.display === "flex") {
      anime({
        targets: loginfloat,
        translateY:[0, -500],
        duration: 400,
        easing: 'easeInOutCubic',
        opacity: [1, 0],
        complete: () => {
          loginfloat.style.display = "none"
        },
      });
    } 
    
    else {
      anime({
        targets: loginfloat,
        translateY: [-500, 0],
        duration: 400,
        easing: 'easeInOutCubic',
        opacity: [0, 1],
        begin: () => {
          loginfloat.style.display = "flex"
        },
      });
    }

  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.loginbtn')) {
        anime({
          targets: loginfloat,
          opacity: [1,0],
          duration: 400,
          translateY: [0,-500],
          easing: 'easeInOutCubic',
          complete: () => {
            loginfloat.style.display = 'none';
          }
        });
      }});

let titleterbaru = document.querySelector('.titleterbaru');

titleterbaru.innerText.split("").map(function(char) {
  return "<span>"+char+"<span>";
}).join("");

anime.timeline({
  loop: true
})

.add ({
  targets: '.titleterbaru h1 span',
  translateY: [-20, 0],
})