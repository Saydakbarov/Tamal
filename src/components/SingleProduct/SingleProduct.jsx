import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import SingleMain from "./SinleProductMain";

import "./styles/SingleProduct.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../Server";
import ShopButton from "./ShopButton";

export default function SingleProduct({ lang, setLang }) {
  const [singleproductData, setSingleProductData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}api/v1/products/${id}`);
        return setSingleProductData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  console.log(singleproductData);
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <SingleMain />

      <Grid container justifyContent={"center"} gap={5} mt={7}>
        <Grid item lg={4} md={5} sm={5} xs={10} sx={{ overflow: "hidden" }}>
          <img
            className="Image"
            src={singleproductData?.product_image_url}
            alt=""
          />
        </Grid>
        <Grid item lg={4} md={5} sm={5} xs={10} sx={{ position: "relative" }}>
          <Typography sx={{ fontSize: "34px" }}>
            {lang == "ru"
              ? singleproductData.product_title_ru
              : lang == "en"
              ? singleproductData.product_title_en
              : singleproductData.product_title_uz}
          </Typography>
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Information
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "gray" }}>
              {lang == "ru"
                ? singleproductData.product_information_ru
                : lang == "en"
                ? singleproductData.product_information_en
                : singleproductData.product_information_uz}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Country
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              {lang == "ru"
                ? singleproductData.product_country_ru
                : lang == "en"
                ? singleproductData.product_country_en
                : singleproductData.product_country_uz}
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Attention
            </Typography>

            <Typography sx={{ fontSize: "18px", color: "gray" }}>
              {lang == "ru"
                ? singleproductData.product_attention_ru
                : lang == "en"
                ? singleproductData.product_attention_en
                : singleproductData.product_attention_uz}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Model
            </Typography>

            <Typography sx={{ fontSize: "18px" }}>
              {lang == "ru"
                ? singleproductData.product_model_ru
                : lang == "en"
                ? singleproductData.product_model_en
                : singleproductData.product_model_uz}
            </Typography>
          </Box>

          <ShopButton />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
