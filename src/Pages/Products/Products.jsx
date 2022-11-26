import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const Products = () => {
  const productsCategory = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        This section has {productsCategory.length} products
      </h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productsCategory.map((product) => (
          <ProductDetailsCard
            key={product._id}
            product={product}
          ></ProductDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
