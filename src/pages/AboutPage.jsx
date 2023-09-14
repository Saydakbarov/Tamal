import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import AboutMain from "../components/About/AboutMain";
import AboutCompany from "../components/About/AboutCompany";
import AboutProduct from "../components/About/AboutProduct";

export default function AboutPage({ lang, setLang }) {
  return (
    <Box
      sx={{
        padding: {
          xs: "0px 5px",
          sm: "0px 10px",
          md: "0px 30px",
          lg: "0px 40px",
        },
      }}
    >
      <HeaderMenu lang={lang} setLang={setLang} />
      <AboutMain lang={lang} />
      <AboutCompany />
      <AboutProduct />
      <Footer />
    </Box>
  );
}
