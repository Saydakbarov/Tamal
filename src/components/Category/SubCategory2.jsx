import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BASE_URL from "../../Server";
import axios from "axios";
import SecondCategoryButton from "./ResponsiveCategoryBox/SecondCategoryButtonBox";

export default function SubCategory2({
  lang,
  basket,
  setBasket,
  value,
  setValue,
}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [title, setTitle] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  const [secondSubCategoryId, setSecondSubCategoryId] = useState(1);

  const [secondSubCategoryData, setSecondSubCategoryData] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `${BASE_URL}api/v1/secondsubcategories/` + id
        );
        return setSubCategory(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://front-api.tamal.pro/api/v1/products?limit=10&offset=0&subcategory_id=" +
            id
        );
        return setSecondSubCategoryData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  console.log(secondSubCategoryId);

  return (
    <>
      <HeaderMenu lang={lang} value={value} setValue={setValue} />
      <Box
        sx={{
          backgroundImage:
            "url('https://htmldemo.net/eposi/eposi/assets/img/backgrounds/category-image-1820x400.webp')",
          height: "400px",
          pt: 10,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>Category</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
              Home
            </Link>
            <KeyboardArrowRight />
            <Link
              to="/category"
              style={{ color: "red", textDecoration: "none" }}
            >
              Category
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Sub Category Product List Start */}
      <Grid container justifyContent={"center"} gap={4} mt={8}>
        <Grid
          item
          lg={2.4}
          md={8}
          sm={11}
          xs={11}
          sx={{
            p: 2,
            borderRadius: "6px",
          }}
        >
          {isMatch ? (
            <SecondCategoryButton data={subCategory} lang={lang} />
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
                {subCategory.map((v, i) => (
                  <Button
                    key={i}
                    variant="contained"
                    value={v.second_sub_category_name_en}
                    sx={{
                      background:
                        v.second_sub_category_id === secondSubCategoryId
                          ? "#E2FF7F"
                          : "#01466A",
                      "&:hover": {
                        backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                        color: "black",
                      },
                      display: "inline-block",
                      margin: "5px",
                      fontSize: "12px",
                      color:
                        v.second_sub_category_id === secondSubCategoryId
                          ? "black"
                          : "white",
                    }}
                    onClick={() => {
                      setSecondSubCategoryId(v.second_sub_category_id);
                      setTitle(v.second_sub_category_name_en);
                      navigate(
                        "/category/subcategory/sub/third/" +
                          v.second_sub_category_id
                      );
                    }}
                  >
                    {v.second_sub_category_name_ru}
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
          sm={8}
          xs={11}
          sx={{
            p: 2,
            borderRadius: "6px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap ",
          }}
        >
          {secondSubCategoryData?.map((v, i) => (
            <Box
              sx={{
                width: { xs: "430px", sm: "350px", md: "300px" },
                position: "relative",
                height: "580px",
                p: 2,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
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

              <Box sx={{ mt: 4, pt: 5, width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{ position: "absolute", top: "90%" }}
                  onClick={() => {
                    setBasket((prevData) => [v, ...prevData]);
                    localStorage.setItem("data", JSON.stringify(basket));
                  }}
                >
                  Add to Card
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Sub Category Product List End */}
      <Footer />
    </>
  );
}
