
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import './product.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProductIndex, setVisibleProductIndex] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  const handleClick = (index) => {
    setVisibleProductIndex(index);
  };

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < 20; i++) {
      const product = products[i];
      cells.push(
        <div 
          key={i} 
          className="cell" 
          onClick={() => handleClick(i)}
        >
          {visibleProductIndex === i && product && (
            <div className="product">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="grid">
      {renderCells()}
    </div>
  );
};

export default ProductList;
