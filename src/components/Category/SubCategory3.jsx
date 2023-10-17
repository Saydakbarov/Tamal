import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import {
  ArrowRight,
  KeyboardArrowRight,
  ShoppingBag,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BASE_URL from "../../Server";
import axios from "axios";
import ThirdCategoryButton from "./ResponsiveCategoryBox/ThirdCategoryButtonBox";
import { toast } from "react-toastify";
import content from "../../Locolization/content";

import CategoryMainImg from "../../images/PageMain/product.jpg";
import BrandBox from "./BrandBox";
import SearchCategory from "./SearchCategory";

export default function SubCategory3({
  lang,
  basket,
  setBasket,
  value,
  setValue,
  setLang,
}) {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [title, setTitle] = useState("");

  const [subCategory, setSubCategory] = useState([]);

  const [secondSubCategoryId, setSecondSubCategoryId] = useState(1);

  const [thirdSubCategoryData, setThirdSubCategoryData] = useState([]);

  const [offset, setOffset] = useState(0);
  const { id } = useParams();

  const navigate = useNavigate();

  const [brand_id, setBrand_id] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `${BASE_URL}api/v1/thirdsubcategories/` + id
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
          `https://front-api.tamal.pro/api/v1/products?limit=6&offset=${offset}&brand_id=${brand_id}&secondsubcategory_id=${id}&search_${lang}=${value}`
        );
        return setThirdSubCategoryData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  const message = content[lang].home.home_toast;
  const basketData = JSON.parse(localStorage.getItem("data")) || [];

  const showToastMessage = () => {
    if (basketData.length !== 0) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const HandleBasket = (v) => {
    let a = v;
    a["count"] = 1;
    const basketData = JSON.parse(localStorage.getItem("data")) || [];
    const data = basketData?.filter((e) => e.product_id === v.product_id);

    if (data?.length === 0) {
      showToastMessage();
      return localStorage.setItem("data", JSON.stringify([a, ...basketData]));
    }
  };

  const [checked, SetChecked] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  if (isVisible) {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const onchange = (e, v) => {
    const compare = JSON.parse(localStorage.getItem("compare")) || [];
    const checked = e.target.checked;

    if (checked) {
      const data = compare?.filter((e) => e.product_id === v?.product_id);

      if (data?.length === 0) {
        return localStorage.setItem("compare", JSON.stringify([v, ...compare]));
      }
    } else {
      const removeItem = compare?.filter((e) => e.product_id !== v.product_id);
      localStorage.setItem("compare", JSON.stringify(removeItem));
    }
  };

  const compareData = JSON.parse(localStorage.getItem("compare")) || [];

  return (
    <>
      <HeaderMenu
        lang={lang}
        value={value}
        setValue={setValue}
        setLang={setLang}
      />
      <Box
        sx={{
          backgroundImage: `url(${CategoryMainImg})`,
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
          md={2.4}
          sm={11}
          xs={11}
          sx={{
            p: 2,
            borderRadius: "6px",
          }}
        >
          {isMatch ? (
            <ThirdCategoryButton data={subCategory} lang={lang} />
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
                    value={v.third_sub_category_name_en}
                    sx={{
                      background:
                        v.third_sub_category_id === secondSubCategoryId
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
                        v.third_sub_category_id === secondSubCategoryId
                          ? "black"
                          : "white",
                    }}
                    onClick={() => {
                      setSecondSubCategoryId(v.third_sub_category_id);
                      setTitle(v.third_sub_category_name_en);
                      navigate(
                        "/product/subcategory/sub/third/product/" +
                          v.third_sub_category_id
                      );
                    }}
                  >
                    {v.third_sub_category_name_en}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Grid>

        <Grid
          item
          xl={8}
          lg={9}
          md={9}
          sm={8}
          xs={11}
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <BrandBox
              lang={lang}
              value={value}
              brand_id={brand_id}
              setBrand_id={setBrand_id}
            />
            <SearchCategory lang={lang} value={value} setValue={setValue} />
          </Box>
          <Box
            sx={{
              borderRadius: "6px",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap ",
            }}
          >
            {thirdSubCategoryData?.map((v, i) => (
              <Box
                sx={{
                  width: { xs: "430px", sm: "350px", md: "300px" },
                  position: "relative",
                  height: "540px",
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
                      height: "250px",
                      objectPosition: "center",
                    }}
                    src={v.product_image_url}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}
                  >
                    {lang == "ru"
                      ? v.product_title_ru
                      : lang == "uz"
                      ? v.product_title_uz
                      : lang == "en"
                      ? v.product_title_en
                      : ""}
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          name="simple-controlled"
                          value={v.product_rating}
                          sx={{ fontSize: "14px" }}
                          disabled
                        />
                        <Box
                          sx={{
                            width: "25px",
                            height: "20px",
                            background: "orange",
                            textAlign: "center",
                            lineHeight: "20px",
                            borderRadius: "10px",
                            color: "white",
                            fontSize: "14px",
                          }}
                        >
                          {v.product_rating}
                        </Box>
                      </Box>
                      <Box>
                        <FormControlLabel
                          onClick={(e) => {
                            SetChecked(!checked);
                            setIsVisible(true);
                            onchange(e, v);
                          }}
                          sx={{ fontSize: "12px !important" }}
                          control={
                            <Checkbox sx={{ fontSize: "12px !important" }} />
                          }
                          label="Сравнить"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: "14px",
                      color: "gray",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Brand
                    </span>
                    {v.brand_name}
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
                      HandleBasket(v);
                      showToastMessage();
                    }}
                    startIcon={<ShoppingBag />}
                  >
                    +
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      position: "absolute",
                      fontSize: "12px !important",
                      left: "53%",
                      top: "90%",
                    }}
                    onClick={() => {
                      navigate("/singleproduct/" + v.product_id);
                    }}
                  >
                    {content[lang].home.home_product_button}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {thirdSubCategoryData?.length === 0 ? (
            <Typography
              sx={{
                textAlign: "center",
                color: "red",
                fontSize: "20px",
                fontFamily: "Inter",
              }}
            >
              No result
            </Typography>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      {isVisible && (
        <Box
          sx={{
            background: "blue",
            borderRadius: "4px",
            height: "40px",
            width: "300px",
            position: "fixed",
            cursor: "pointer",
            top: "50%",
            left: "50%",
          }}
          component={"div"}
          onClick={() => navigate("/compare")}
        >
          {checked === true ? (
            <Box
              sx={{
                gap: "10px",
                color: "white",
                minHeight: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>{compareData.length}</Typography>
              <Typography>Add Compare</Typography>
              <ArrowRight />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                color: "white",
                minHeight: "40px",
                alignItems: "center",
              }}
            >
              <Typography>{compareData.length}</Typography>
              <Typography>Remove Compare</Typography>
              <ArrowRight />
            </Box>
          )}
        </Box>
      )}

      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
        <button
          className="prev_btn add__btn"
          onClick={() => setOffset(Number(offset) - 6)}
          disabled={offset === 0 ? true : false}
          style={{
            background: offset === 0 ? "gray" : "#01466A",
            color: "white",

            width: "90px",
            padding: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prev
        </button>
        <button
          className="next_btn add__btn"
          onClick={() => setOffset(Number(offset) + 6)}
          disabled={thirdSubCategoryData?.length >= 6 ? false : true}
          style={{
            background: offset === 0 ? "#01466A" : "gray",
            color: "white",

            width: "90px",
            padding: "5px",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Next
        </button>
      </div>

      {/* Sub Category Product List End */}
      <Footer lang={lang} />
    </>
  );
}
