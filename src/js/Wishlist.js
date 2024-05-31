import "./modules/icon_animation.js";
import "./modules/margin_promo.js";
import "./modules/menu_hamburger.js";
import "./modules/menu_non_visible.js";
import "../sass/style.sass";
import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import Header from './components/Header';
import Footer from "./components/Footer";
import ProductCard from './components/ProductCard';
import { WishlistProvider, WishlistContext } from './components/wishlistContext';
import { CartProvider } from './components/cartContext';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div className="container">
        <div className="wishlist__title">Wishlist</div>
        <div className="wishlist__content">
      {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <ProductCard key={item.id} product={item} />
        ))
      ) : (
        <div className="wishlist__empty">Your wishlist is empty</div>
      )}
        </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector(".header");
  const footerContainer = document.querySelector(".footer");
  const wishlistContainer = document.querySelector(".wishlist");

  if (headerContainer && footerContainer) {
    const headerRoot = createRoot(headerContainer);
    headerRoot.render(<Header sectionClass="wishlist" />);

    const footerRoot = createRoot(footerContainer);
    footerRoot.render(<Footer />);
  }

  if (wishlistContainer) {
    const wishlistRoot = createRoot(wishlistContainer);
    wishlistRoot.render(
      <WishlistProvider>
        <CartProvider>
          <Wishlist />
        </CartProvider>
      </WishlistProvider>
    );
  }
});
