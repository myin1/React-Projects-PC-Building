import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";

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
            <Link to="/">
              <ComputerIcon />
            </Link>
          </IconButton>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "white" }}>
              <Link to={page.replace(/\s+/g, "")}>{page}</Link>
            </Button>
          ))}
        </Box>
        <Button sx={{ color: "inherit" }}>FAQ</Button>
      </Toolbar>
    </AppBar>
  );
}
