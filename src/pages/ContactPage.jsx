import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import ContactMain from "../components/Contact/ContactMain";
import ContactCompany from "../components/Contact/ContactCompany";

export default function ContactPage({ lang, setLang, value, setValue }) {
  return (
    <Box>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
      <ContactMain lang={lang} />
      <ContactCompany lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
