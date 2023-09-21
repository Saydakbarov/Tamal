import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "@mui/icons-material";
import content from "../../Locolization/content";
import axios from "axios";

export default function ProductsCard({ data, lang, basket, setBasket }) {
  // const [basketData, setBasketData] = useState([]);
  const navigate = useNavigate();

  const message = content[lang].home.home_toast;
  const basketData = JSON.parse(localStorage.getItem("data")) || [];

  const [value, setValue] = React.useState(0);

  const [id, setId] = useState();

  const showToastMessage = () => {
    if (basketData.length !== 0) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const RatingFunction = () => {
    try {
      const res = axios.put(
        "https://front-api.tamal.pro/api/v1/product/update/rating",
        {
          id: id,
          rating: value,
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{}}>
      <ToastContainer />
      <Grid container justifyContent={"center"} gap={2} mt={8}>
        <Grid item lg={11} md={11} sm={11} xs={11}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            {data?.map((v, i) => (
              <SwiperSlide className="swiperSlideBox">
                <Box
                  sx={{
                    boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    height: "470px",
                    p: 2,
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
                        height: "240px",
                      }}
                      src={v.product_image_url}
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Rating
                        name="simple-controlled"
                        value={v.product_rating}
                        onChange={(event, newValue) => {
                          RatingFunction();
                          setId(v.product_id);
                          setValue(newValue);
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "18px",
                        mt: 2,
                        color: "#01466A",
                      }}
                    >
                      {lang == "ru"
                        ? v.product_title_ru
                        : lang == "uz"
                        ? v.product_title_uz
                        : lang == "en"
                        ? v.product_title_en
                        : ""}
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
                  <Box
                    sx={{
                      mt: 4,
                      pt: 5,
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <>
                      <Button
                        variant="contained"
                        sx={{
                          position: "absolute",
                          top: "90%",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          let a = v;
                          a["count"] = 1;
                          // setBasket((prevData) => [a, ...prevData]);
                          localStorage.setItem("data", JSON.stringify([a, ...basket]));
                          showToastMessage();
                        }}
                        startIcon={<ShoppingBag />}
                      >
                        +
                      </Button>
                    </>
                    <Button
                      variant="contained"
                      sx={{
                        position: "absolute",
                        top: "90%",
                        left: "53%",
                        fontSize: "12px !important",
                      }}
                      onClick={() => {
                        navigate("/singleproduct/" + v.product_id);
                      }}
                    >
                      {content[lang].home.home_product_button}
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
