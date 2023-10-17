import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export default function ShopButton({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pay, setPay] = useState("");

  const [delivery, setDelivery] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, address, time } = e.target.elements;

    const token = "6584006100:AAH_2utbVJox7SaK1Uj5TPEHmn_4i-zAnaE";
    const chat_id = -1001844075757;
    let text = "";

    console.log(data);

    data?.forEach((e) => {
      text =
        text +
        `{ %0A protuct name: ${e.product_title_ru}; %0A category name: ${e.category_name_ru} %0A count: ${e.count} %0A }, %0A `;
    });

    text =
      text +
      `client name: ${name.value} %0A client number: ${phone.value} %0A client address: ${address.value} %0A payment: ${pay} %0A delivery: ${delivery} %0A delivery time: ${time.value}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    try {
      const res = await axios.post(
        "https://front-api.tamal.pro/api/v1/order/add",
        {
          order_name: name.value,
          order_phone: phone.value,
          order_payment_type: pay,
          order_delivery: delivery,
          order_address: address.value,
          order_time: time.value,
          products: data,
        }
      );
      handleClose();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        fullWidth
        sx={{
          background: "none",
          color: "#01476B",
          "&:hover": {
            backgroundColor: "#01476B",
            color: "white", // Yoki kerakli rangni qo'shishingiz mumkin
          },
          display: "inline-block",
          margin: "5px",
          p: 1,
          border: "2px solid #01476B",
          fontSize: "18px",
        }}
        onClick={handleOpen}
      >
        Buy now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Оформить Заказ
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Address"
              name="address"
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Time"
              name="time"
              fullWidth
              required
              sx={{ mt: 2 }}
            />

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ display: "flex", gap: "10px" }}
              onClick={(e) => setPay(e.target.value)}
            >
              <Box sx={{ display: "flex", mt: 3 }}>
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="cash"
                />
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Card"
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label="Online"
                />
              </Box>
            </RadioGroup>

            <FormGroup onClick={() => setDelivery(!delivery)}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Delivery"
              />
            </FormGroup>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                background: "black",
                color: "white",
                mt: 2,
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              fullWidth
            >
              Отправлять
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
