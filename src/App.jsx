import "./App.css";
import { useSelector } from "react-redux";
import CartPage from "./components/cart-page/CartPage";
import Products from "./components/product-page/Products";

function App() {
  const currentView = useSelector((state) => state.navigation.currentView);

  return <>{currentView === "Cart" ? <CartPage /> : <Products />}</>;
}

export default App;
