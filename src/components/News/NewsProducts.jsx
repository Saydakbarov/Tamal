import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import content from "../../Locolization/content";
import NewsProductCard from "./NewsProductCard";

export default function NewsProducts({ lang }) {
  return (
    <Box
      sx={{
        p: 2,
        background: "white",
        width: "95%",
        margin: "0 auto",
      }}
    >
      <Typography sx={{ fontSize: "40px", textAlign: "center", mt: 4 }}>
        {content[lang].news.title}
      </Typography>
      <NewsProductCard lang={lang} />
    </Box>
  );
}
