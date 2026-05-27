// import React from 'react'
import "./CartItems.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Orders from "../orders/Orders";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementItems,
  decrementItems,
  removeItems,
} from "../../../features/cart-slice/CartSlice";

function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return (
    <div className="main-wrapper">
      {/* left side cart */}
      <div className="cart-products">
        <div className="cart-header">
          <p className="heading">Your Shopping Cart</p>
          <p className="items-count">
            {totalCount} {totalCount === 1 ? "Item" : "Items"} Selected
          </p>
        </div>

        {/* use condition for empty cart */}
        {cartItems.length === 0 ? (
          <p
            className="empty-message"
            style={{ padding: "24px 0", color: "#64748b" }}
          >
            Your shopping cart is empty.
          </p>
        ) : (
          cartItems.map((product) => {
            return (
              <div className="cart-product-card" key={product.id}>
                <div className="product-details-wrapper">
                  <div className="image-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>

                  <div className="product-content">
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>

                      <div className="product-badge-row">
                        <span className="sku-badge">SKU : PT-99210</span>
                        <span className="stock-status">● In Stock</span>
                      </div>
                    </div>

                    <div className="quantity-controller">
                      <RemoveIcon
                        onClick={() => dispatch(decrementItems(product.id))}
                        style={{ cursor: "pointer" }}
                      />

                      <p>{product.quantity}</p>
                      <AddIcon
                        onClick={() => dispatch(incrementItems(product.id))}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="product-price-section">
                  <DeleteIcon
                    className="delete-icon"
                    onClick={() => dispatch(removeItems(product.id))}
                    style={{ cursor: "pointer" }}
                  />

                  <h2 className="product-price">
                    ${(product.price * product.quantity).toFixed(2)}
                  </h2>
                </div>
              </div>
            );
          })
        )}

        <div className="continue-shopping">
          <ArrowBackIcon />
          <p>Continue Shopping</p>
        </div>
      </div>

      {/* right side orders section */}
      <div className="billing-section">
        <Orders />
      </div>
    </div>
  );
}

export default CartItems;
