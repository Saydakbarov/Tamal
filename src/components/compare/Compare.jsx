import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Footer";
import content from "../../Locolization/content";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Compare({ lang, setLang, value, setValue }) {
  const compareData = JSON.parse(localStorage.getItem("compare" || []));

  return (
    <Box>
      <HeaderMenu
        lang={lang}
        setLang={setLang}
        setValue={setValue}
        value={value}
      />

      <Grid justifyContent={"start"}>
        <Grid
          item
          lg={8}
          md={8}
          sm={11}
          xs={11}
          sx={{
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            p: 2,
            justifyContent: "center",
          }}
          // key={v.product_id}
          component={"div"}
        >
          {compareData?.map((v, i) => (
            <Box
              sx={{
                width: { xs: "430px", sm: "350px", md: "300px" },
                position: "relative",
                height: "500px",
                p: 2,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              component={"div"}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                  src={v.product_image_url}
                  alt=""
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "600", fontSize: "18px", mt: 2 }}>
                  {lang == "ru"
                    ? v.product_title_ru
                    : lang == "uz"
                    ? v.product_title_uz
                    : lang == "en"
                    ? v.product_title_en
                    : ""}
                </Typography>
                <Typography sx={{ mt: 2, fontSize: "14px" }}>
                  {lang == "ru"
                    ? v.product_information_ru?.split(" ").length > 10
                      ? v.product_information_ru
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_ru
                    : lang == "uz"
                    ? v.product_information_uz?.split(" ").length > 10
                      ? v.product_information_uz
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_uz
                    : lang == "en"
                    ? v.product_information_en?.split(" ").length > 10
                      ? v.product_information_en
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ") + "..."
                      : v.product_information_en
                    : ""}
                </Typography>
              </Box>
            </Box>
          ))}

          {compareData?.length === 0 ? (
            <Typography
              sx={{
                textAlign: "center",
                color: "red",
                fontSize: "20px",
                fontFamily: "Inter",
              }}
            >
              No result
            </Typography>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Бренд</StyledTableCell>
                <StyledTableCell align="center">Страна</StyledTableCell>
                <StyledTableCell align="center">Производитель</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compareData?.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.brand_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {content[lang] === "en"
                      ? row.product_country_en
                      : content[lang] === "ru"
                      ? row.product_country_ru
                      : row.product_country_uz}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.brand_name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Footer lang={lang} />
    </Box>
  );
}
