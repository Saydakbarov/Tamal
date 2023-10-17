import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowX: "scroll",
  height: "100vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export default function BrandBox({ setBrand_id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://front-api.tamal.pro/api/v1/brands?limit=100&offset=0`
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
    <Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          background: "#01466A",
          "&:hover": {
            backgroundColor: "#01466A", // Yoki kerakli rangni qo'shishingiz mumkin
            color: "white",
          },
          color: "white",
        }}
        endIcon={<ArrowDropDown />}
        onClick={handleOpen}
      >
        Бренды
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: "30px" }}>Бренды</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              mt: 3,
            }}
          >
            {productData.map((v) => (
              <Box
                key={v.brand_id}
                sx={{ width: {xs:"120px", sm:"140px", md:"180px", lg:"200px"}, textAlign: "center", cursor: "pointer" }}
                component={"div"}
                onClick={() => {
                  setBrand_id(v.brand_id);
                  handleClose();
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={v.brand_images_url}
                  alt=""
                />
                <Typography sx={{ mt: 1 }}>{v.brand_name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
