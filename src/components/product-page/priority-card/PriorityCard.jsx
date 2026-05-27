import { Box, Button, Container, MenuItem, Select } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

export default function PriorityCard() {
  const categories = [
    "All Products",
    "Electronics",
    "Home & Living",
    "Apparel",
    "Beauty",
  ];

  return (
    <Box
      sx={{
        position: {
          xs: "static",
          sm: "static",
          md: "sticky",
        },
        top: "64px",
        zIndex: 120,
        width: "100%",
        background: "#f5f5f7",
        border: "1px solid #e5e5e5",
        py: 3,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Container
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "1500px",
          },
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            gap: 3,

            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },

            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* left side buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "nowrap",
              overflowX: "auto",

              width: {
                xs: "100%",
                sm: "100%",
                md: "70%",
              },

              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-start",
              },

              fontFamily: "Manrope, sans-serif",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "contained" : "outlined"}
                sx={{
                  textTransform: "none",
                  borderRadius: "14px",
                  fontWeight: 500,
                  fontSize: "12px",
                  padding: "5px 20px",

                  whiteSpace: "nowrap",
                  flexShrink: 0,

                  backgroundColor: index === 0 ? "#004AC6" : "#fff",

                  color: index === 0 ? "#fff" : "#131B2E",

                  borderColor: "#d8d8e5",

                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: index === 0 ? "#3d10c7" : "#f2f2f2",

                    borderColor: "#d8d8e5",
                    boxShadow: "none",
                  },

                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* sort and filter */}
          <Box
            sx={{
              display: "flex",
              gap: 2,

              width: {
                xs: "100%",
                sm: "100%",
                md: "auto",
              },

              flexDirection: {
                xs: "row",
                sm: "row",
                md: "row",
              },

              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-end",
              },
            }}
          >
            <Select
              defaultValue="Featured"
              sx={{
                width: {
                  xs: "48%",
                  sm: "220px",
                  md: "149.97px",
                },

                height: "36px",
                fontSize: "12px",
                backgroundColor: "#fff",
                fontWeight: 600,

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d8d8e5",
                },

                fontFamily: "Inter, sans-serif",
              }}
            >
              <MenuItem value="Featured">Sort: Featured</MenuItem>

              <MenuItem value="Newest">Sort: Newest</MenuItem>

              <MenuItem value="Price Low to High">
                Sort: Price Low to High
              </MenuItem>
            </Select>

            <Button
              variant="outlined"
              startIcon={<TuneIcon />}
              sx={{
                width: {
                  xs: "48%",
                  sm: "180px",
                  md: "149.97px",
                },

                height: "36px",
                fontSize: "12px",
                textTransform: "none",
                fontWeight: 600,
                color: "#333",
                borderColor: "#d8d8e5",
                backgroundColor: "#fff",

                "&:hover": {
                  backgroundColor: "#f2f2f2",
                  borderColor: "#d8d8e5",
                },
              }}
            >
              Filters
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
