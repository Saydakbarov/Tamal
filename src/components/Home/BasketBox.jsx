import { Badge, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import { Shop } from "@mui/icons-material";
import ProductsCard from "./ProductsCard";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  boxShadow: 24,
  p: 2,
  background: "#f2f2f2",
  border: "none",
  borderRadius: "4px",
};
export default function BasketBox() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const productData = useSelector((state) => state.products);

  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Badge
          badgeContent={data.length !== 0 ? data.length : 0}
          color="primary"
        >
          <Shop color="action" />
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* {data.length === 0 ? ( */}
          <Typography sx={{ fontSize: "34px", textAlign: "center" }}>
            Ma'lumot Yo'q
          </Typography>
          {/* ) : ( */}
          <ProductsCard data={data} />
          {/* )} */}
        </Box>
      </Modal>
    </Box>
  );
}
