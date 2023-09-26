import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
import { ArrowRight, ShoppingBag } from "@mui/icons-material";
import content from "../../Locolization/content";
import axios from "axios";

export default function ProductsCard({ data, lang, basket, setBasket }) {
  // const [basketData, setBasketData] = useState([]);
  const navigate = useNavigate();

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
    }, 4000);
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
      SetChecked(false);
      const removeItem = compare?.filter((e) => e.product_id !== v.product_id);
      localStorage.setItem("compare", JSON.stringify(removeItem));
    }
  };
  
  const compareData = JSON.parse(localStorage.getItem("compare")) || [];

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
                    p: 2,
                    height: "490px",
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
                        height: "220px",
                        objectPosition: "100%",
                      }}
                      src={v.product_image_url}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Rating
                        sx={{ fontSize: "15px !important" }}
                        name="simple-controlled"
                        value={v.product_rating}
                        disabled
                      />
                      <Box>
                        <FormControlLabel
                          onClick={(e) => {
                            SetChecked(true);
                            setIsVisible(true);
                            onchange(e, v);
                          }}
                          control={<Checkbox />}
                          label="Сравныт"
                        />
                      </Box>
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
                          HandleBasket(v);
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

            {isVisible && (
              <Box
                sx={{
                  background: "blue",
                  borderRadius: "4px",
                  height: "40px",
                  width: "300px",
                  margin: "0 auto",
                  cursor: "pointer",
                }}
                component={"div"}
                onClick={() => navigate("/compare")}
              >
                {checked == true ? (
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
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
