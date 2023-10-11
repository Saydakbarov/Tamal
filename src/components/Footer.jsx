import {
  Business,
  Email,
  Instagram,
  LinkedIn,
  Phone,
  Telegram,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import TamalLogo from "../tamalLogo.png";
import content from "../Locolization/content";

export default function Footer({ lang }) {
  const navigate = useNavigate();

  console.log(content[lang].header.links);
  return (
    <Box sx={{ mt: 8, background: "#EFF1F3" }}>
      <Grid
        container
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        }}
        alignItems={"center"}
        gap={2}
      >
        <Grid item lg={5} md={7} sm={10}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23974.287870720098!2d69.25198194999999!3d41.3135192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1692882380923!5m2!1sru!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>

        <Grid item lg={3} md={5} sm={7} sx={{ textAlign: "center" }}>
          <img style={{ width: "160px" }} src={TamalLogo} alt="" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 3,
            }}
          >
            {content[lang].header.links.map((v, i) => (
              <Button
                key={v}
                sx={{
                  color: "black",
                  fontWeight: "500",
                  ml: 2,
                  fontSize: "16px",
                  display: "block",
                  width: "130px",
                  margin: "0 auto",
                  fontFamily: "'Jost' !important",
                }}
                onClick={() => navigate(v.path)}
              >
                {v.title}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <IconButton>
              <Telegram />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        <Grid item lg={3} md={7} sm={10} sx={{ background: "#F2F2F2" }}>
          <Box sx={{ p: 3 }}>
            <Typography sx={{ fontSize: "24px" }}>
              {content[lang].contact.contact_card_title}
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", mt: 3 }}>
              {content[lang].contact.contact_card_text}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Business />
                <Typography sx={{ fontWeight: "600" }}>
                  {content[lang].contact.contact_card_address}
                </Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                {content[lang].contact.contact_card_address_text}
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Phone />
                <Typography sx={{ fontWeight: "600" }}>
                  {content[lang].contact.contact_card_phone}
                </Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                {content[lang].contact.contact_card_phone_number}
              </Typography>
              <Typography sx={{ mt: 1, color: "gray", fontSize: "14px" }}>
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  {content[lang].contact.contact_card_phone_office}:
                </span>{" "}
                <br />
                {content[lang].contact.contact_card_phone_office_number}
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Email />
                <Typography sx={{ fontWeight: "600" }}>
                  {content[lang].contact.contact_card_email}
                </Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                {content[lang].contact.contact_card_email_title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
