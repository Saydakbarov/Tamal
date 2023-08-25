import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AboutPageProductData } from "../../data";

export default function AboutProduct() {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container justifyContent={"center"} gap={5}>
        {AboutPageProductData.map((v, i) => (
          <Grid key={i} item lg={3}>
            <Box sx={{ width: "100%", minHeight: "300px" }}>
              <img style={{ width: "100%" }} src={v.img} alt="" />
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {v.title}
              </Typography>
              <Typography sx={{ mt: 2, color: "gray" }}>{v.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
