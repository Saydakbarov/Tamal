import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import SingleMain from "./SinleProductMain";

import "./styles/SingleProduct.scss";

export default function SingleProduct({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <SingleMain />
      <Grid container justifyContent={"center"}>
        <Grid item lg={4} sx={{ overflow: "hidden" }}>
          <img
            className="Image"
            src="https://htmldemo.net/eposi/eposi/assets/img/products/big1-1.webp"
            alt=""
          />
        </Grid>
        <Grid item lg={4}></Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
