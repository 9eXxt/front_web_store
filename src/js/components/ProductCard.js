import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './cartContext';
import { WishlistContext } from './wishlistContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsAddedToCart(cartItems.some(item => item.id === product.id));
    setIsAddedToWishlist(wishlistItems.some(item => item.id === product.id));
  }, [cartItems, wishlistItems, product.id]);

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы избежать перехода на страницу товара
    if (isAddedToCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
    setIsAddedToCart(!isAddedToCart); // Обновляем состояние при добавлении/удалении товара
  };

  const handleAddToWishlist = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы избежать перехода на страницу товара
    if (isAddedToWishlist) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
    setIsAddedToWishlist(!isAddedToWishlist); // Обновляем состояние при добавлении/удалении товара
  };

  const handleClick = () => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = '/html/ItemPage.html';
  };

  return (
    <div className="product_card" onClick={handleClick}>
      <div className="product_card_content">
        <div
          className={`product_card_favourite ${isAddedToWishlist ? 'favourite_added' : ''}`}
          onClick={handleAddToWishlist}
        >
          <img src="/icons/heart.svg" alt="heart" />
        </div>
        <img src={product.imgSrc} alt={product.name} className="product_card_img" />
        <button
          className={`button_bg ${isAddedToCart ? 'button_added' : 'button_bg'}`}
          onClick={handleAddToCart}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {isAddedToCart ? (hovered ? 'Remove from Cart' : 'Added to Cart') : 'Add to Cart'}
        </button>
      </div>
      <div className="product_card_footer">
        <div className="product_card_name">{product.name}</div>
        <div className="product_card_price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
