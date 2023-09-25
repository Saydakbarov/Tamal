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
import content from "../../Locolization/content";
import { Add, Remove } from "@mui/icons-material";
import SingleAllData from "./SingleAllData";

export default function SingleProduct({
  lang,
  setLang,
  value,
  setValue,
  basket,
  setBasket,
}) {
  const [singleproductData, setSingleProductData] = useState({});

  const [count, setCount] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}api/v1/products/${id}`);
        let obj = res.data.data;
        obj["count"] = 0;
        return setSingleProductData(obj);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  const handleIncrement = (id) => {
    if (singleproductData.product_id === id) {
      singleproductData["count"] = singleproductData.count + 1;
      return setCount(count + 1);
    } else {
      return count;
    }
  };

  const handleDeccrement = (id) => {
    if (singleproductData.product_id === id) {
      singleproductData["count"] = singleproductData.count - 1;
      return setCount(count - 1);
    } else {
      return count;
    }
  };

  console.log(singleproductData);
  return (
    <Box>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        value={value}
        setValue={setValue}
      />
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
              {content[lang].singlePage.information_title}
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
              {content[lang].singlePage.country_title}
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
              {content[lang].singlePage.attention_title}
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
              {content[lang].singlePage.model_title}
            </Typography>

            <Typography sx={{ fontSize: "18px" }}>
              {lang == "ru"
                ? singleproductData.product_model_ru
                : lang == "en"
                ? singleproductData.product_model_en
                : singleproductData.product_model_uz}
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
              {content[lang].singlePage.price}
            </Typography>

            <Typography sx={{ fontSize: "18px" }}>
              {singleproductData.product_price}{" "}
              {singleproductData.product_dollar === true ? "$" : "so'm"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "10px", mt: 5 }}>
            <Button
              variant="contained"
              onClick={() => handleIncrement(singleproductData.product_id)}
            >
              <Add />
            </Button>
            <Typography sx={{ fontSize: "20px" }}>Count: {count}</Typography>
            <Button
              variant="contained"
              onClick={() => handleDeccrement(singleproductData.product_id)}
              disabled={count >= 1 ? false : true}
            >
              <Remove />
            </Button>
          </Box>

          <ShopButton data={[singleproductData]} />
        </Grid>
      </Grid>

      <SingleAllData
        id={singleproductData?.category_id}
        lang={lang}
        setLang={setLang}
        setBasket={setBasket}
        basket={basket}
      />
      <Footer lang={lang} />
    </Box>
  );
}
