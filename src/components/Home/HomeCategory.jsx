import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function HomeCategory() {
  return (
    <Box>
      <Grid container justifyContent={"center"} gap={3} sx={{ mt: 8 }}>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img1-top-eposi1.webp')",
              width: "100%",
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Storage</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img2-top-eposi2.webp')",
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Decor Vases</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img5-top-eposi2.webp')",
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              mt: 3,
              p: 2,
              borderRadius: "3px",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Accessories</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img2-top-eposi1.webp')",
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              borderRadius: "3px",

              p: 2,
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Lighting</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img4-top-eposi1.webp')",
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              mt: 3,
              p: 2,
              borderRadius: "3px",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Living Room</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage:
                "url('https://htmldemo.net/eposi/eposi/assets/img/category/img3-top-eposi1.webp')",
              width: "100%",
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Decoration</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
