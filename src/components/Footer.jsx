import { Facebook, Google, Twitter, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import TamalLogo from "../tamalLogo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 8, pb: 8 }}>
      <Grid
        container
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        }}
        alignItems={"center"}
        gap={2}
      >
        <Grid item lg={7.5} md={11} sm={11} xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
              src={TamalLogo}
              alt=""
            />
            <Typography sx={{ color: "gray" }}>
              Copyright © 2022 <span style={{ color: "red" }}>Tamal</span>. All
              Rights Reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={8} xs={11}>
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
