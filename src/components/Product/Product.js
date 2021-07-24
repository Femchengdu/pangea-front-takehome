import React from "react";
import "./Product.css";
const Product = ({ imageUrl, price }) => {
  return (
    <div className="product-container">
      <div className="product-details">
        <div className="image-container">
          <div className="image-detail-container">
            <img className="product-image" src={imageUrl} alt="" />
            <h2 className="product-title">Lorem detail</h2>
          </div>
        </div>
        <div className="price-container">
          <p className="product-price">BBD&nbsp;{price}</p>
        </div>
        <button
          className="product-button"
          onClick={() => console.log("Add to cart clicked")}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
