import axios from "axios";

const axiosPanageaGraphQl = axios.create({
  baseURL: "https://pangaea-interviews.vercel.app/api/graphql",
});

const getProductsQuery = {
  query: `query($currency: Currency){
        products {
            id
            title
            image_url
            price(currency: $currency)
        }
    }`,
  variables: { currency: "USD" },
};

export const onGetProductsFromPangea = async (callback) => {
  const result = await axiosPanageaGraphQl.post("", getProductsQuery);
  const {
    data: {
      data: { products },
    },
  } = result;
  callback(products);

  //.catch((error) => console.log("pan graphql error ", error));
};
