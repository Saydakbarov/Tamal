import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NewsMain() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://htmldemo.net/eposi/eposi/assets/img/backgrounds/category-image-1820x400.webp')",
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>Information</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
            Home
          </Link>
          <KeyboardArrowRight />
          <Link to="/news" style={{ color: "red", textDecoration: "none" }}>
            News
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
