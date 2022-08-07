// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar_menu');
// const navLogo = document.querySelector('#navbar_logo');

// // Display Mobile Menu
// const mobileMenu = () => {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// };

// menu.addEventListener('click', mobileMenu);

// // Show active menu when scrolling
// const highlightMenu = () => {
//   const elem = document.querySelector('.highlight');
//   const homeMenu = document.querySelector('#home-page');
//   const aboutMenu = document.querySelector('#lanzamientos-page');
//   const triviaMenu = document.querySelector('#trivia-page');
//   let scrollPos = window.scrollY;
//   // console.log(scrollPos);

//   // adds 'highlight' class to my menu items
//   if (window.innerWidth > 960 && scrollPos < 600) {
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 1400) {
//     aboutMenu.classList.add('highlight');
//     homeMenu.classList.remove('highlight');
//     triviaMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 2345) {
//     triviaMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   }

//   if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
//     elem.classList.remove('highlight');
//   }
// };

// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);

// //  Close mobile Menu when clicking on a menu item
// const hideMobileMenu = () => {
//   const menuBars = document.querySelector('.is-active');
//   if (window.innerWidth <= 768 && menuBars) {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.remove('active');
//   }
// };

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);

function submitTrivia() {
  const nameElement = document.getElementById('name');
  if (!nameElement.value) {
      nameElement.classList.add("required");
  } else {
      const formData = new FormData(document.getElementById('form'))
      var result = true;
      var rightAnswers = 0;
      for (var pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
          result = result && (pair[1] !== 'false');
          rightAnswers++;
      }
      if (result && rightAnswers === 5) {
          alert('Ganaste ' + nameElement.value);
      } else {
          alert('Perdiste ' + nameElement.value);
      }
      markAnswers();
      return false;
  }
}

function resetRequired() {
  const nameElement = document.getElementById('name');
  nameElement.classList.remove("required");
  unmark('answer-1');
  unmark('answer-2');
  unmark('answer-3');
  unmark('answer-4');
  unmark('answer-5');
}

function markAnswers() {
  mark('answer-1');
  mark('answer-2');
  mark('answer-3');
  mark('answer-4');
  mark('answer-5');
}

function mark(nodeName) {
  var radios = document.getElementsByName(nodeName);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].value === 'true') {
      radios[i].labels[0].classList.add("correct");
    }
    if (radios[i].checked && radios[i].value === 'false') {
        radios[i].labels[0].classList.add("incorrect");
    }
  }
}

function unmark(nodeName) {
  var radios = document.getElementsByName(nodeName);

  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].labels[0].classList.remove("correct");
    radios[i].labels[0].classList.remove("incorrect");
  }
}
