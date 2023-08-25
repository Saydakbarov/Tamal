import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Footer";
import ContactMain from "../components/Contact/ContactMain";
import ContactCompany from "../components/Contact/ContactCompany";

export default function ContactPage() {
  return (
    <Box>
      <HeaderMenu />
      <ContactMain />
      <ContactCompany />
      <Footer />
    </Box>
  );
}
