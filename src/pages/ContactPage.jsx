import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import ContactMain from "../components/Contact/ContactMain";
import ContactCompany from "../components/Contact/ContactCompany";

export default function ContactPage({ lang, setLang }) {
  return (
    <Box>
           <HeaderMenu lang={lang} setLang={setLang} />
      <ContactMain lang={lang} />
      <ContactCompany lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
