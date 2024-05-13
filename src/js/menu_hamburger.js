const category = document.querySelector(".category");
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    category.classList.toggle("category_active");
    if ("ontouchstart" in window) {
      document.body.classList.toggle("lock-scroll");
    }
  });
});

function addLockScroll() {
  document.body.classList.add("lock-scroll");
}

function removeLockScroll() {
  document.body.classList.remove("lock-scroll");
}

category.addEventListener("mouseenter", () => {
  console.log('wrwerew');
    if(category.classList.contains("category_active")) {
        addLockScroll();
    }
});
category.addEventListener("mouseleave", removeLockScroll);
