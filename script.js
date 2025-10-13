/* script.js */
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    // Intersection observer for reveal animations (safe checks)
    try {
      const revealEls = document.querySelectorAll('.reveal');
      if(revealEls.length){
        const obs = new IntersectionObserver((entries)=>{
          entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('visible');
          });
        }, { threshold: 0.12 });
        revealEls.forEach(el => obs.observe(el));
      }
    } catch (err) {
      // fail silently in older browsers
      console.warn('Reveal observer error:', err);
    }

    // Back-to-top button behavior (guard for element existence)
    const btt = document.getElementById('backToTop');
    if(btt){
      const toggleBtt = () => { btt.style.display = window.scrollY > 400 ? 'block' : 'none'; };
      // initialize visibility
      toggleBtt();
      window.addEventListener('scroll', toggleBtt);
      btt.addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    // Appointment form demo handler (guard for element)
    const appointmentForm = document.getElementById('appointmentForm');
    if(appointmentForm){
      appointmentForm.addEventListener('submit', function(e){
        e.preventDefault();
        // Here you would send data to backend. This is a demo placeholder.
        alert('Appointment submitted (demo).');
        appointmentForm.reset();
      });
    }
  });
})();
