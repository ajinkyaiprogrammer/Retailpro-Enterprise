import { Box, Button, Container, Typography } from "@mui/material";
// import watchImage from "../../../assets/watchImage.png";

export default function AdvertiseCard() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        background: "linear-gradient(to right, #131B2E, #283044)",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        py: 6,
      }}
    >
      <Container maxWidth="100%" style={{ background: "none" }}>
        {/* container which holds both text and image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "95%",
            margin: "auto",
            // justifyContent: "space-between",
            // responsiveness for desktop and mini ipad
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            background: "none",
            // gap: {
            //   xs: 5,
            //   md: 5,
            // },
          }}
        >
          {/* text content */}
          <Box
            sx={{
              flex: 0.8,
              textAlign: {
                xs: "center",
                md: "left",
              },
              background: "none",
            }}
          >
            <Typography
              sx={{
                color: "#dbe1ff",
                letterSpacing: "3px",
                fontSize: {
                  xs: "10px",
                  md: "12px",
                },
                background: "none",
                mb: 2,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              }}
            >
              EXCLUSIVE COLLECTION
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                lineHeight: 1.1,
                mb: 3,
                background: "none",
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                  md: "40px",
                },
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Precision. Performance.
              <br />
              Elegance.
            </Typography>

            <Typography
              sx={{
                color: "#c7c7c7",
                lineHeight: 1.8,
                mb: 4,
                background: "none",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                maxWidth: "600px",

                mx: {
                  xs: "auto",
                  md: 0,
                },
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Introducing the Enterprise Series: A curated selection of
              high-performance hardware designed for modern retail environments
              that demand both style and substance.
            </Typography>

            {/* buttons in card */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                background: "none",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  // borderRadius: "8px",
                  background: "#2563EB",
                  textTransform: "none",
                  fontSize: "16px",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Explore Collection
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  // borderRadius: "8px",
                  color: "white",
                  borderColor: "#888",
                  textTransform: "none",
                  fontSize: "16px",

                  "&:hover": {
                    borderColor: "white",
                  },
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                View Lookbook
              </Button>
            </Box>
          </Box>

          {/* image card */}
          <Box
            sx={{
              flex: 1.2,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              background: "none",
            }}
          >
            <Box
              component="img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWG_m3XgGmYIHovTHHkDiThPAyC8iMCZXNO3H9u1IZADa9RWKC11B5Q9xCpoXJPDaxWvl4VMBdtD2wj8KWdlvMYgRB1SujURgvzukVscIBUnSUq5SH7T25PVKepr7Qs3CSfitn88mJ_IhRrcPPbnMVTE2bL-C6m5X9N5c2Roew0rlkKoeOo0AqW9dkDF4LIqCpnCtFRte3jfk8xL0E-VcxrbwYzIjaeGjNYEzFQ6fuoEhLLhAdW0Xe865AqllkeybjIAXuDsXaea1W"
              alt="watch"
              sx={{
                width: "100%",

                maxWidth: {
                  xs: "100%",
                  sm: "600px",
                  md: "950px",
                  // lg: "850px",
                },

                height: {
                  xs: "300px",
                  sm: "400px",
                  md: "500px",
                },

                borderRadius: "20px",

                objectFit: "cover",

                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
