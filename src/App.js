import React from "react";
import ProductList from "./components/Product/ProductList";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import Cart from "./components/Cart/Cart";
import useCartState from "./hooks/useCartState";
import useCurrencyList from "./hooks/useCurrencyList";
import useProductsList from "./hooks/useProductsList";
import "./App.css";
const App = () => {
  const { products, setCurrency, currency } = useProductsList();
  const currencyList = useCurrencyList();
  const { addItemToCart, cart, incrementCartItem, decrementCartItem } =
    useCartState(products, currency);
  return (
    <div>
      <Cart
        cart={cart}
        currencyList={currencyList}
        incrementCartItem={incrementCartItem}
        decrementCartItem={decrementCartItem}
        setCurrency={setCurrency}
      />
      <NavBar />
      <Header />

      <ProductList
        addItemToCart={addItemToCart}
        products={products}
        currency={currency}
      />
    </div>
  );
};

export default App;
