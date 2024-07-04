// Marquee animation
function setupMarquee() {
  const marquee = document.querySelector('.marquee span');
  marquee.style.animationDuration = `${marquee.offsetWidth / 50}s`;
}

// Form validation
function setupForm() {
  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Appointment request submitted. We will contact you soon!');
      form.reset();
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setupMarquee();
  setupForm();
});
