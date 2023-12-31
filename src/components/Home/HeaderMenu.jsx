import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerCom from "./DrawerCom";
import { Menu, Search, Shop } from "@mui/icons-material";
import { MenuData } from "../../data";
import SearchBox from "./SearchBox";
import BasketBox from "./BasketBox";

import TamalLogo from "../../tamalLogo.png";
import content from "../../Locolization/content";

export default function HeaderMenu({ lang, setLang, value, setValue }) {
  const navigate = useNavigate();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "20px 30px",
            lg: "20px 30px",
          },
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid white",
            padding: "0px !important",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMatch ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "150px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/")}
                  src={TamalLogo}
                  alt=""
                />
                <DrawerCom
                  lang={lang}
                  setLang={setLang}
                  value={value}
                  setValue={setValue}
                />
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {content[lang].header.links.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "black",
                        ml: 2,
                        fontFamily: "'Jost' !important",
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "150px",
                      cursor: "pointer",
                      marginLeft: "-230px",
                    }}
                    onClick={() => navigate("/")}
                    src={TamalLogo}
                    alt=""
                  />
                </Box>

                <Box sx={{ color: "black" }}>
                  <IconButton sx={{ color: "black" }}>
                    <SearchBox lang={lang} value={value} setValue={setValue} />
                  </IconButton>
                  <IconButton sx={{ color: "black" }}>
                    <BasketBox lang={lang} />
                  </IconButton>
                  <select
                    defaultValue={lang}
                    onChange={(e) => {
                      setLang(e.target.value);
                      localStorage.setItem(
                        "lang",
                        JSON.stringify(e.target.value)
                      );
                    }}
                    style={{
                      border: "none",
                      outline: "none",
                      padding: "5px 10px",
                      textTransform: "uppercase",
                      background: "none",
                    }}
                  >
                    <option value="ru">ru</option>
                    <option value="en">en</option>
                    <option value="uz">uz</option>
                  </select>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}
