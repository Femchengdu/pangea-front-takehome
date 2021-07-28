import { useState, useEffect } from "react";
import { onGetProductsFromPangea } from "../graphqlHelper/graphqlHelper";
import usePreviousCurrency from "./usePreviousCurrrency";

const useProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState("USD");
  useEffect(() => {
    const dataCallback = (results) => {
      if (results.length) {
        setProducts(results);
      }
    };

    onGetProductsFromPangea(dataCallback, currency);
  }, []);
  const perviousCurrency = usePreviousCurrency(currency);
  useEffect(() => {
    if (perviousCurrency && perviousCurrency !== currency) {
      const dataCallback = (results) => {
        if (results.length) {
          setProducts(results);
        }
      };

      onGetProductsFromPangea(dataCallback, currency);
    }
  }, [currency]);

  return {
    setCurrency,
    products,
    currency,
  };
};

export default useProductsList;
