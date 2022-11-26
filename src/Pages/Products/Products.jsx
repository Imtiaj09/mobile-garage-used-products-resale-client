import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const productsCategory = useLoaderData();
  console.log(productsCategory);
  return (
    <div>
      <h2>hi</h2>
    </div>
  );
};

export default Products;
