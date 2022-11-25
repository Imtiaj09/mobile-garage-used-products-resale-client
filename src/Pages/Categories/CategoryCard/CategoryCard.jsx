import React from "react";

const CategoryCard = ({ category }) => {
  const { img, category_name } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category_name}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">View Product</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
