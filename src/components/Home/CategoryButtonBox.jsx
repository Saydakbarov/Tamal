import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

export default function CategoryButtonBox({
  lang,
  data,
  setCategoryId,
  categoryId,
}) {
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
          display: "flex",
          flexDirection: "column",
          mt: 3,
        }}
      >
        {data.map((v, i) => (
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
