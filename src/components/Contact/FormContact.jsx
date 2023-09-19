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
      const token = "6584006100:AAH_2utbVJox7SaK1Uj5TPEHmn_4i-zAnaE";
      const chat_id = -1001844075757;
      let text = `client name: ${formData.name} %0A client email: ${formData.email} %0A client phone ${formData.phone}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      console.log(formData);

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
    <Box sx={{ p: 2 }}>
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
