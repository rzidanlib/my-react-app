import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404";
import ProductsPage from "./Pages/products";
import ProfilePage from "./Pages/profile";
import DetailProductPage from "./Pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar";
import DarkModeContextProvider from "./context/DarkMode";

const router = createBrowserRouter([
  { path: "/", element: <div>Hello World!</div>, errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/product/:id", element: <DetailProductPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Navbar /> */}
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
