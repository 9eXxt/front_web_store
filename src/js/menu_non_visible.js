window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  let menuItems = document.querySelectorAll(".header__menu_item");
  let lastMenuItem = menuItems[menuItems.length - 1];
  let secondMenuItem = menuItems[1];

  addOrDeleteClass(screenWidth, 1260, lastMenuItem);
  addOrDeleteClass(screenWidth, 1165, secondMenuItem);
});

function addOrDeleteClass(screenWidth, requiredWidth, item) {
  if (screenWidth < requiredWidth) {
    item.classList.add("header__menu_item_non_visible");
  } else {
    item.classList.remove("header__menu_item_non_visible");
  }
}
