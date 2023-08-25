import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Search } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  boxShadow: 24,
  p: 2,
  background: "#f2f2f2",
  border: "none",
  borderRadius: "4px",
};

export default function SearchBox() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClose();
    }
  };
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Search />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Search"
            variant="filled"
            onKeyPress={handleKeyPress}
          />
        </Box>
      </Modal>
    </Box>
  );
}
