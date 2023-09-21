import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SubCategoryButton({ lang, data }) {
  const [categoryButton, setCategoryButton] = useState([]);

  const navigate = useNavigate();

  const [categoryId, setCategoryId] = useState(1);

  console.log(categoryButton);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontSize: "22px" }}>Sub Category</Typography>
      </AccordionSummary>

      <Box
        sx={{
          // overflowX: "scroll",
          // whiteSpace: "nowrap",
          // scrollbarWidth: "none",
          // mt: 2,
          display: "flex",
          flexDirection: "column",
          mt: 3,
        }}
      >
        {data.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.sub_category_name_ru}
            sx={{
              background:
                v.sub_category_id === categoryId ? "#E2FF7F" : "#01466A",
              "&:hover": {
                backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                color: "black",
              },
              display: "inline-block",
              margin: "5px",
              fontSize: "12px",
              color: v.sub_category_id === categoryId ? "black" : "white",
            }}
            onClick={() => {
              setCategoryId(v.sub_category_id);
              navigate("/product/subcategory/sub/" + v.sub_category_id);
            }}
          >
            {lang == "ru"
              ? v.sub_category_name_ru
              : lang == "uz"
              ? v.sub_category_name_uz
              : lang == "en"
              ? v.sub_category_name_en
              : ""}
          </Button>
        ))}
      </Box>
    </Accordion>
  );
}
