import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link, useNavigate } from "react-router-dom";
import { Add, Delete, Remove } from "@mui/icons-material";

export default function BasketCard({ data, lang, setNewData }) {
  // const [basketData, setBasketData] = useState([]);
  const navigate = useNavigate();

  const deleteFunc = (id) => {
    const updatedData = data.filter((item) => item.product_id !== id);

    localStorage.setItem("data", JSON.stringify(updatedData));

    window.location.reload();
  };

  const [counters, setCounters] = useState(data);

  const handleIncrement = (id) => {
    const updatedCounters = counters.map((counter) =>
      counter.product_id === id
        ? { ...counter, count: counter.count + 1 }
        : counter
    );
    setCounters(updatedCounters);
    setNewData(updatedCounters);
  };

  const handleDeccrement = (id) => {
    const updatedCounters = counters.map((counter) =>
      counter.product_id === id
        ? { ...counter, count: counter.count - 1 }
        : counter
    );
    setCounters(updatedCounters);
    setNewData(updatedCounters);
  };

  return (
    <Box sx={{}}>
      <Grid container justifyContent={"center"} gap={2} mt={2}>
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            {counters?.map((v, i) => (
              <SwiperSlide key={i} className="swiperSlideBox">
                <Box
                  sx={{
                    boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    height: "500px",
                    p: 2,
                    position: "relative",
                  }}
                  component={"div"}
                >
                  <Box sx={{ textAlign: "end" }}>
                    <IconButton onClick={() => deleteFunc(v.product_id)}>
                      <Delete />
                    </IconButton>
                  </Box>
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
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "18px",
                        mt: 2,
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
                      display: "flex",
                      gap: "10px",
                      position: "absolute",
                      bottom: "4%",
                      border: "2px solid gray",
                      borderRadius: "4px",
                      left: "20%",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleDeccrement(v.product_id)}
                      disabled={v.count >= 1 ? false : true}
                      sx={{
                        background: "white",
                        boxShadow: "none",
                        color: "black",
                        "&:hover": {
                          background: "white",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <Remove />
                    </Button>

                    <Typography sx={{ fontSize: "20px" }}>{v.count}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleIncrement(v.product_id)}
                      sx={{
                        background: "white",
                        boxShadow: "none",
                        color: "black",
                        "&:hover": {
                          background: "white",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <Add />
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
