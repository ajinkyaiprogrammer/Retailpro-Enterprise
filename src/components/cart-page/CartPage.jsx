// import React from 'react'
import Footer from "../product-page/footer/Footer";
import Header from "../product-page/header/Header";
import CartItems from "./cart-items/CartItems";
import "./CartPage.css";

export default function CartPage() {
  return (
    <div className="cart-wrapper-main">
      <Header />
      <CartItems />
      <Footer />
    </div>
  );
}
