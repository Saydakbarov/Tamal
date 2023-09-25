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
import SecondCategoryButton from "./ResponsiveCategoryBox/SecondCategoryButtonBox";
import { toast } from "react-toastify";
import content from "../../Locolization/content";

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

  const [offset, setOffset] = useState(0);
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
          `https://front-api.tamal.pro/api/v1/products?limit=6&offset=${offset}&subcategory_id=` +
            id
        );
        return setSecondSubCategoryData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id, offset]);

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
                        "/product/subcategory/sub/third/" +
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
                height: "510px",
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
                <Typography sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}>
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
                    <Rating
                      name="simple-controlled"
                      value={v.product_rating}
                      sx={{ fontSize: "14px" }}
                      disabled
                    />
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
                        label="Сравныт"
                      />
                    </Box>
                  </Box>
                </Box>
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

              <Box sx={{ mt: 4, pt: 5, width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{ position: "absolute", top: "90%", fontWeight: "bold" }}
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

          {secondSubCategoryData?.length === 0 ? (
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
          disabled={secondSubCategoryData?.length >= 6 ? false : true}
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
