import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header_Category_1 from "../../images/headerCategory/Бетонформирующие_материалы.png";
import Header_Category_2 from "../../images/headerCategory/Генераторы.png";
import Header_Category_3 from "../../images/headerCategory/Кровля.png";
import Header_Category_4 from "../../images/headerCategory/Маталлопрокат.png";
import Header_Category_5 from "../../images/headerCategory/Окнарамы.png";
import Header_Category_6 from "../../images/headerCategory/Электростанция.png";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  return (
    <Box>
      <Grid container justifyContent={"center"} gap={4} sx={{ mt: 8 }}>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url(${Header_Category_1})`,
              width: "100%",
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              Бетонформирующие <br /> материалы
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Header_Category_5}')`,
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          >
            <Typography sx={{ fontWeight: "600", color: "white" }}>
              Окна рамы
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url('${Header_Category_6}')`,
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundSize: "100%",
              backgroundPosition: "center",
              mt: 3,
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Электростанция</Typography>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Header_Category_2}')`,
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              borderRadius: "3px",
              p: 2,
              backgroundPosition: "bottom",
              backgroundSize: "80%",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Генераторы</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url('${Header_Category_3}')`,
              width: "100%",
              height: "200px",
              backgroundRepeat: "no-repeat",
              borderRadius: "3px",
              p: 2,
              backgroundPosition: "bottom",
              backgroundSize: "80%",

              mt: 3,
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Кровля</Typography>
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Header_Category_4}')`,
              width: "100%",
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundPosition: "bottom",
              backgroundSize: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Маталлопрокат</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
