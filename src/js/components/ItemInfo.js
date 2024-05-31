import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './cartContext';
import { WishlistContext } from './wishlistContext';

const ItemBlock = () => {
  const [product, setProduct] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Добавляем состояние для отслеживания добавления товара в корзину
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false); // Добавляем состояние для отслеживания добавления товара в wishlist
  const [hovered, setHovered] = useState(false); // Добавляем состояние для отслеживания наведения
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Предотвратить всплытие события
    if (product) {
      if (isAddedToCart) {
        removeFromCart(product);
      } else {
        addToCart(product);
      }
      setIsAddedToCart(!isAddedToCart); // Обновляем состояние при добавлении/удалении товара
    }
  };

  const handleAddToWishlist = (event) => {
    event.stopPropagation(); // Предотвратить всплытие события
    if (product) {
      if (isAddedToWishlist) {
        removeFromWishlist(product);
      } else {
        addToWishlist(product);
      }
      setIsAddedToWishlist(!isAddedToWishlist); // Обновляем состояние при добавлении/удалении товара
    }
  };

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      setProduct(parsedProduct);
      setIsAddedToCart(cartItems.some(item => item.id === parsedProduct.id));
      setIsAddedToWishlist(wishlistItems.some(item => item.id === parsedProduct.id));
    }
  }, [cartItems, wishlistItems]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="item__img">
        <img src={product.itemImg} alt={product.name} />
      </div>
      <div className="item__main_info">
        <div className="item__name">{product.name}</div>
        <div className="item__price">{product.price}</div>
        <div className="item__specifications">
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/Screensize.svg" alt="screen" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">Screen size</div>
              <div className="item__specifications_info_descr">6.7"</div>
            </div>
          </div>
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/cpu.svg" alt="cpu" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">CPU</div>
              <div className="item__specification_info_descr">Apple A16 Bionic</div>
            </div>
          </div>
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/cores.svg" alt="cores" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">Number of Cores</div>
              <div className="item__specification_info_descr">6</div>
            </div>
          </div>
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/camera_item.svg" alt="camera" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">Main camera</div>
              <div className="item__specification_info_descr">48-12 -12 MP</div>
            </div>
          </div>
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/front-camera_item.svg" alt="front-camera" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">Front-camera</div>
              <div className="item__specification_info_descr">12 MP</div>
            </div>
          </div>
          <div className="item__specification">
            <div className="item__specification_icon">
              <img src="/icons/battery.svg" alt="battery" />
            </div>
            <div className="item__specification_info">
              <div className="item__specification_info_title">Battery capacity</div>
              <div className="item__specification_info_descr">4323 mAh</div>
            </div>
          </div>
        </div>
        <div className="item__buttons">
          <button
            className={`button button_black button_item ${isAddedToWishlist ? 'wishlist_added' : ''}`}
            onClick={handleAddToWishlist}
          >
            {isAddedToWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
          <button
            className={`button button_item ${isAddedToCart ? 'button_added' : 'button_bg'}`}
            onClick={handleAddToCart}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {isAddedToCart ? (hovered ? 'Remove from Cart' : 'Added to Cart') : 'Add to Cart'}
          </button>
        </div>
        <div className="item__advantages">
          <div className="item_advantage">
            <div className="item_advantage_icon">
              <img src="/icons/delivery.svg" alt="delivery" />
            </div>
            <div className="item_advantage_text">
              <div className="item_advantage_title">Free Delivery</div>
              <div className="item_advantage_descr">1-2 day</div>
            </div>
          </div>
          <div className="item_advantage">
            <div className="item_advantage_icon">
              <img src="/icons/stock.svg" alt="stock" />
            </div>
            <div className="item_advantage_text">
              <div className="item_advantage_title">In Stock</div>
              <div className="item_advantage_descr">Today</div>
            </div>
          </div>
          <div className="item_advantage">
            <div className="item_advantage_icon">
              <img src="/icons/guarantee.svg" alt="guarantee" />
            </div>
            <div className="item_advantage_text">
              <div className="item_advantage_title">Guaranteed</div>
              <div className="item_advantage_descr">1 year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBlock;
