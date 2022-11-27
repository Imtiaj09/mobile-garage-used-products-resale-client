import React from "react";
import { useQuery } from "@tanstack/react-query";

const Sellers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const sellers = await res.json();
      const data = sellers.filter((seller) => seller.role === "seller");
      return data;
    },
  });
  console.log(users);
  return (
    <div>
      <h2 className="text-3xl">Seller</h2>
    </div>
  );
};

export default Sellers;
