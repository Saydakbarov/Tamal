import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BlogPostsData } from "../../data";
import axios from "axios";
import BASE_URL from "../../Server";
import { useNavigate } from "react-router-dom";
import content from "../../Locolization/content";

export default function BlogPosts({ lang }) {
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `${BASE_URL}api/v1/news?limit=100&offset=0`
        );
        return setNewsData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <Box>
      {/* <Grid container justifyContent={"center"} gap={5} mt={16}>
        <Grid item lg={3} md={3} sm={5} xs={10} sx={{ textAlign: "center" }}>
          <img
            src="https://htmldemo.net/eposi/eposi/assets/img/icons/free_shipping.webp"
            alt=""
          />
          <Typography sx={{ fontWeight: "600", fontSize: "14px", mt: 2 }}>
            FREE SHIPPING WORLDWIDE
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", mt: 1, color: "gray" }}
          >
            We offer free shipping via Standard Shipping on orders over $200.00
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={10} sx={{ textAlign: "center" }}>
          <img
            src="https://htmldemo.net/eposi/eposi/assets/img/icons/support247.webp"
            alt=""
          />
          <Typography sx={{ fontWeight: "600", fontSize: "14px", mt: 2 }}>
            FREE SHIPPING WORLDWIDE
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", mt: 1, color: "gray" }}
          >
            We offer free shipping via Standard Shipping on orders over $200.00
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={10} sx={{ textAlign: "center" }}>
          <img
            src="https://htmldemo.net/eposi/eposi/assets/img/icons/money_back.webp"
            alt=""
          />
          <Typography sx={{ fontWeight: "600", fontSize: "14px", mt: 2 }}>
            FREE SHIPPING WORLDWIDE
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", mt: 1, color: "gray" }}
          >
            We offer free shipping via Standard Shipping on orders over $200.00
          </Typography>
        </Grid>
      </Grid> */}

      <Box sx={{ textAlign: "center", mt: 16 }}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: "600", color: "#01466A" }}
        >
          {content[lang].home.home_news_title}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>

        <Grid
          container
          justifyContent={"center"}
          gap={2}
          sx={{ width: "85%", margin: "0 auto", mt: 4 }}
        >
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
                  slidesPerView: 3,
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
              className="mySwiper"
              style={{ paddingBottom: "70px" }}
            >
              <Grid container justifyContent={"center"} gap={3}>
                {newsData.map((v, i) => (
                  <Grid item key={v.new_id}>
                    <SwiperSlide>
                      <Box>
                        <Box
                          sx={{
                            width: "100%",
                            p: 3,
                            backgroundImage: `url(${v.new_img})`,
                            backgroundPosition: "center",
                            height: "260px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                          }}
                        ></Box>
                        <Box sx={{ textAlign: "start" }}>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              mt: 1,
                              color: "#01466A",
                            }}
                          >
                            {lang == "ru"
                              ? v.new_title_ru
                              : lang == "uz"
                              ? v.new_title_uz
                              : v.new_title_en}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "13px", color: "gray", mt: 1 }}
                          >
                            {lang == "ru"
                              ? v.new_description_ru
                              : lang == "uz"
                              ? v.new_description_uz
                              : v.new_description_en}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "gray", mt: 1 }}
                          >
                            {v.text2}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "blue",
                              mt: 3,
                              cursor: "pointer",
                            }}
                            component={"div"}
                            onClick={() => navigate("/news")}
                          >
                            Read More
                          </Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  </Grid>
                ))}
              </Grid>
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
