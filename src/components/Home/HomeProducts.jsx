import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { HomeProductsData } from "../../data";
import axios from "axios";
import BASE_URL from "../../Server";
import CategoryButtonBox from "./CategoryButtonBox";

const ProductCategory = [
  {
    title: "Decoration",
  },
  {
    title: "Lighting",
  },
  {
    title: "Storage",
  },
  {
    title: "Living Room",
  },
];

export default function HomeProducts({ lang, basket, setBasket }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [productTitle, setProductTitle] = useState("Decoration");

  const [categoryButton, setCategoryButton] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}api/v1/categories`);
        return setCategoryButton(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://front-api.tamal.pro/api/v1/products?limit=10&offset=${categoryId}`
        );
        return setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [categoryId]);

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: "600", color: "#01466A" }}
        >
          Our Products
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>
      </Box>

      <Grid container justifyContent={"center"} gap={3} mt={7}>
        <Grid
          item
          lg={2.4}
          md={2.8}
          sm={10}
          xs={10}
          sx={{
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            p: 2,
            borderRadius: "6px",
          }}
        >
          {isMatch ? (
            <CategoryButtonBox lang={lang} />
          ) : (
            <>
              <Typography sx={{ fontSize: "22px" }}>Category</Typography>
              <Box
                sx={{
                  // overflowX: "scroll",
                  // whiteSpace: "nowrap",
                  // scrollbarWidth: "none",
                  // mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                {categoryButton.map((v, i) => (
                  <Button
                    key={i}
                    variant="contained"
                    value={v.category_name_ru}
                    sx={{
                      background:
                        v.category_id === categoryId ? "#E2FF7F" : "#01466A",
                      "&:hover": {
                        backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                        color: "black",
                      },
                      display: "inline-block",
                      margin: "5px",
                      fontSize: "12px",
                      color: v.category_id === categoryId ? "black" : "white",
                    }}
                    onClick={() => {
                      setCategoryId(v.category_id);
                    }}
                  >
                    {lang == "ru"
                      ? v.category_name_ru
                      : lang == "uz"
                      ? v.category_name_uz
                      : lang == "en"
                      ? v.category_name_en
                      : ""}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Grid>

        <Grid item lg={8} md={8} sm={10} xs={10}>
          <ProductsCard
            data={data}
            lang={lang}
            basket={basket}
            setBasket={setBasket}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
