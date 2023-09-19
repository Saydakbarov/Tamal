import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MenuData } from "../../data";

import TamalLogo from "../../tamalLogo.png";
import SearchBox from "./SearchBox";
import content from "../../Locolization/content";
import BasketBox from "./BasketBox";

export default function DrawerCom({ lang, setLang, value, setValue }) {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
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

          <SearchBox value={value} setValue={setValue} />
        </Box>

        <List sx={{ width: "240px", p: 2 }}>
          {content[lang].header.links.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => navigate(page.path)}>
                <ListItemText sx={{ color: "black !important" }} key={i}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <BasketBox />

          <Box>
            <select
              defaultValue={lang}
              onChange={(e) => {
                setLang(e.target.value);
                localStorage.setItem("lang", JSON.stringify(e.target.value));
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
      </Drawer>

      <Box sx={{ marginLeft: "auto" }}>
        <IconButton
          sx={{ color: "black" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
