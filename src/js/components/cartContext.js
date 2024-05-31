import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            let updatedItems;
            if (existingItem) {
                updatedItems = prevItems.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedItems = [...prevItems, { ...product, quantity: 1 }];
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== product.id);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const incrementQuantity = (product) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const decrementQuantity = (product) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => 
                item.id === product.id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    // Синхронизация между вкладками
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'cartItems') {
                setCartItems(JSON.parse(event.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
