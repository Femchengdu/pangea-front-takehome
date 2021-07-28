import React from "react";

const CartItem = ({ cartItem, decrementCartItem, incrementCartItem }) => {
  const { title, qty, price, id } = cartItem;
  return (
    <div>
      <p>A cart with title : {title}</p>
      <p>Quantity : {qty}</p>
      <p>Total price : {qty * price}</p>
      <span onClick={() => decrementCartItem(id)}>-</span>
      <span onClick={() => incrementCartItem(id)}>+</span>
    </div>
  );
};

export default CartItem;
