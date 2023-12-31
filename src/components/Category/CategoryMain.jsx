import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import content from "../../Locolization/content";

import CategoryMainImg from "../../images/PageMain/product.jpg";

export default function CategoryMain({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${CategoryMainImg})`,
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {content[lang].category.title}
        </Typography>
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
            {content[lang].home.title}
          </Link>
          <KeyboardArrowRight />
          <Link to="/product" style={{ color: "red", textDecoration: "none" }}>
            {content[lang].category.title}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
