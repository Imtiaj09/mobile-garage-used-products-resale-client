import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Sellers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?person=seller");
      const sellers = await res.json();
      return sellers;
    },
  });

  const handleVerify = (email) => {
    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Seller Successfully Verified",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete the user ${user.name}.`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "User deleted successfully",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify Seller</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.verify !== true && (
                    <button
                      onClick={() => handleVerify(user.email)}
                      className="btn btn-xs btn-primary"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-xs btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sellers;
