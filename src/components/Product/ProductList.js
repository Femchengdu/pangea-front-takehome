import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ addItemToCart, products, currency }) => {
  const renderProduct = (productData) => {
    const { id, price, image_url: imageUrl, title } = productData;
    return (
      <Product
        key={id}
        price={price}
        imageUrl={imageUrl}
        title={title}
        id={id}
        addItemToCart={addItemToCart}
        currency={currency}
      />
    );
  };

  return (
    <div className="grid-container">
      <div className="grid">
        {products.length && products.map(renderProduct)}
      </div>
    </div>
  );
};

export default ProductList;
