import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function NewsProducts() {
  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Typography sx={{ fontSize: "40px", textAlign: "center" }}>
        Information
      </Typography>
      <Grid container justifyContent={"center"} gap={8}></Grid>
    </Container>
  );
}
