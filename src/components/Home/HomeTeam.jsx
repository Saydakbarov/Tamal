import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { HomeTeamData } from "../../data";

export default function HomeTeam() {
  return (
    <Box sx={{ background: "#F7F7F7", p: 6, mt: 10 }}>
      <Grid container justifyContent={"center"}>
        <Grid item lg={8} md={10} sm={12} xs={12}>
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
            {HomeTeamData.map((v, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    textAlign: "center",
                    width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
                    margin: "0 auto",
                  }}
                >
                  <img
                    style={{ width: "70px", borderRadius: "100%" }}
                    src={v.img}
                    alt=""
                  />
                  <Typography sx={{ fontFamily: "Inter", lineHeight: "30px" }}>
                    {v.text}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
