import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    const handleIncrement = (product) => {
        incrementQuantity(product);
    };

    const handleDecrement = (product) => {
        decrementQuantity(product);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    const tax = subtotal === 0 ? 0 : 50;
    const total = subtotal + tax;

    return (
        <div className="container">
            <div className="cart__title">Shopping Cart</div>
            <div className="cart__content">
                <div className="cart__order">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <div className="cart__item">
                                    <div className="cart__item_img"><img src={item.imgSrc} alt={item.name} /></div>
                                    <div className="cart__item_name">{item.name}</div>
                                    <div className="cart__item_counter">
                                        <div className="minus counter_block" onClick={() => handleDecrement(item)}></div>
                                        <div className="cart__item_counter_value">{item.quantity}</div>
                                        <div className="plus counter_block" onClick={() => handleIncrement(item)}></div>
                                    </div>
                                    <div className="cart__item_price">{item.price}</div>
                                    <div className="remove" onClick={() => handleRemove(item)}></div>
                                </div>
                                <hr />
                            </React.Fragment>
                        ))
                    ) : (
                        <div className="cart__empty">Your cart is empty</div>
                    )}
                </div>
                <div className="cart__total">
                    <div className="cart__total_title">Order Summary</div>
                    <div className="discount_code">
                        <div className="discount_code_title">Discount code / Promo code</div>
                        <input type="text" id="discount" placeholder="Code(Soon)" readOnly />
                        <div className="cart__total_summary">
                            <div className="cart__total_subtotal">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="cart__total_tax">
                                <span className="gtcolor">Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="cart__total_info">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="button button_bg button_cart" disabled={cartItems.length === 0}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
