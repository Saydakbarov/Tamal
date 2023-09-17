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
import BASE_URL from "../../Server";
import { ExpandMore } from "@mui/icons-material";

export default function CategoryButtonBox({ lang }) {
  const [categoryButton, setCategoryButton] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}api/v1/categories`);
        return setCategoryButton(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  console.log(categoryButton);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontSize: "22px" }}>Category</Typography>
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
        {categoryButton.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            value={v.category_name_ru}
            sx={{
              background: v.category_id === categoryId ? "#E2FF7F" : "#01466A",
              "&:hover": {
                backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                color: "black",
              },
              display: "inline-block",
              margin: "5px",
              fontSize: "12px",
              color: v.category_id === categoryId ? "black" : "white",
            }}
            onClick={() => {
              setCategoryId(v.category_id);
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
    </Accordion>
  );
}
