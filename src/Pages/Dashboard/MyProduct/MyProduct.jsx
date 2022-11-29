import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000//products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        My Product: {product.length}
      </h2>
    </div>
  );
};

export default MyProduct;
