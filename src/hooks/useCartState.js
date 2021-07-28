import { useState, useEffect } from "react";

const useCartState = (products, currency) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getIDsForCartItems = () => {
      let cartIDs = [];
      if (cart.length) {
        cart.forEach((cartItem) => cartIDs.push(cartItem.id));
      }
      return cartIDs;
    };
    const cartIDs = getIDsForCartItems();
    // Update the price for each item in the cart with the new ids
    const updateCart = [...cart];
    cartIDs.forEach((id) => {
      const newProduct = products.find((product) => product.id === id);
      const oldProduct = updateCart.find((cartItem) => cartItem.id === id);
      oldProduct.price = newProduct.price;
    });
    // update the cart
    setCart(updateCart);
  }, [currency, products]);

  const addItemToCart = (item) => {
    // Check to see if item is already in the list
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].qty += 1;
      setCart(newCart);
    } else {
      item.qty = 1;
      const oldCart = [...cart];
      oldCart.push(item);
      setCart(oldCart);
    }
  };

  const decrementCartItem = (id) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    const updatedCart = [...cart];
    const cartItem = updatedCart[itemIndex];
    const currentQty = cartItem.qty;
    if (currentQty > 1) {
      cartItem.qty -= 1;
      setCart(updatedCart);
    } else if (currentQty === 1) {
      const filteredCart = updatedCart.filter((cartItem) => cartItem.id !== id);
      setCart(filteredCart);
    }
  };

  const incrementCartItem = (id) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    const updatedCart = [...cart];
    const cartItem = updatedCart[itemIndex];
    cartItem.qty += 1;
    setCart(updatedCart);
  };

  return { addItemToCart, cart, incrementCartItem, decrementCartItem };
};

export default useCartState;
