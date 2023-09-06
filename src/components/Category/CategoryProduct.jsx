import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryProduct() {
  const [category, setCategory] = useState([]);

  const [productData, setProductData] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/categories", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/products?limit=10&offset=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        category_id: categoryId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setProductData(data.data))
      .catch((e) => console.log(e));
  }, [categoryId]);

  console.log(categoryId);

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
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          mt: 6,
          pb: 7,
          overflow: "scroll",
        }}
      >
        {category.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.category_name_en}
            // sx={{ background: v.title === productTitle ? "black" : "gray" }}
            sx={{
              background: v.title === title ? "black" : "gray",
              "&:hover": {
                backgroundColor: "black", // Yoki kerakli rangni qo'shishingiz mumkin
              },
            }}
            onClick={() => {
              setCategoryId(v.category_id);
              setTitle(v.category_name_en);
              navigate("/category/subcategory/" + v.category_id);
            }}
          >
            {v.category_name_en}
          </Button>
        ))}
      </Box>
    </>
  );
}
