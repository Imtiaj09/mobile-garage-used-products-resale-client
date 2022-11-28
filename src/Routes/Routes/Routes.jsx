import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn";
import Products from "../../Pages/AllProducts/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Products />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: <AddAProduct />,
      },
      {
        path: "/dashboard/sellers",
        element: <Sellers />,
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers />,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct />,
      },
      {
        path: "/dashboard/wishlist",
        element: <MyWishlist />,
      },
    ],
  },
]);

export default router;
