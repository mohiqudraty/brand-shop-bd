import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Products from "../Pages/Product/Products";
import PrivetRoute from "./PrivetRoute";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductDetails from "../Pages/Product/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";
import Payment from "../Pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct></UpdateProduct>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-bd-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-bd-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/mycart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
      },
      {
        path: "/:brandName",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-bd-server.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/payment",
        element: (
          <PrivetRoute>
            <Payment></Payment>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
