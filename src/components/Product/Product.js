import React from "react";
import "./Product.css";

const Product = ({ imageUrl, price, title, addItemToCart, id, currency }) => {
  const showModal = (item) => {
    // Get the modal
    const modalElement = document.getElementById("myModal");
    modalElement.style.display = "block";
    addItemToCart(item);
  };

  const item = { price, title, id };
  return (
    <div className="product-container">
      <div className="product-details">
        <div className="image-container">
          <div className="image-detail-container">
            <img className="product-image" src={imageUrl} alt="" />
            <h2 className="product-title">{title}</h2>
          </div>
        </div>
        <div className="price-container">
          <p className="product-price">
            {currency}&nbsp;{price}
          </p>
        </div>
        <button className="product-button" onClick={() => showModal(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
