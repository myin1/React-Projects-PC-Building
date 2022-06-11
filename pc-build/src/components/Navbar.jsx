import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SearchButton from "./SearchButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = ["PC Builds", "Components", "PC Types", "FAQ"];
let menu = null;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, key) => {
    setAnchorEl(event.currentTarget);
    menu = key;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Button
              key={page}
              onMouseEnter={(event) => handleClick(event, page)}
              sx={{ color: "inherit" }}
            >
              {page}
            </Button>
          ))}
          <Menu
            id="components-menu"
            anchorEl={anchorEl}
            open={open && menu === "Components"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleClose,
            }}
          >
            <MenuItem onClick={handleClose}>Motherboard</MenuItem>
            <MenuItem onClick={handleClose}>Power Supply</MenuItem>
            <MenuItem onClick={handleClose}>Storage</MenuItem>
            <MenuItem onClick={handleClose}>CPU</MenuItem>
            <MenuItem onClick={handleClose}>GPU</MenuItem>
            <MenuItem onClick={handleClose}>RAM</MenuItem>
            <MenuItem onClick={handleClose}>Cooling</MenuItem>
            <MenuItem onClick={handleClose}>Case</MenuItem>
          </Menu>
          <Menu
            id="pcType-menu"
            anchorEl={anchorEl}
            open={open && menu === "PC Types"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleClose,
            }}
          >
            <MenuItem onClick={handleClose}>Entertainment</MenuItem>
            <MenuItem onClick={handleClose}>Gaming</MenuItem>
            <MenuItem onClick={handleClose}>Streaming</MenuItem>
            <MenuItem onClick={handleClose}>Production</MenuItem>
            <MenuItem onClick={handleClose}>Editing</MenuItem>
            <MenuItem onClick={handleClose}>Theather</MenuItem>
            <MenuItem onClick={handleClose}>VR</MenuItem>
          </Menu>
        </Box>
        <SearchButton />
      </Toolbar>
    </AppBar>
  );
}
