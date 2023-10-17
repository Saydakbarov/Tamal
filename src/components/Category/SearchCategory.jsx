import { Box, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Search } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   boxShadow: 24,
//   p: 2,
//   background: "#f2f2f2",
//   border: "none",
//   borderRadius: "4px",
// };

export default function SearchCategory({ value, setValue, lang }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClose();
    }
  };

  useEffect(() => {
    async function getData() {
      const res = axios.get(
        `https://front-api.tamal.pro/api/v1/products?limit=10&offset=0&${
          lang == "uz"
            ? "search_uz="
            : lang === "en"
            ? "search_en="
            : "search_ru"
        }=${value}`
      );
    }
    getData();
  }, [value]);
  return (
    <Box sx={{ width: "77%" }}>
      <TextField
        fullWidth
        id="filled-basic"
        label="Search"
        variant="filled"
        onKeyPress={handleKeyPress}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Box>
  );
}
