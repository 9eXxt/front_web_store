import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlistItems = localStorage.getItem('wishlistItems');
        return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
    });

    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => {
            if (prevItems.some(item => item.id === product.id)) return prevItems;
            const updatedItems = [...prevItems, product];
            localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeFromWishlist = (product) => {
        setWishlistItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== product.id);
            localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    // Синхронизация между вкладками
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'wishlistItems') {
                setWishlistItems(JSON.parse(event.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
