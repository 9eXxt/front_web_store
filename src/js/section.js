document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".sections__tab");
    let tabsContainer = document.querySelector(".sections__tabs");
    let tabContents = document.querySelectorAll(".sections__content");
  
    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        // Удаление класса активной вкладки у всех вкладок
        tabs.forEach(function (tab) {
          tab.classList.remove("sections__tab_active");
        });
  
        // Добавление класса активной вкладки к нажатой вкладке
        this.classList.add("sections__tab_active");
  
        let tabWidth = this.getBoundingClientRect().width;
        let tabLeft = this.getBoundingClientRect().left - tabsContainer.getBoundingClientRect().left;
  
        // Установка ширины :after
        tabsContainer.style.setProperty("--after-width", `${tabWidth}px`);
        tabsContainer.style.setProperty("--indicator-left", `${tabLeft}px`);

  
        // Удаление класса активного контента у всех контейнеров с содержимым
        tabContents.forEach(function (content) {
          content.classList.remove("sections__content_active");
          content.querySelectorAll('.product_card').forEach(function (card) {
            card.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fadeInLeft');
          });
        });
  
        // Добавление класса активного контента к соответствующему контейнеру
        let activeContent = tabContents[index];
        activeContent.classList.add("sections__content_active");
  
        // Добавление анимации fadeInRight к карточкам товаров в активной секции
        activeContent.querySelectorAll('.product_card').forEach(function (card) {
          card.classList.add('animate__animated', 'animate__fadeInLeft');
        });
      });
    });
  });
  