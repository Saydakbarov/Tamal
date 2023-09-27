import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import content from "../../Locolization/content";

import ContactMainImg from "../../images/PageMain/contat.jpg";

export default function ContactMain({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ContactMainImg})`,
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: { xs: "none", sm: "none", md: "100%" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {content[lang].contact.title}
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
          <Link to="/contact" style={{ color: "red", textDecoration: "none" }}>
            {content[lang].contact.title}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
