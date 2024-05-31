import "./modules/icon_animation.js";
import "./modules/margin_promo.js";
import "./modules/menu_hamburger.js";
import "./modules/menu_non_visible.js";
import "../sass/style.sass";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import CartInfo from "./components/CartInfo.js";
import { CartProvider } from "./components/cartContext.js";

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header");
    const footerContainer = document.querySelector(".footer");
    const cartContainer = document.querySelector(".cart");
    
    if (headerContainer && footerContainer) {
        const headerRoot = createRoot(headerContainer);
        headerRoot.render(<Header sectionClass="cart" />);
        
        const footerRoot = createRoot(footerContainer);
        footerRoot.render(<Footer />);

    }
    if(cartContainer) {
        const cartRoot = createRoot(cartContainer);
        cartRoot.render(
        <CartProvider>
            <CartInfo/>
        </CartProvider>
    )
    }
});