// // Выбираем все карточки товаров из первой активной секции и все карточки в секции со скидками
// let productCards = [...document.querySelector('.sections__content_active').querySelectorAll('.product_card'), ...document.querySelector('.discount').querySelectorAll('.product_card')];

// // Функция обратного вызова для Intersection Observer
// let observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         // Если элемент в зоне видимости и у него нет класса анимации, добавляем класс анимации
//         if (entry.isIntersecting && !entry.target.classList.contains('animate__animated')) {
//             entry.target.classList.add('animate__animated', 'animate__slideInUp');
//         }
//     });
// };

// // Опции для Intersection Observer
// let observerOptions = {
//     root: null, // используем вьюпорт
//     rootMargin: '0px',
//     threshold: 0.1 // элемент на 10% в зоне видимости
// };

// // Создаем наблюдателя
// let observer = new IntersectionObserver(observerCallback, observerOptions);

// // Начинаем наблюдение за каждой карточкой товара
// productCards.forEach(productCard => {
//     observer.observe(productCard);
// });
// const items = document.querySelector('.sections__content_active').querySelectorAll('')
// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
// let productCards = [...document.querySelector('.sections__content_active').querySelectorAll('.product_card'), ...document.querySelector('.discount').querySelectorAll('.product_card')];
// window.addEventListener("scroll", () => {
//     productCards.forEach(card => {
//         console.log("gfhgf");
//         if(isElementInViewport(card) && !card.classList.contains('animate_animated')) {
//             card.classList.add('animate__animated', 'animate__slideInUp');
//         }
//     });
// })

let productCards = [...document.querySelector('.sections__content_active').querySelectorAll('.product_card'), ...document.querySelector('.discount').querySelectorAll('.product_card')];

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate__animated')) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, { threshold: 0.1 });

productCards.forEach(card => observer.observe(card));


  
  
