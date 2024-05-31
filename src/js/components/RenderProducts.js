import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductCard from './ProductCard';
import catalog from './catalog';
import { CartProvider } from './cartContext';
import { WishlistProvider } from './wishlistContext';

const productsNewArrival = [1, 2, 3, 4, 5, 6, 7, 8];
const productsBestseller = [2, 4, 5, 6];
const productsFeatured = [1, 2, 3, 4];
const productsDiscount = [2, 3, 4, 5];
const allProducts = [1, 2, 3, 4, 5, 6, 7, 8];

const findProductById = (id) => {
    return catalog.find(product => product.id === id);
};

const productRoots = {};

const renderProducts = (selector, productIds) => {
    const container = document.querySelector(selector);
    if (container) {
        if (!productRoots[selector]) {
            productRoots[selector] = createRoot(container);
        }
        productRoots[selector].render(
            <CartProvider>
                <WishlistProvider>
                    <>
                        {productIds.map((id) => {
                            const product = findProductById(id);
                            return product ? <ProductCard key={id} product={product} /> : null;
                        })}
                    </>
                </WishlistProvider>
            </CartProvider>
        );
    }
};

export { renderProducts, productsNewArrival, productsBestseller, productsFeatured, productsDiscount, allProducts };
