import "./modules/icon_animation.js";
import "./modules/margin_promo.js";
import "./modules/menu_hamburger.js";
import "./modules/menu_non_visible.js";
import "../sass/style.sass";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from './components/Header';
import Footer from "./components/Footer.js";
import { allProducts, renderProducts } from "./components/RenderProducts.js";
import catalog from "./components/catalog";

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header");
    const footerContainer = document.querySelector(".footer");
    const productsContainer = document.querySelector(".products__product");
    const filterContainer = document.querySelector(".products__filters");

    if (headerContainer && footerContainer) {
      const headerRoot = createRoot(headerContainer);
      headerRoot.render(<Header sectionClass="path" />);
  
      const footerRoot = createRoot(footerContainer);
      footerRoot.render(<Footer />);
    }

    if (productsContainer && filterContainer) {
        renderProducts(".products__product", allProducts);

        const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleFilterChange);
        });
    }
});

const handleFilterChange = () => {
    const selectedBrands = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.labels[0].textContent);

    let filteredProducts;

    if (selectedBrands.length === 0) {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(id => {
            const product = catalog.find(product => product.id === id);
            return selectedBrands.includes(product.brand);
        });
    }

    renderProducts(".products__product", filteredProducts);
};
