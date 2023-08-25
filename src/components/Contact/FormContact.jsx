import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TypeSpecimen } from "@mui/icons-material";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      // Ma'lumotlarni yuborishni bajarish
      console.log("Data submitted:", formData);
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box>
     
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
          type="number"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Send
        </Button>
      </form>
    </Box>
  );
}
