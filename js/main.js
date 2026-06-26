// ===== PRODUCT FILTER FUNCTION =====
function filterProducts(category) {
  
    const products = document.querySelectorAll('.product-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.remove('active-filter');
    btn.classList.remove('btn-warning');
    btn.classList.add('btn-outline-dark');
  });

 
  event.target.classList.add('active-filter');
  event.target.classList.remove('btn-outline-dark');
  event.target.classList.add('btn-warning');

  
  products.forEach(product => {
    if (category === 'all') {
      product.style.display = 'block';
    } else if (product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// ===== CONTACT FORM VALIDATION =====
function validateForm() {
  
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('emailAddress').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  
  document.getElementById('nameError').classList.add('d-none');
  document.getElementById('emailError').classList.add('d-none');
  document.getElementById('subjectError').classList.add('d-none');
  document.getElementById('messageError').classList.add('d-none');

  
  let isValid = true;

  
  if (name === '') {
    document.getElementById('nameError').classList.remove('d-none');
    isValid = false;
  }

  if (email === '' || !email.includes('@')) {
    document.getElementById('emailError').classList.remove('d-none');
    isValid = false;
  }

  if (subject === '') {
    document.getElementById('subjectError').classList.remove('d-none');
    isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').classList.remove('d-none');
    isValid = false;
  }

  
  if (isValid) {
    document.getElementById('contactForm').classList.add('d-none');
    document.getElementById('successMessage').classList.remove('d-none');
  }
}

// ===== DARK MODE TOGGLE =====
function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('darkModeIcon');

  // Toggle dark mode class on body
  body.classList.toggle('dark-mode');

  // Switch icon between moon and sun
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-fill');
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Apply dark mode on page load if previously enabled
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    if (icon) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    }
  }
});

// ===== BACK TO TOP BUTTON =====
window.onscroll = function() {
  const btn = document.getElementById('backToTop');
  if (btn) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}