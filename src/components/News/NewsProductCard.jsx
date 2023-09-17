import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/NewsCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Favorite, IosShare, ShoppingBag } from "@mui/icons-material";
import axios from "axios";
import BASE_URL from "../../Server";

export default function NewsProductCard({ lang }) {
  const [ratingValue, setRatingValue] = useState(0);
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

  console.log(newsData);

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent={"center"} gap={4}>
        {newsData.map((v, i) => (
          <Grid item lg={2.5} md={4} sm={8} xs={10}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  backgroundImage: `url(${v.new_img})`,
                  backgroundPosition: "center",
                  height: "340px",
                  backgroundRepeat: "no-repeat",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  backgroundSize: "100%",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}>
                  {lang == "ru"
                    ? v.new_title_ru
                    : lang == "uz"
                    ? v.new_title_uz
                    : lang == "en"
                    ? v.new_title_en
                    : ""}
                </Typography>
                <Typography sx={{ mt: 2, fontSize: "14px" }}>
                  {lang == "ru"
                    ? v.new_description_ru
                    : lang == "uz"
                    ? v.new_description_uz
                    : lang == "en"
                    ? v.new_description_en
                    : ""}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
