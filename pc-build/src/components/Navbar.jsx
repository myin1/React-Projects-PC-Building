import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Drawer, IconButton } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SearchButton from "./SearchButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const links = [
  {
    name: "About",
    path: "/Service",
  },
  {
    name: "PC Builds",
    path: "/PCBuilds",
  },
  {
    name: "Components",
    path: "/Components",
  },
  {
    name: "PC Types",
    path: "/ComputerTypes",
  },
  {
    name: "FAQ",
    path: "/FAQ",
  },
];
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

  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    menu = id;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ zIndex: { md: "1301" } }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleMenu}
            component={Link}
            to="/"
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="left" open={isOpen} onClose={handleCloseMenu}>
            <Box width="200px" role="presentation" style={{ zIndex: 1302 }}>
              <List>
                {links.map((link) => (
                  <ListItem disablePadding>
                    <ListItemButton component="a" href={link.path}>
                      <ListItemText primary={link.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
        <Button
          sx={{ color: "inherit", height: "64px" }}
          component={Link}
          to={"Contact"}
        >
          Contact US
        </Button>
      </Toolbar>
    </AppBar>
  );
}
