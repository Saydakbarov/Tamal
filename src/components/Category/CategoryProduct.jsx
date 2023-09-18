import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Server";
import CategoryButtonBox from "../Home/CategoryButtonBox";
import CategoryPageButton from "./ResponsiveCategoryBox/CategoryPageButton";
import content from "../../Locolization/content";

export default function CategoryProduct({ lang, value, basket, setBasket }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [category, setCategory] = useState([]);

  const [productData, setProductData] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  console.log(value);

  useEffect(() => {
    fetch(`${BASE_URL}api/v1/categories`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://front-api.tamal.pro/api/v1/products?limit=10&offset=0&search_${lang}=${value}`
        );
        return setProductData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [value, lang]);

  console.log(productData);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600", mt: 4 }}>
          {
            content[lang].home.home_product_title
          }
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>
      </Box>

      {/* Category Product List Start */}
      <Grid
        container
        justifyContent={"center"}
        gap={4}
        sx={{
          mt: 8,
        }}
      >
        <Grid
          item
          lg={2.4}
          md={3}
          sm={10}
          xs={10}
          sx={{
            p: 2,
            borderRadius: "6px",
          }}
        >
          {isMatch ? (
            <CategoryPageButton data={category} lang={lang} />
          ) : (
            <>
              <Typography sx={{ fontSize: "22px" }}>Category</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                {category.map((v, i) => (
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
                      navigate("/category/subcategory/" + v.category_id);
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
        <Grid
          item
          lg={8}
          md={8}
          sm={11}
          xs={11}
          sx={{
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            p: 2,
            justifyContent: "center",
          }}
          // key={v.product_id}
          component={"div"}
        >
          {productData.map((v, i) => (
            <Box
              sx={{
                width: { xs: "430px", sm: "350px", md: "300px" },
                position: "relative",
                height: "580px",
                p: 2,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              component={"div"}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                  src={v.product_image_url}
                  alt=""
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}>
                  {lang == "ru"
                    ? v.product_title_ru
                    : lang == "uz"
                    ? v.product_title_uz
                    : lang == "en"
                    ? v.product_title_en
                    : ""}
                </Typography>
                <Typography sx={{ mt: 2, fontSize: "14px" }}>
                  {lang == "ru"
                    ? v.product_information_ru?.split(" ").length > 10
                      ? v.product_information_ru
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_ru
                    : lang == "uz"
                    ? v.product_information_uz?.split(" ").length > 10
                      ? v.product_information_uz
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_uz
                    : lang == "en"
                    ? v.product_information_en?.split(" ").length > 10
                      ? v.product_information_en
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_en
                    : ""}
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  pt: 5,
                  width: "100%",
                  position: "absolute",
                  bottom: "4%",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    setBasket((prevData) => [v, ...prevData]);
                    localStorage.setItem("data", JSON.stringify(basket));
                    navigate("/singleproduct/" + v.product_id);
                  }}
                >
                  Add to Card
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Category Product List End */}
    </>
  );
}
