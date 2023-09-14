import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import CategoryMain from "../components/Category/CategoryMain";
import CategoryProduct from "../components/Category/CategoryProduct";

export default function Category({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <CategoryMain lang={lang} />
      <CategoryProduct lang={lang} />
      <Footer />
    </Box>
  );
}
