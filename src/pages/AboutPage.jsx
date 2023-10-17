import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import AboutMain from "../components/About/AboutMain";
import AboutCompany from "../components/About/AboutCompany";
import AboutProduct from "../components/About/AboutProduct";

export default function AboutPage({ lang, setLang, value, setValue }) {
  return (
    <Box sx={{}}>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
      <AboutMain lang={lang} />
      <AboutCompany />
      <AboutProduct />
      <Footer lang={lang} />
    </Box>
  );
}
