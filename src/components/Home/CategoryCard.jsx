import { Box, Typography } from "@mui/material";
import React from "react";

export default function CategoryCard({ img, title, text }) {
  return (
    <Box
      sx={{
        backgroundImage: `url('${img}')`,
        width: "100%",
        height: "300px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography sx={{}}>{title}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
}
