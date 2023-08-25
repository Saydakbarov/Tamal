import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "./FormContact";
import { Business, Email, Phone } from "@mui/icons-material";

export default function ContactCompany() {
  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23974.287870720098!2d69.25198194999999!3d41.3135192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1692882380923!5m2!1sru!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        gap={9}
        mt={10}
        alignItems={"center"}
      >
        <Grid item lg={6} md={6} sm={10} xs={11}>
          <Typography sx={{ fontSize: "24px" }}>
            {" "}
            Tell Us Your Message
          </Typography>
          <FormContact />
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={11} sx={{ background: "#F2F2F2" }}>
          <Box sx={{ p: 3 }}>
            <Typography sx={{ fontSize: "24px" }}>Contact Us</Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", mt: 3 }}>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Business />
                <Typography sx={{ fontWeight: "600" }}>Address</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                123 Main Street, Anytown, CA 12345 - USA
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Phone />
                <Typography sx={{ fontWeight: "600" }}>Phone</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                Mobile: (08) 123 456 789
              </Typography>
              <Typography sx={{ mt: 1, color: "gray", fontSize: "14px" }}>
                Hotline: 1009 678 456
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Email />
                <Typography sx={{ fontWeight: "600" }}>Email</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                yourmail@domain.com
              </Typography>
              <Typography sx={{ mt: 1, color: "gray", fontSize: "14px" }}>
                support@hastech.company
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
