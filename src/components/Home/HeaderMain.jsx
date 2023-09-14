import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/HeaderMain.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { HeaderCarousel } from "../../data";
export default function HeaderMain() {
  return (
    <Box>
      <Grid
        container
        justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
      >
        <Grid item lg={11} md={12} sm={11} xs={11}>
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {HeaderCarousel.map((v, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "space-between",
                    },
                    flexWrap: "wrap",
                    alignItems: "center",
                    p: { xs: 3, sm: 4, md: 8, lg: 10 },
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{ width: "450px" }}
                    className="animate__animated animate__backInLeft"
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "20px",
                          sm: "22px",
                          md: "36px",
                          lg: "54px",
                        },
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                        },
                        fontFamily: "Inter",
                        fontWeight: "500",
                      }}
                    >
                      {v.text}
                    </Typography>

                    <Button
                      variant="outlined"
                      sx={{ borderColor: "black", color: "black", mt: 5 }}
                      className="animate__animated animate__bounceInUp"
                    >
                      + Shop Now
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "55%", lg: "55%" },
                      textAlign: "start",
                    }}
                  >
                    <img
                      width={"100%"}
                      style={{
                        objectFit: "cover",
                        maxHeight: "400px",
                        borderRadius: "10px",
                      }}
                      src={v.img}
                      alt=""
                    />
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
