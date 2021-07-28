import axios from "axios";

const axiosPanageaGraphQl = axios.create({
  baseURL: "https://pangaea-interviews.vercel.app/api/graphql",
});

const getProductsQuery = (currency) => {
  return {
    query: `query($currency: Currency){
          products {
              id
              title
              image_url
              price(currency: $currency)
          }
      }`,
    variables: { currency },
  };
};

const getCurrencyQuery = {
  query: `query {
    currency
  }`,
};

export const onGetCurrencyFromPangea = async (callback) => {
  const result = await axiosPanageaGraphQl.post("", getCurrencyQuery);
  const {
    data: {
      data: { currency },
    },
  } = result;
  callback(currency);
};

export const onGetProductsFromPangea = async (callback, currency) => {
  const result = await axiosPanageaGraphQl.post("", getProductsQuery(currency));
  const {
    data: { data: grapqlData },
  } = result;

  if (grapqlData) {
    const { products } = grapqlData;
    callback(products);
  } else {
    console.log("No data returned!!!");
  }
};
