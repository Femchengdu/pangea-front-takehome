import { useEffect, useRef } from "react";

const usePreviousCurrency = (currency) => {
  const currencyRef = useRef();

  useEffect(() => {
    currencyRef.current = currency;
  });
  return currencyRef.current;
};

export default usePreviousCurrency;
