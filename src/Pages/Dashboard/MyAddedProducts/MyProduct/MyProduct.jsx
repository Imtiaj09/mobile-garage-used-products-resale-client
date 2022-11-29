import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import MyProductCard from "../MyProductCard/MyProductCard";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        My Product: {products.length}
      </h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <MyProductCard key={product.key} product={product}></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
