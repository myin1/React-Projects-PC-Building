import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  ClickAwayListener,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";

export default function SearchButton() {
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Collapse orientation="horizontal" in={open}>
          <div>
            <ThemeProvider theme={darkTheme}>
              <TextField
                id="search"
                variant="standard"
                label="Search..."
                color="info"
              />
            </ThemeProvider>
          </div>
        </Collapse>
        <IconButton color="inherit" edge="start" onClick={handleChange}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </Box>
    </ClickAwayListener>
  );
}
