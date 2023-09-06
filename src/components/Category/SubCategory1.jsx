import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function SubCategory1() {
  const [title, setTitle] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  const [subproductData, setSubProductData] = useState([]);

  const [subCategoryId, setCategoryId] = useState(1);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/subcategories/" + id, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setSubCategory(data.data))
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/products?limit=10&offset=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        category_id: subCategoryId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSubProductData(data.data))
      .catch((e) => console.log(e));
  }, [subCategoryId]);

  console.log(subCategory);

  return (
    <>
      <HeaderMenu />
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          mt: 6,
          pb: 7,
          overflow: "auto",
        }}
      >
        {subCategory.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.sub_category_name_en}
            sx={{
              background: v.sub_category_name_en === title ? "black" : "gray",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
            onClick={() => {
              setCategoryId(v.sub_category_id);
              setTitle(v.sub_category_name_en);
              navigate("/category/subcategory/sub/" + v.sub_category_id);
            }}
          >
            {v.sub_category_name_en}
          </Button>
        ))}
      </Box>
      <Footer />
    </>
  );
}
