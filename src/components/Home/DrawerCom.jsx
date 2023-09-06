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

export default function DrawerCom() {
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
            p:2
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

          <SearchBox />
        </Box>
        <List sx={{ width: "240px", p: 2 }}>
          {MenuData.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => navigate(page.path)}>
                <ListItemText sx={{ color: "black !important" }} key={i}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
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
