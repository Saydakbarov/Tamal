import { Box, Typography } from "@mui/material";
import React from "react";

export default function HomeContact() {
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
        sx={{
          border: "1px solid #ced4da",
          width: { xs: "300px", sm: "300px", md: "500px", lg: "600px" },
          p: 2,
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          mt: 5,
          flexWrap: "wrap",
        }}
      >
        <input
          style={{ border: "none", outline: "none", width: "60%" }}
          type="text"
          placeholder="Enter Your Email Address here...."
        />
        <button
          style={{
            border: "none",
            fontSize: "18px",
            background: "none",
            borderLeft: "1px solid #ced4da",
            paddingLeft: "10px",
          }}
        >
          Subscribe
        </button>
      </Box>
    </Box>
  );
}
