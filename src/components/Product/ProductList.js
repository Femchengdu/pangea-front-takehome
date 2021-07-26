import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.css";
import { onGetProductsFromPangea } from "../../graphqlHelper/graphqlHelper";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const dataCallback = (results) => {
      if (results.length) {
        setProducts(results);
      }
    };
    onGetProductsFromPangea(dataCallback);
  }, []);
  const renderProduct = (productData) => {
    const { id, price, image_url: imageUrl, title } = productData;
    return <Product key={id} price={price} imageUrl={imageUrl} title={title} />;
  };

  return (
    <div className="grid-container">
      <div className="grid">
        {products.length && products.map(renderProduct)}
      </div>
    </div>
  );
};

export default ProductList;
