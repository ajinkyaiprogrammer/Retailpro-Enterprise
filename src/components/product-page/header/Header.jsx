import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const buttonStyles = {
    minWidth: "auto",
    px: { xs: 0.5, md: 1.5 },
    fontSize: {
      xs: "8px",
      sm: "10px",
      md: "12px",
    },
    fontWeight: 600,
    textTransform: "none",
    borderRadius: 0,
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#f7f4fa",
        color: "#2d2d2d",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* left section titles and buttons*/}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#004AC6",
            }}
          >
            RetailPro Enterprise
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <NavLink to="/inventory">
              <Button
                sx={{
                  ...buttonStyles,
                }}
              >
                Dashboard
              </Button>
            </NavLink>

            <NavLink to="/inventory">
              {({ isActive }) => (
                <Button
                  sx={{
                    ...buttonStyles,
                    color: isActive ? "#004AC6" : "#4a4a4a",
                    borderBottom: isActive ? "2px solid #004AC6" : "none",
                  }}
                >
                  Inventory
                </Button>
              )}
            </NavLink>

            <NavLink to="/cart">
              {({ isActive }) => (
                <Button
                  sx={{
                    ...buttonStyles,
                    color: isActive ? "#004AC6" : "#4a4a4a",
                    borderBottom: isActive ? "2px solid #004AC6" : "none",
                  }}
                >
                  Cart
                </Button>
              )}
            </NavLink>

            <NavLink to="/inventory">
              <Button
                sx={{
                  ...buttonStyles,
                }}
              >
                Analytics
              </Button>
            </NavLink>
          </Box>
        </Box>

        {/* right section user profile, cartIcon */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <NavLink to="/cart">
            {({ isActive }) => (
              <IconButton>
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartOutlinedIcon
                    sx={{
                      color: isActive ? "#004AC6" : "inherit",
                    }}
                  />
                </Badge>
              </IconButton>
            )}
          </NavLink>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineOutlinedIcon />
          </IconButton>
          <Avatar src="https://i.pravatar.cc/121" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
