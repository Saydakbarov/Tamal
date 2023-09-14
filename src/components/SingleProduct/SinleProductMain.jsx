import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import content from "../../Locolization/content";

export default function SingleMain({ lang }) {
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
        <Typography sx={{ fontSize: "30px" }}>Single Product</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          {/* <Link>{content[lang].home.title}</Link> */}
          <KeyboardArrowRight />
          {/* <Link style={{ color: "red", textDecoration: "none" }}>
            SIngle Product
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
}
