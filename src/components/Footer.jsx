import { Facebook, Google, Twitter, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ mt: 8, pb: 8 }}>
      <Grid
        container
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
        }}
        gap={2}
      >
        <Grid item lg={5.5}>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "90px",
                cursor: "pointer",
              }}
              src="https://htmldemo.net/eposi/eposi/assets/img/logo.webp"
              alt=""
            />
            <Typography sx={{ color: "gray" }}>
              Copyright © 2022 <span style={{ color: "red" }}>Eposi</span>. All
              Rights Reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={5.5}>
          <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
            <Facebook sx={{ color: "gray" }} />
            <Twitter sx={{ color: "gray" }} />
            <Google sx={{ color: "gray" }} />
            <YouTube sx={{ color: "gray" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
