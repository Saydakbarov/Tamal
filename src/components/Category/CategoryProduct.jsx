import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../Server";

export default function CategoryProduct({ lang }) {
  const [category, setCategory] = useState([]);

  const [productData, setProductData] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}api/v1/categories`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://front-api.tamal.pro/api/v1/products?limit=10&offset=0"
        );
        return setProductData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  console.log(productData);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
          Our Products
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "gray" }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram
          anteposuerit litterarum formas.
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
        }}
      >
        {category.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.category_name_ru}
            sx={{
              background: v.title === title ? "black" : "gray",
              "&:hover": {
                backgroundColor: "black", // Yoki kerakli rangni qo'shishingiz mumkin
              },
              display: "inline-block",
              margin: "5px",
            }}
            onClick={() => {
              setCategoryId(v.category_id);
              setTitle(v.category_name_ru);
              navigate("/category/subcategory/" + v.category_id);
            }}
          >
            {lang == "ru"
              ? v.category_name_ru
              : lang == "uz"
              ? v.category_name_uz
              : lang == "en"
              ? v.category_name_en
              : ""}
          </Button>
        ))}
      </Box>

      {/* Category Product List Start */}
      <Grid container justifyContent={"center"} gap={4} mt={8}>
        {productData.map((v, i) => (
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
            <Box sx={{}}>
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
                  sx={{ position: "absolute", top: "90%" }}
                >
                  Add to Card
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Category Product List End */}
    </>
  );
}
