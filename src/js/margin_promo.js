const promoSection = document.querySelector('.promo');
const header = document.querySelector('.header');
const category = document.querySelector('.category');

function updateMargin(section, value) {
    section.style.setProperty('--margin-top', `${value}px`);
}

updateMargin(promoSection, header.offsetHeight);
updateMargin(category, header.offsetHeight);

window.addEventListener('resize', () => {
    let headerResized = document.querySelector('.header');
    updateMargin(promoSection, headerResized.offsetHeight);
    updateMargin(category, headerResized.offsetHeight);
});

// document.querySelector('.category__categories').addEventListener('wheel', function(e) {
//     var deltaY = e.deltaY;
//     var contentHeight = e.currentTarget.scrollHeight;
//     var visibleHeight = e.currentTarget.offsetHeight;
//     var scrollTop = e.currentTarget.scrollTop;
  
//     if (scrollTop === 0 && deltaY < 0)
//       e.preventDefault();
//     else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
//       e.preventDefault();
//   });
//   var element = document.querySelector('.category__categories');

//   element.addEventListener('touchmove', function(e) {
//     var deltaY = e.touches[0].clientY;
//     var contentHeight = e.currentTarget.scrollHeight;
//     var visibleHeight = e.currentTarget.offsetHeight;
//     var scrollTop = e.currentTarget.scrollTop;
  
//     if (scrollTop === 0 && deltaY < 0)
//       e.preventDefault();
//     else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
//       e.preventDefault();
//   });
  
  