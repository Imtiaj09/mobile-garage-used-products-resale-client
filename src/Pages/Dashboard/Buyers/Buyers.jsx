import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Buyers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://mobile-garage-server-pi.vercel.app/users?person=buyers"
      );
      const buyers = await res.json();
      return buyers;
    },
  });

  // const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete the user ${user.name}.`
    );
    if (agree) {
      fetch(`https://mobile-garage-server-pi.vercel.app/users/${user._id}`, {
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
      <h2 className="text-3xl font-semibold mb-4">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
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

export default Buyers;
