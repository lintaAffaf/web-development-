// ===== script.js =====

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar-nav a, .btn').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Skip external links
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  });
});

// Highlight active navbar link while scrolling
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  document.querySelectorAll('section').forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// "View My Work" button → scroll to Projects
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const btnText = e.target.textContent.trim().toLowerCase();

    if (btnText.includes('view my work')) {
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    if (btnText.includes('download cv')) {
      // Simulate a CV download (replace link with your real CV)
      window.open('cv/Linta Affaf-resume.pdf', '_blank');
    }
    if (btnText.includes('contact me')) {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project Buttons
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const linkText = link.textContent.toLowerCase();

    if (linkText.includes('live demo')) {
      window.open('https://your-live-demo-link.com', '_blank');
    } else if (linkText.includes('view details')) {
      alert('This project is part of your Hostel Hub App — add more details later!');
    } else if (linkText.includes('github')) {
      window.open('https://github.com/lintaAffaf/web-development-', '_blank');
    }
  });
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
console.log("✅ JS file connected successfully!");
