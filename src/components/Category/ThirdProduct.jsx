import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import { KeyboardArrowRight, ShoppingBag } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import BASE_URL from "../../Server";
import axios from "axios";
import content from "../../Locolization/content";
import { toast } from "react-toastify";

export default function ThirdProduct({ lang, basket, setBasket }) {
  const [thirdProductData, setThirdProductData] = useState([]);

  const [offset, setOffset] = useState(0);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://front-api.tamal.pro/api/v1/products?limit=6&offset=${offset}&thirdsubcategory_id=` +
            id
        );
        return setThirdProductData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  const message = content[lang].home.home_toast;
  const basketData = JSON.parse(localStorage.getItem("data")) || [];

  const showToastMessage = () => {
    if (basketData.length !== 0) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <HeaderMenu lang={lang} />
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
        {thirdProductData?.map((v, i) => (
          <Grid
            item
            lg={2.6}
            md={5}
            sm={8}
            xs={11}
            sx={{
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              p: 2,
              borderRadius: "6px",
              position: "relative",
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "300px",
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

              <Box sx={{ mt: 4, pt: 5, width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{ position: "absolute", top: "90%", fontWeight: "bold" }}
                  onClick={() => {
                    setBasket((prevData) => [v, ...prevData]);
                    localStorage.setItem("data", JSON.stringify(basket));
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
          </Grid>
        ))}

        {thirdProductData?.length === 0 ? (
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
          disabled={thirdProductData?.length >= 6 ? false : true}
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
