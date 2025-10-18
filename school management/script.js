// Admission form submission handling
document.getElementById('admissionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('acknowledgement').classList.remove('d-none');
  this.reset();
});
// Smooth scrolling effect for navbar links
document.querySelectorAll('.navbar a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,  // adjusts for navbar height
        behavior: 'smooth'
      });
    }
  });
});
// Dark mode toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon between moon 🌙 and sun ☀️
  const icon = toggleButton.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
});
