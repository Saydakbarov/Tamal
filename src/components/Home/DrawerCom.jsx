import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,

} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import "./Styles/Drawer.css";

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
        <List sx={{ width: "240px", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              pb: 1,
              zIndex: "9999",
            }}
          >
            <img
              style={{ width: "150px", cursor: "pointer" }}
              src="https://www.linkpicture.com/q/logo-removebg-preview-2_1.png"
              alt=""
            />
          </Box>
          {/* {PAGES.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => navigate(page.path)}>
                <ListItemText sx={{ color: "black !important" }} key={i}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
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
