import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutCompany() {
  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Grid container justifyContent={"center"} gap={8}>
        <Grid
          item
          lg={4.3}
          md={8}
          sm={10}
          xs={12}
          sx={{
            backgroundImage:
              "url('https://htmldemo.net/eposi/eposi/assets/img/banners/img2-middle-eposi1.webp')",
            minHeight: "400px",
          }}
        ></Grid>
        <Grid item lg={7} md={7} sm={10} xs={12} sx={{ padding: "0px 20px" }}>
          <Typography sx={{ fontSize: "34px", fontWeight: "600" }}>
            WELCOME TO <span style={{ color: "red" }}>Tamal</span>.
          </Typography>
          <Typography sx={{ color: "gray", mt: 5 }}>
            Eposi provide how all this mistaken idea of denouncing pleasure and
            sing pain was born an will give you a complete account of the
            system, and expound the actual teachings of the eat explorer of the
            truth, the mer of human.
          </Typography>
          <Typography sx={{ fontSize: "22px", fontWeight: "550", mt: 4 }}>
            WIN BEST ONLINE SHOP AT 2019
          </Typography>
          <Typography sx={{ color: "gray", mt: 3 }}>
            Eposi provide how all this mistaken idea of denouncing pleasure and
            sing pain was born an will give you a complete account of the
            system, and expound the actual teachings of the eat explorer of the
            truth, the mer of human.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
