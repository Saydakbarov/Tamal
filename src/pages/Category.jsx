import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import CategoryMain from "../components/Category/CategoryMain";
import CategoryProduct from "../components/Category/CategoryProduct";

export default function Category() {
  return (
    <Box>
      <HeaderMenu />
      <CategoryMain />
      <CategoryProduct />
      <Footer />
    </Box>
  );
}
