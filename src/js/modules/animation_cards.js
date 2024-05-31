// let productCards = [...document.querySelector('.sections__content_active').querySelectorAll('.product_card'), ...document.querySelector('.discount').querySelectorAll('.product_card')];

// let observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !entry.target.classList.contains('animate__animated')) {
//             entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//         }
//     });
// }, { threshold: 0.1 });

// productCards.forEach(card => observer.observe(card));

// src/js/modules/animation_cards.js
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate__animated')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, { threshold: 0.1 });
  
  const observeNewCards = () => {
    let productCards = [
      ...document.querySelector('.sections__content_active').querySelectorAll('.product_card'),
      ...document.querySelector('.discount').querySelectorAll('.product_card')
    ];
  
    productCards.forEach(card => observer.observe(card));
  };
  
  // Initial call to observe existing cards
  observeNewCards();
  
  let mutationObserver = new MutationObserver(() => {
    observeNewCards();
  });
  
  mutationObserver.observe(document.querySelector('.sections__content_active'), { childList: true, subtree: true });
  mutationObserver.observe(document.querySelector('.discount'), { childList: true, subtree: true });
  