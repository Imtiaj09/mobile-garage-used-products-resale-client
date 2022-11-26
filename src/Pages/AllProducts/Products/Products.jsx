import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";
import BookingModal from "../BookingModal/BookingModal";

const Products = () => {
  const productsCategory = useLoaderData();
  const [buyProduct, setBuyProduct] = useState(null);

  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold">
        This section has {productsCategory.length} products
      </h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productsCategory.map((product) => (
          <ProductDetailsCard
            key={product._id}
            product={product}
            setBuyProduct={setBuyProduct}
          ></ProductDetailsCard>
        ))}
      </div>
      {buyProduct && (
        <BookingModal buyProduct={buyProduct} setBuyProduct={setBuyProduct} />
      )}
    </section>
  );
};

export default Products;
