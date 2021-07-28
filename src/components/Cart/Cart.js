import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({
  cart,
  incrementCartItem,
  decrementCartItem,
  currencyList,
  setCurrency,
  currency,
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
        currency={currency}
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

  const returnCartSubTotal = (currency) => {
    let subTotal = 0;
    const reducerFn = (accumulator, cartItem) => {
      const curTotal = cartItem.price * cartItem.qty;
      return curTotal + accumulator;
    };
    const caluclatedTotal = cart.reduce(reducerFn, subTotal);
    return `${currency} ${caluclatedTotal}.00`;
  };

  return (
    <div>
      {/*The Modal  */}
      <div id="myModal" className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <div className="modal-cart-top">
            <div className="close-button-container">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div>
              <h5>Your Cart</h5>
            </div>
          </div>

          <div>
            <select
              className="currency-select"
              onChange={handleCurrenyChange}
              name="currency"
              id="currency"
            >
              {currencyList.map(renderSelectOptions)}
            </select>
          </div>
          {cart.length ? (
            <>
              <div className="cart-body">
                <div className="cart-item-list">{cart.map(renderCartItem)}</div>
              </div>
              <div className="cart-footer">
                <div className="cart-footer-subtotal">
                  <span>Subtotal</span>
                  <div className="footer-subtotal-price">
                    {cart.length && returnCartSubTotal(currency)}
                  </div>
                </div>
                <div className="cart-buttons">
                  <button className="button-checkout">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Your Cart contains {cart.length} items</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
