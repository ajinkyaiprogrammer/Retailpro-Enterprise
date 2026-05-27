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
import { useSelector, useDispatch } from "react-redux";
import { setView } from "../../../features/navigation/NavigationSlice"; // Import your new action

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function Header() {
  const dispatch = useDispatch();

  // 1. read current active view and cart items from Redux
  const currentView = useSelector((state) => state.navigation.currentView);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // styles for active and inactive buttons
  const getButtonStyles = (viewName) => {
    const isActive = currentView === viewName;
    return {
      minWidth: "auto",
      px: { xs: 0.5, md: 1.5 },
      fontSize: { xs: "8px", sm: "10px", md: "12px" },
      color: isActive ? "#004AC6" : "#4a4a4a",
      fontWeight: isActive ? 700 : 600,
      textTransform: "none",
      borderBottom: isActive ? "2px solid #004ac6" : "none",
      borderRadius: 0,
    };
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        backgroundColor: "#f7f4fa",
        color: "#2d2d2d",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: { xs: "60px", md: "70px" },
          px: { xs: 1.5, sm: 2, md: 4 },
          gap: 2,
        }}
      >
        {/* left logo and items */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, md: 4 },
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#004AC6",
              fontSize: { xs: "14px", sm: "18px", md: "24px" },
              fontFamily: "Manrope, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            RetailPro Enterprise
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.3, sm: 1, md: 2 },
              flexWrap: "wrap",
            }}
          >
            <Button
              onClick={() => dispatch(setView("Dashboard"))}
              sx={getButtonStyles("Dashboard")}
            >
              Dashboard
            </Button>

            <Button
              onClick={() => dispatch(setView("Inventory"))}
              sx={getButtonStyles("Inventory")}
            >
              Inventory
            </Button>

            {/* click on order button shows cart page */}
            <Button
              onClick={() => dispatch(setView("Cart"))}
              sx={getButtonStyles("Cart")}
            >
              Orders
            </Button>

            <Button
              onClick={() => dispatch(setView("Analytics"))}
              sx={getButtonStyles("Analytics")}
            >
              Analytics
            </Button>
          </Box>
        </Box>

        {/* user side button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.2, sm: 0.5, md: 1.5 },
            flexShrink: 0,
          }}
        >
          {/* click on cartIcon button shows cart page */}
          <IconButton
            onClick={() => dispatch(setView("Cart"))}
            sx={{ p: { xs: 0.5, md: 1 } }}
          >
            <Badge badgeContent={totalItems} color="error" max={99}>
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  color: currentView === "Cart" ? "#004AC6" : "inherit",
                }}
              />
            </Badge>
          </IconButton>

          <IconButton sx={{ p: { xs: 0.5, md: 1 } }}>
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: { xs: 18, md: 24 } }}
            />
          </IconButton>

          <IconButton sx={{ p: { xs: 0.5, md: 1 } }}>
            <HelpOutlineOutlinedIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
          </IconButton>

          <Avatar
            alt="Profile"
            src="https://i.pravatar.cc/121"
            sx={{
              width: { xs: 28, sm: 34, md: 42 },
              height: { xs: 28, sm: 34, md: 42 },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
