// let languages = ["English", "Русский", "Український"];
// let languagesShort = ["EN", "RU", "UA"];

// // получаем элементы
// let languageDesktop = document.querySelector(".header__language_desktop");
// let languageMobile = document.querySelector(".header__language_mobile");
// let languageContainer = document.querySelector(".header__language");

// // добавляем событие клика
// languageContainer.addEventListener("click", function () {
//   // получаем текущий индекс языка
//   var currentIndex = languages.indexOf(languageDesktop.textContent);

//   // увеличиваем индекс на 1 или сбрасываем до 0, если достигли конца списка
//   var nextIndex = (currentIndex + 1) % languages.length;

//   // обновляем текст элементов
//   languageDesktop.textContent = languages[nextIndex];
//   languageMobile.textContent = languagesShort[nextIndex];

//   // добавляем анимацию
//   languageContainer.classList.add("animate");

//   // удаляем анимацию после выполнения
//   setTimeout(function () {
//     languageContainer.classList.remove("animate");
//   }, 500);
// });
