import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import CategoryMain from "../components/Category/CategoryMain";
import CategoryProduct from "../components/Category/CategoryProduct";

export default function Category({
  lang,
  setLang,
  value,
  setValue,
  basket,
  setBasket,
}) {
  return (
    <Box>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
      <CategoryMain lang={lang} />
      <CategoryProduct
        lang={lang}
        value={value}
        setBasket={setBasket}
        basket={basket}
        setValue={setValue}
      />
      <Footer lang={lang} />
    </Box>
  );
}
