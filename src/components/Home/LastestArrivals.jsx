import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ProductsCard from "./ProductsCard";
import { HomeProductsData, LastestArrivalsData } from "../../data";

export default function LastestArrivals() {
  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ textAlign: "center", pb: 4 }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
          Latest Arrivals
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>
      </Box>

      <ProductsCard data={LastestArrivalsData} />

      <Grid container justifyContent={"center"} gap={5} mt={7}>
        <Grid item lg={5.4} md={5.4} sm={8} xs={10}>
          <Box
            sx={{
              width: "100%",
              p: 4,
              borderRadius: "6px",
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/banners/img1-middle-eposi2.webp')",
              position: "relative",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              backgroundPosition: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "14px", sm: "16px" } }}
            >
              Black Friday
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
              }}
            >
              Save Up To <br /> 50% Off
            </Typography>
            <a
              href=""
              style={{
                color: "black",
                fontSize: "20px",
                position: "absolute",
                top: "85%",
              }}
            >
              Shop Now
            </a>
          </Box>
        </Grid>
        <Grid item lg={5.4} md={5.4} sm={8} xs={10}>
          <Box
            sx={{
              width: "100%",
              p: 4,
              borderRadius: "6px",
              maxHeight: "300px",
              minHeight: "300px",
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/banners/img1-middle-eposi2.webp')",
              position: "relative",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "14px", sm: "16px" } }}
            >
              Best Selling
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
              }}
            >
              Living Room <br /> Up To 50% Off
            </Typography>
            <a
              href=""
              style={{
                color: "black",
                fontSize: "20px",
                position: "absolute",
                top: "85%",
              }}
            >
              Shop Now
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
