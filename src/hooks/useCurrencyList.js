import { useEffect, useState } from "react";
import { onGetCurrencyFromPangea } from "../graphqlHelper/graphqlHelper";

const useCurrencyList = () => {
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    onGetCurrencyFromPangea(setCurrencyList);
  }, []);

  return currencyList;
};
export default useCurrencyList;
