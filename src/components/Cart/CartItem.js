import React from "react";
import "./CartItem.css";
const CartItem = ({
  cartItem,
  decrementCartItem,
  incrementCartItem,
  currency,
}) => {
  const returnFormatPrice = (currency, qty, price) => {
    return `${currency} ${qty * price}.00`;
  };
  const { title, qty, price, id, imageUrl } = cartItem;
  return (
    <div className="cart-item">
      <div className="product-description">
        <h6 className="cart-heading">{title}</h6>
        <div>combination | </div>
        <div>one time</div>
        <div className="item-quantity">
          <div className="quantity-selector">
            <span
              className="counter-decrement"
              onClick={() => decrementCartItem(id)}
            >
              -
            </span>
            <span className="item-counter">{qty}</span>
            <span
              className="counter-increment"
              onClick={() => incrementCartItem(id)}
            >
              +
            </span>
          </div>
          <div className="quantity-price">
            {returnFormatPrice(currency, qty, price)}
          </div>
        </div>
      </div>
      <div className="cart-product-image-container">
        <img className="cart-item-img" src={imageUrl} alt="Product" />
      </div>
    </div>
  );
};

export default CartItem;
