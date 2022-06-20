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

export const components = [
  "Motherboard",
  "Power Supply",
  "Storage",
  "CPU",
  "GPU",
  "Memory",
  "Cooling",
  "Case",
];
export const types = [
  "Entertainment",
  "Gaming",
  "Streaming",
  "Production",
  "Editing",
  "Theater",
  "VR",
];
let menu = null;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    menu = id;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ zIndex: 1301 }}>
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
          <Button
            sx={{ color: "inherit", height: "64px" }}
            component={Link}
            to="/Service"
            onMouseEnter={handleClose}
          >
            About
          </Button>
          <Button
            sx={{ color: "inherit", height: "64px" }}
            component={Link}
            to="/PCBuilds"
            onMouseEnter={handleClose}
          >
            PC Builds
          </Button>
          <Button
            id="components-button"
            sx={{ color: "inherit", height: "64px" }}
            component={Link}
            to="/Components"
            onMouseEnter={(event) => handleClick(event, "components-button")}
            endIcon={<ExpandMoreIcon />}
          >
            Components
          </Button>
          <Button
            sx={{ color: "inherit", height: "64px" }}
            component={Link}
            to="/ComputerTypes"
            id="types-button"
            onMouseOver={(event) => handleClick(event, "types-button")}
            endIcon={<ExpandMoreIcon />}
          >
            PC Types
          </Button>
          <Button
            sx={{ color: "inherit", height: "64px" }}
            component={Link}
            to="/FAQ"
            onMouseEnter={handleClose}
          >
            FAQ
          </Button>
          <Menu
            id="components-menu"
            anchorEl={anchorEl}
            open={open && menu === "components-button"}
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
            open={open && menu === "types-button"}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleClose,
            }}
          >
            {types.map((types) => (
              <MenuItem
                onClick={handleClose}
                component={Link}
                to={"/ComputerTypes/" + types}
              >
                {types}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <SearchButton />
        <Button sx={{ color: "inherit", height: "64px" }}>Contact US</Button>
      </Toolbar>
    </AppBar>
  );
}
