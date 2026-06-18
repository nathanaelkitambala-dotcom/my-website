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