import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import { Grade, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BASE_URL from "../../Server";
import axios from "axios";
import CategoryButtonBox from "../Home/CategoryButtonBox";
import SubCategoryButton from "./ResponsiveCategoryBox/SubCategoryButtonBox";

export default function SubCategory1({
  lang,
  basket,
  setBasket,
  value,
  setValue,
}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [title, setTitle] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  const [subproductData, setSubProductData] = useState([]);

  const [subCategoryId, setCategoryId] = useState(1);
  const { id } = useParams();

  const navigate = useNavigate();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}api/v1/subcategories/` + id, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setSubCategory(data.data))
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    async function postId() {
      try {
        const res = await axios.get(
          `${BASE_URL}api/v1/products?limit=6&offset=${offset}&category_id=${id}`
        );
        return setSubProductData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    postId();
  }, [id, offset]);

  console.log(id);

  console.log(subCategory);

  return (
    <>
      <HeaderMenu lang={lang} value={value} setValue={setValue} />
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

      <Box>
        {/* Sub Category Product List Start */}
        <Grid container justifyContent={"center"} gap={4} mt={8}>
          <Grid
            item
            lg={2.4}
            md={3}
            sm={10}
            xs={10}
            sx={{
              p: 2,
              borderRadius: "6px",
            }}
          >
            {isMatch ? (
              <SubCategoryButton data={subCategory} lang={lang} />
            ) : (
              <>
                <Typography sx={{ fontSize: "22px" }}>Category</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                  }}
                >
                  {subCategory.map((v, i) => (
                    <Button
                      key={i}
                      variant="contained"
                      value={v.sub_category_name_en}
                      sx={{
                        background:
                          v.category_id === subCategoryId
                            ? "#E2FF7F"
                            : "#01466A",
                        "&:hover": {
                          backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                          color: "black",
                        },
                        display: "inline-block",
                        margin: "5px",
                        fontSize: "12px",
                        color:
                          v.sub_category_id === subCategoryId
                            ? "black"
                            : "white",
                      }}
                      onClick={() => {
                        setCategoryId(v.sub_category_id);
                        setTitle(v.sub_category_name_en);
                        navigate(
                          "/product/subcategory/sub/" + v.sub_category_id
                        );
                      }}
                    >
                      {v.sub_category_name_ru}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={11}
            sx={{
              p: 2,
              borderRadius: "6px",
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {subproductData?.map((v, i) => (
              <Box
                sx={{
                  width: { xs: "430px", sm: "350px", md: "300px" },
                  position: "relative",
                  height: "580px",
                  p: 2,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
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
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}
                  >
                    {lang == "ru"
                      ? v.product_title_ru
                      : lang == "uz"
                      ? v.product_title_uz
                      : lang == "en"
                      ? v.product_title_en
                      : ""}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", mt: 2, color: "gray" }}>
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
                    position: "absolute",
                    bottom: "8%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ position: "absolute", top: "90%" }}
                    onClick={() => {
                      setBasket((prevData) => [v, ...prevData]);
                      localStorage.setItem("data", JSON.stringify(basket));
                    }}
                  >
                    Add to Card
                  </Button>
                </Box>
              </Box>
            ))}

            {subproductData?.length === 0 ? (
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
            disabled={subproductData?.length >= 6 ? false : true}
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
      </Box>
      <Footer />
    </>
  );
}
