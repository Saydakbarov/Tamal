import { Box, Typography } from "@mui/material";
import React from "react";
import FormContact from "../Contact/FormContact";

export default function HomeContact({ lang }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ fontSize: "14px", color: "gray" }}>
        Special Ofers For Subscribers
      </Typography>
      <Typography sx={{ fontSize: "24px", color: "black" }}>
        Ten Percent Member Discount
      </Typography>
      <Typography sx={{ fontSize: "14", color: "gray", mt: 2 }}>
        Subscribe to our newsletters now and stay up to date with new
        collections, the latest lookbooks and exclusive offers.
      </Typography>

      <Box
        sx={{ minWidth: "300px", maxWidth: "500px", margin: "0 auto", mt: 3 }}
      >
        <FormContact lang={lang} />
      </Box>
    </Box>
  );
}
