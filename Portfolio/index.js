document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-buttons button');
  const sections = {
    home: document.getElementById('container'),
    about: document.getElementById('about'),
    projects: document.getElementById('projects'),
    contact: document.getElementById('contact'),
  };

  const typedOnce = {};
  function typeEffect(element, text, speed = 50, callback = null) {
    let i = 0;
    element.innerHTML = '';
    element.classList.add('cursor')
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed)
      } else {
        element.classList.remove('cursor');
        if (callback) callback()
      }
    }
    typing()
  }

  function showSection(sectionName) {
    // Hide all sections
    for (const key in sections) {
      sections[key].style.display = 'none';
    }
    // Show the selected one
    sections[sectionName].style.display = (sectionName === "home") ? "flex" : "block";

    if (sectionName === 'about') {
      const line1 = document.getElementById('hacker1');
      const line2 = document.getElementById('hacker2');
      const line3 = document.getElementById('hacker3');

      [line1, line2, line3].forEach(line => line.innerHTML = '')
      
      typeEffect(line1, "~Hi, my name is Courtney Johnson, a full-stack web dev student who loves building intuitive user experiences.", 30, () => {
        typeEffect(line2, "~Currently learning JavaScript, React, and Node.js to create responsive and dynamic applications.", 30, () => {
          typeEffect(line3, "~Outside of coding, I enjoy gaming, side projects, and strong coffee.", 30)
        });
      });
      
    }
  }

  // Initially show only "home"
  showSection('home');

  // Add click listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      showSection(target);
    });
  });
});



