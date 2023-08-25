import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Favorite, IosShare, ShoppingBag } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/ProductReducer";

export default function ProductsCard({ data }) {
  const [ratingValue, setRatingValue] = useState(0);
  const [productData, setProductData] = useState([]);

  console.log(productData);

  const dataProduct = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const getProductData = (v) => {
    setProductData(v);
    dataProduct.filter((el) => (el.img !== v.img ? setProductData(v) : null));
    // console.log(dataProduct);

    dispatch(addProduct(productData));
  };

  return (
    <Box sx={{}}>
      <Grid container justifyContent={"center"} gap={2}>
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
                slidesPerView: 4,
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
            <Grid container justifyContent={"center"} gap={3}>
              {data.map((v, i) => (
                <Grid item key={i}>
                  <SwiperSlide className="swiperSlideBox">
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          p: 3,
                          backgroundImage: `url(${v.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "100%",
                          height: "340px",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignitems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              background: "red",
                              color: "#ffff",
                              textAlign: "center",
                              lineHeight: "50px",
                              display: v.new === true ? "block" : "none",
                            }}
                          >
                            New
                          </Box>
                          <Box
                            sx={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              background: "black",
                              color: "#ffff",
                              textAlign: "center",
                              lineHeight: "50px",
                              display: v.percentage === 0 ? "none" : "block",
                            }}
                          >
                            -{v.percentage}%
                          </Box>
                        </Box>
                        <Box className="changeCard" sx={{ p: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "15px",
                              justifyContent: "center",
                            }}
                          >
                            <IconButton
                              onClick={() => {
                                getProductData(v);
                              }}
                            >
                              <ShoppingBag className="productCardIconsHome" />
                            </IconButton>

                            <Favorite className="productCardIconsHome" />
                            <ShoppingBag className="productCardIconsHome" />

                            <IosShare className="productCardIconsHome" />
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                          }}
                        >
                          <Typography sx={{ fontSize: "12px", color: "gray" }}>
                            Decor
                          </Typography>
                          <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                            sx={{ fontSize: "16px" }}
                          />
                        </Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600", mt: 1 }}
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography>

                        <Box sx={{ display: "flex", gap: "15px", mt: 1 }}>
                          <Typography
                            sx={{
                              color: "red",
                              display: v.percentage === 0 ? "none" : "block",
                            }}
                          >
                            $
                            {v.price -
                              Math.round((v.price * v.percentage) / 100)}
                            .00
                          </Typography>
                          <Typography
                            sx={{
                              color: v.percentage === 0 ? "red" : "gray",
                              textDecoration:
                                v.percentage === 0 ? "none" : "line-through",
                            }}
                          >
                            ${v.price}.00
                          </Typography>
                        </Box>
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
  );
}
