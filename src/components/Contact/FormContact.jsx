import { Box } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import content from "../../Locolization/content";

export default function FormContact({ lang }) {
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
          label={content[lang].contact.contact_form_input_name}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label={content[lang].contact.contact_card_email}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label={content[lang].contact.contact_card_phone}
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
          {content[lang].button.send}
        </Button>
      </form>
    </Box>
  );
}
