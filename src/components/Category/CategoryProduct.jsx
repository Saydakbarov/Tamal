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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Server";
import CategoryButtonBox from "../Home/CategoryButtonBox";
import CategoryPageButton from "./ResponsiveCategoryBox/CategoryPageButton";
import content from "../../Locolization/content";

import CategoryMainImg from "../../images/PageMain/product.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowRight, ShoppingBag } from "@mui/icons-material";
import BrandBox from "./BrandBox";
import SearchCategory from "./SearchCategory";

export default function CategoryProduct({
  lang,
  value,
  basket,
  setBasket,
  setValue,
}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [category, setCategory] = useState([]);

  const [productData, setProductData] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  const message = content[lang].home.home_toast;
  const basketData = JSON.parse(localStorage.getItem("data")) || [];

  const showToastMessage = () => {
    if (basketData.length !== 0) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const [offset, setOffset] = useState(0);

  const [brand_id, setBrand_id] = useState("");

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
          `https://front-api.tamal.pro/api/v1/products?limit=6&offset=${offset}&brand_id=${brand_id}&search_${lang}=${value}`
        );
        return setProductData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [value, lang, offset, brand_id]);

  console.log(brand_id);

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
      <Box sx={{ textAlign: "center", position: "relative" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600", mt: 4 }}>
          {content[lang].home.home_product_title}
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
          md={2.5}
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
                      navigate("/product/subcategory/" + v.category_id);
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
        <Grid item xl={8} lg={9} md={9} sm={11} xs={11} sx={{}} component={"div"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
              flexWrap:"wrap"
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
              cursor: "pointer",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              p: 2,
              justifyContent: "center",
            }}
          >
            {productData?.map((v, i) => (
              <Box
                sx={{
                  width: { xs: "430px", sm: "350px", md: "300px" },
                  position: "relative",
                  height: "540px",
                  p: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                component={"div"}
                key={v.product_id}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "240px",
                      objectPosition: "100%",
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

                    <Typography sx={{ mt: 2, fontSize: "14px", color: "gray" }}>
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
                    sx={{ fontWeight: "bold" }}
                    onClick={() => {
                      HandleBasket(v);
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

          {productData?.length === 0 ? (
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
          disabled={productData?.length >= 6 ? false : true}
          style={{
            background: offset <= 0 ? "#01466A" : "gray",
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

      {/* Category Product List End */}
    </>
  );
}
