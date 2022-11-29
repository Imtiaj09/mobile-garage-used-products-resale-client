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
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import SellerRoute from "../SellerRoute/SellerRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
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
        path: "/blogs",
        element: <Blogs />,
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
    errorElement: <DisplayError />,
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
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRoute>
            <Sellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers />,
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/dashboard/wishlist",
        element: <MyWishlist />,
      },
    ],
  },
]);

export default router;
