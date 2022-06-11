import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SearchButton from "./SearchButton";

const pages = ["PC Builds", "Components", "PC Types"];

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            disableRipple="True"
          >
            <ComputerIcon />
          </IconButton>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "white" }}>
              {page}
            </Button>
          ))}
        </Box>
        <Button sx={{ color: "inherit" }}>FAQ</Button>
      </Toolbar>
    </AppBar>
  );
}
