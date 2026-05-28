import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/product-page/Products";
import CartPage from "./components/cart-page/CartPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Products />,
    },
    {
      path: "/inventory",
      element: <Products />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ],
  {
    basename: "/Retailpro-Enterprise",
  },
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
