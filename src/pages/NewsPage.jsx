import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import NewsMain from "../components/News/NewsMain";
import NewsProducts from "../components/News/NewsProducts";

export default function NewsPage({ lang, setLang, value, setValue }) {
  return (
    <Box>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
      <NewsMain lang={lang} />
      <NewsProducts lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
