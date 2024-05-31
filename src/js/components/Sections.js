import React, { useEffect, useState } from 'react';
import initializeTabs from '/src/js/modules/section.js';


const Sections = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  useEffect(() => {
    if (product) {
      initializeTabs(); // Инициализируем вкладки после рендеринга продукта
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <ul className="sections__tabs">
        <li className="sections__tab sections__tab_active">Description</li>
        <li className="sections__ta">Reviews(Soon)</li>
      </ul>
      <div className="sections__content sections__content_active sections__content_text">
        <div className="sections__content_title">Description</div>
        <div className="sections__content_descr">{product.description}</div>
      </div>
      <div className="sections__content sections__content_text">
        <div className="sections__content_title">Reviews</div>
        <div className="sections__content_descr">No reviews yet.</div>
      </div>
    </div>
  );
};

export default Sections;
