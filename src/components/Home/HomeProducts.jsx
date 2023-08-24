import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { HomeProductsData } from "../../data";

const ProductCategory = [
  {
    title: "Decoration",
  },
  {
    title: "Lighting",
  },
  {
    title: "Storage",
  },
  {
    title: "Living Room",
  },
];

export default function HomeProducts() {
  const [productTitle, setProductTitle] = useState("Decoration");

  const data = HomeProductsData.find((f) => f.nome === productTitle)?.data;

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
          Our Products
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          mt: 6,
          pb: 7,
          flexWrap: "wrap",
        }}
      >
        {ProductCategory.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.title}
            onClick={(e) => setProductTitle(e.target.value)}
            sx={{ background: v.title === productTitle ? "black" : "gray" }}
          >
            {v.title}
          </Button>
        ))}
      </Box>
      <ProductsCard data={data} />
    </Box>
  );
}
