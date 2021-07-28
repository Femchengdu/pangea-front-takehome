import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({
  cart,
  incrementCartItem,
  decrementCartItem,
  currencyList,
  setCurrency,
}) => {
  const closeModal = () => {
    // Get the modal
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const renderCartItem = (cartItem) => {
    const { id } = cartItem;
    return (
      <CartItem
        key={id}
        cartItem={cartItem}
        incrementCartItem={incrementCartItem}
        decrementCartItem={decrementCartItem}
      />
    );
  };

  const renderSelectOptions = (option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  };

  const handleCurrenyChange = (event) => {
    const {
      target: { value: selecetedCurrency },
    } = event;
    setCurrency(selecetedCurrency);
  };

  const returnCartSubTotal = () => {
    let subTotal = 0;
    const reducerFn = (accumulator, cartItem) => {
      const curTotal = cartItem.price * cartItem.qty;
      return curTotal + accumulator;
    };
    return cart.reduce(reducerFn, subTotal);
  };

  return (
    <div>
      {/*The Modal  */}
      <div id="myModal" className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div>
            Currency Select
            <select
              onChange={handleCurrenyChange}
              name="currency"
              id="currency"
            >
              {currencyList.map(renderSelectOptions)}
            </select>
          </div>
          {cart.length ? (
            cart.map(renderCartItem)
          ) : (
            <p>Your Cart contains {cart.length} items</p>
          )}

          <div>{cart.length && returnCartSubTotal()}</div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
