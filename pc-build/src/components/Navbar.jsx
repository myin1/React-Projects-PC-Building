import * as React from "react";
import { Link } from "react-router-dom";
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
const components = [
  "Motherboard",
  "Power Supply",
  "Storage",
  "CPU",
  "GPU",
  "Memory",
  "Cooling",
  "Case",
];
const types = [
  "Entertainment",
  "Gaming",
  "Streaming",
  "Production",
  "Editing",
  "Theather",
  "VR",
];
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
            component={Link}
            to="/"
          >
            <ComputerIcon />
          </IconButton>

          {pages.map((page) => (
            <Button
              key={page}
              onMouseOver={(event) => handleClick(event, page)}
              sx={{ color: "inherit" }}
              component={Link}
              to={page.replace(/\s+/g, "")}
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
            {components.map((components) => (
              <MenuItem
                onClick={handleClose}
                component={Link}
                to={components.replace(/\s+/g, "")}
              >
                {components}
              </MenuItem>
            ))}
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
            {types.map((types) => (
              <MenuItem onClick={handleClose} component={Link} to={types}>
                {types}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <SearchButton />
      </Toolbar>
    </AppBar>
  );
}
