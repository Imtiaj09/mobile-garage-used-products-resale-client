import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mobile-garage-server-pi.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div className="mt-10">
      <h4 className="text-center text-3xl font-semibold">Product Category</h4>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
