import { useEffect } from "react";
import "./ProductCard.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../../features/products-slice/ProductsSlice";

import {
  addToCart,
  incrementItems,
  decrementItems,
} from "../../../features/cart-slice/CartSlice";

function ProductCard() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);

          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div className="product-card" key={product.id}>
              {/* image container */}
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />

                {/* favorite icon */}
                <button className="favorite-btn">
                  <FavoriteBorderIcon className="favorite-icon" />
                </button>
              </div>

              {/* content */}
              <div className="card-content">
                <p className="category">{product.category}</p>

                <h3 className="price">${product.price}</h3>

                <h2 className="title">{product.title}</h2>

                {/* button section */}
                <div className="button-wrapper">
                  {quantity === 0 ? (
                    <button
                      className="add-cart-btn"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      <ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="quantity-box">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(decrementItems(product.id))}
                      >
                        <RemoveIcon fontSize="small" />
                      </button>

                      <span className="quantity-text">{quantity} in Cart</span>

                      <button
                        className="qty-btn"
                        onClick={() => dispatch(incrementItems(product.id))}
                      >
                        <AddIcon fontSize="small" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
