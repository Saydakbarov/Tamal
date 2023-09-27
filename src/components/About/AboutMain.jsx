import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import content from "../../Locolization/content";

import AboutMainImg from "../../images/PageMain/about.jpg";

export default function AboutMain({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${AboutMainImg})`,
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundSize: { xs: "none", sm: "none", md: "100%" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {content[lang].about_us.title}
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
          <Link to="/about" style={{ color: "red", textDecoration: "none" }}>
            {content[lang].about_us.title}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
