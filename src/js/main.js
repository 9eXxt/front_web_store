import "../js/modules/animation_cards.js";
import "./modules/icon_animation.js";
import "./modules/margin_promo.js";
import "./modules/menu_hamburger.js";
import "./modules/menu_non_visible.js";
import "./modules/subpromo.js"
import "../sass/style.sass";
import initializeTabs from './modules/section.js';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  renderProducts,
  productsNewArrival,
  productsBestseller,
  productsFeatured,
  productsDiscount,
} from "./components/RenderProducts.js";
import Header from './components/Header';
import Footer from "./components/Footer.js";
import SuccessModal from "./components/SuccessModal.js";

initializeTabs();

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector(".header");
  const footerContainer = document.querySelector(".footer");
  // const mainContainer = document.querySelector(".overlay-container"); // Убедитесь, что контейнер main существует

  if (headerContainer && footerContainer) {
    const headerRoot = createRoot(headerContainer);
    headerRoot.render(
      <Header sectionClass="promo"/>
    );

    const footerRoot = createRoot(footerContainer);
    footerRoot.render(<Footer />);
  }

  // if (mainContainer) {
  //   const mainRoot = createRoot(mainContainer);
  //   mainRoot.render(<div id="portal-root"></div>); // Добавьте корневой элемент для портала
  // }

  renderProducts(".sections__content:nth-of-type(1)", productsNewArrival);
  renderProducts(".sections__content:nth-of-type(2)", productsBestseller);
  renderProducts(".sections__content:nth-of-type(3)", productsFeatured);
  renderProducts(".discount__items", productsDiscount);
});
