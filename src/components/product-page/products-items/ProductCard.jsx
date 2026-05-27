import { useEffect } from "react";

import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
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
    return (
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#009bc6",
          marginTop: "50px",
          marginBottom: "50xp",
        }}
      >
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#c55952",
          marginTop: "50px",
          marginBottom: "50xp",
        }}
      >
        Error: {error}
      </Typography>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1400px",
        margin: "auto",
        mt: 5,
      }}
    >
      <Grid
        container
        mx="auto"
        spacing={{
          xs: 2,
          sm: 2,
          md: 3,
        }}
        justifyContent="center"
      >
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <Grid
              item
              // xs={12}
              // sm={6}
              // md={4}
              key={product.id}
              display="flex"
              justifyContent="center"
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: "320px",
                  minWidth: "280px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "transparent",
                  // border: "1px solid #131B2E",
                  // border: "1px solid #131B2E",
                  boxShadow: "0px 4px 10px rgba(19, 27, 46, 0.2)",
                  padding: 1,
                  // boxShadow: "none",
                  // gap: 2,
                }}
              >
                {/* image container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1/.9",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover img": {
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* heart icon */}
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      padding: 0,
                      // "&:hover": {
                      //   bgcolor: "red",
                      //   opacity: [0.9, 0.8, 0.7],
                      //   color: "red",
                      // },
                      // backgroundColor: "#fff",
                      // width: "36px",
                      // height: "36px",
                      // boxShadow: 2,
                    }}
                  >
                    <FavoriteIcon
                      sx={{
                        color: "#4f1fff",
                        fontSize: "1.2rem",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                </Box>

                {/* content container */}
                <CardContent
                  sx={{
                    px: 0,
                    pt: 1,
                    pb: "0 !important",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4f1fff",
                      fontSize: "13px",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {product.category}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      mb: 1,
                      color: "#434655",
                    }}
                  >
                    ${product.price}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "14px", lg: "18px" },
                      fontWeight: 600,
                      color: "#0f172a",
                      mb: 0.5,
                      lineHeight: 1.2,
                      minHeight: "40px",
                      wordBreak: "break-word",
                      display: "-webkit-box",
                      WebkitLineClamp: 2, //added this for the if title is bigger than two line then hide it using ....
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* button container */}
                  <Box sx={{ mt: "auto", pt: 1 }}>
                    {quantity === 0 ? (
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<ShoppingBagOutlinedIcon />}
                        onClick={() => dispatch(addToCart(product))}
                        sx={{
                          backgroundColor: "#111827",
                          borderRadius: "12px",
                          // py: 1,
                          textTransform: "none",
                          fontWeight: 600,
                          height: "42px",
                          // mb: 3,
                          "&:hover": {
                            backgroundColor: "#1f2937",
                          },
                        }}
                      >
                        Add to Cart
                      </Button>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          border: "1px solid #d4d4d8",
                          borderRadius: "12px",
                          px: 2,
                          height: "42px",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => dispatch(decrementItems(product.id))}
                          sx={{ color: "#111827" }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <Typography
                          fontSize="14px"
                          fontWeight={700}
                          sx={{ color: "#0f172a" }}
                        >
                          {quantity} in Cart
                        </Typography>

                        <IconButton
                          size="small"
                          onClick={() => dispatch(incrementItems(product.id))}
                          sx={{ color: "#4f1fff" }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProductCard;
