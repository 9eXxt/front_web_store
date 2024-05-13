// Проверяем, есть ли устройство возможность наведения курсора
// const isHoverSupported = () => {
//     return !('ontouchstart' in window || navigator.maxTouchPoints);
//   };
  
//   if (isHoverSupported()) {
//     // Получите все элементы SVG
//     let svgs = document.querySelectorAll('svg');
  
//     // Добавьте обработчик событий для каждого SVG
//     svgs.forEach((svg) => {
//       // При наведении мыши добавьте класс 'hovered' ко всем элементам path внутри SVG
//       svg.addEventListener('mouseover', function() {
//         this.querySelectorAll('path').forEach((path) => {
//           path.classList.add('hovered');
//         });
//       });
  
//       // Когда указатель мыши уходит, удалите класс 'hovered' у всех элементов path
//       svg.addEventListener('mouseout', function() {
//         this.querySelectorAll('path').forEach((path) => {
//           path.classList.remove('hovered');
//         });
//       });
//     });
//   }

  // Проверяем, находимся ли мы в режиме разработки
const isDevelopmentMode = true; // Замените на ваш способ определения режима разработки

// Проверяем, есть ли устройство возможность наведения курсора
const isHoverSupported = () => {
  return !('ontouchstart' in window || navigator.maxTouchPoints);
};

if (isDevelopmentMode || isHoverSupported()) {
  // Получите все элементы SVG
  let svgs = document.querySelectorAll('header svg');

  // Добавьте обработчик событий для каждого SVG
  svgs.forEach((svg) => {
    // При наведении мыши добавьте класс 'hovered' ко всем элементам path внутри SVG
    svg.addEventListener('mouseover', function() {
      this.querySelectorAll('path').forEach((path) => {
        path.classList.add('hovered');
      });
    });

    // Когда указатель мыши уходит, удалите класс 'hovered' у всех элементов path
    svg.addEventListener('mouseout', function() {
      this.querySelectorAll('path').forEach((path) => {
        path.classList.remove('hovered');
      });
    });
  });
} else {
  // Если не в режиме разработки и устройство не поддерживает наведение курсора,
  // применяем стили анимации всегда
  let paths = document.querySelectorAll('svg path');
  paths.forEach((path) => {
    path.classList.add('hovered');
  });
}

  