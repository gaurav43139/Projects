import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/Error";
import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantPage from "./src/components/RestaurantPage";
import Cart from "./src/components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantPage /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
