// document.addEventListener("DOMContentLoaded", function () {
//   let tabs = document.querySelectorAll(".sections__tab");
//   let tabsContainer = document.querySelector(".sections__tabs");
//   let tabContents = document.querySelectorAll(".sections__content");

//   function setIndicator(tab) {
//     let tabWidth = tab.getBoundingClientRect().width;
//     let tabLeft =
//       tab.getBoundingClientRect().left -
//       tabsContainer.getBoundingClientRect().left;
//     tabsContainer.style.setProperty("--after-width", `${tabWidth}px`);
//     tabsContainer.style.setProperty("--indicator-left", `${tabLeft}px`);
//   }

//   let initialActiveTab = document.querySelector(".sections__tab_active");
//   if (initialActiveTab) {
//       setIndicator(initialActiveTab);
//   }

//   tabs.forEach(function (tab, index) {
//     tab.addEventListener("click", function () {
//       // Удаление класса активной вкладки у всех вкладок
//       tabs.forEach(function (tab) {
//         tab.classList.remove("sections__tab_active");
//       });

//       // Добавление класса активной вкладки к нажатой вкладке
//       this.classList.add("sections__tab_active");

//       setIndicator(this);

//       // Удаление класса активного контента у всех контейнеров с содержимым
//       tabContents.forEach(function (content) {
//         content.classList.remove("sections__content_active");
//         content.querySelectorAll(".product_card").forEach(function (card) {
//           card.classList.remove(
//             "animate__animated",
//             "animate__fadeInUp",
//             "animate__fadeInLeft"
//           );
//         });
//       });

//       // Добавление класса активного контента к соответствующему контейнеру
//       let activeContent = tabContents[index];
//       activeContent.classList.add("sections__content_active");

//       // Добавление анимации fadeInRight к карточкам товаров в активной секции
//       activeContent.querySelectorAll(".product_card").forEach(function (card) {
//         card.classList.add("animate__animated", "animate__fadeInLeft");
//       });
//     });
//   });
// });
const initializeTabs = () => {
  let tabs = document.querySelectorAll(".sections__tab");
  let tabsContainer = document.querySelector(".sections__tabs");
  let tabContents = document.querySelectorAll(".sections__content");

  function setIndicator(tab) {
    let tabWidth = tab.getBoundingClientRect().width;
    let tabLeft =
      tab.getBoundingClientRect().left -
      tabsContainer.getBoundingClientRect().left;
    tabsContainer.style.setProperty("--after-width", `${tabWidth}px`);
    tabsContainer.style.setProperty("--indicator-left", `${tabLeft}px`);
  }

  let initialActiveTab = document.querySelector(".sections__tab_active");
  if (initialActiveTab) {
    setIndicator(initialActiveTab);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("sections__tab_active");
      });

      this.classList.add("sections__tab_active");

      setIndicator(this);

      tabContents.forEach(function (content) {
        content.classList.remove("sections__content_active");
        content.querySelectorAll(".product_card").forEach(function (card) {
          card.classList.remove(
            "animate__animated",
            "animate__fadeInUp",
            "animate__fadeInLeft"
          );
        });
      });

      let activeContent = tabContents[index];
      activeContent.classList.add("sections__content_active");

      activeContent.querySelectorAll(".product_card").forEach(function (card) {
        card.classList.add("animate__animated", "animate__fadeInLeft");
      });
    });
  });
};

export default initializeTabs;
