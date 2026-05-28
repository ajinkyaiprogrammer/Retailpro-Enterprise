import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import "./Orders.css";
import { useSelector } from "react-redux";
// import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Orders() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );
  return (
    <div className="order-wrapper">
      <div className="order-heading">
        <p>Order Summary</p>
      </div>

      <hr />

      <div className="order-details">
        <div className="order-row">
          <p>Subtotal</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>

        <div className="order-row discount-row">
          <p>Enterprise Discount (5%)</p>
          <p>-${(totalAmount * 0.05).toFixed(2)}</p>
        </div>

        <div className="order-row">
          <p>Shipping & Handling</p>
          <p className="free-text">FREE</p>
        </div>

        <div className="order-row">
          <p>Estimated Tax</p>
          <p>${(totalAmount * 0.06).toFixed(2)}</p>
        </div>
      </div>

      <hr />

      <div className="total-order">
        <p>Total</p>
        <p>
          ${(totalAmount - totalAmount * 0.05 + totalAmount * 0.06).toFixed(2)}
        </p>
      </div>

      <div className="buttons">
        <button className="checkout-btn">
          Checkout Now
          <ShoppingBagIcon fontSize="small" className="checkout-btn-svg" />
        </button>

        <button className="quote-btn">Request Quote for Approval</button>
      </div>
      <div className="payment-icons">
        <CreditCardIcon />
        <AccountBalanceIcon />
        <PaymentsIcon />
      </div>
    </div>
  );
}
