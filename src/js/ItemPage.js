import "./modules/icon_animation.js";
import "./modules/margin_promo.js";
import "./modules/menu_hamburger.js";
import "./modules/menu_non_visible.js";
import "../sass/style.sass";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
// import "./modules/section.js";
import initializeTabs from './modules/section.js';
import ItemInfo from './components/ItemInfo';
import Sections from './components/Sections';
import { CartProvider } from "./components/cartContext.js";
import { WishlistProvider } from "./components/wishlistContext.js";


document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header");
    const footerContainer = document.querySelector(".footer");
    const itemContainer = document.querySelector(".item");
    const sectionsContainer = document.querySelector(".sections");
    
    if (headerContainer && footerContainer) {
        const headerRoot = createRoot(headerContainer);
        headerRoot.render(<Header sectionClass="path" />);
        
        const footerRoot = createRoot(footerContainer);
        footerRoot.render(<Footer />);
    }
    if (itemContainer) {
        const itemRoot = createRoot(itemContainer);
        itemRoot.render(<CartProvider>
            <WishlistProvider>
                <ItemInfo />
            </WishlistProvider>
        </CartProvider>);
    }
    
    if (sectionsContainer) {
        const sectionsRoot = createRoot(sectionsContainer);
        sectionsRoot.render(<Sections />);
    }
    initializeTabs();
});