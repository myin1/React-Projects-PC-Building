import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  ClickAwayListener,
  Collapse,
  IconButton,
  TextField,
  Autocomplete,
} from "@mui/material";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The God", year: 1999 },
];

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
              <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="search"
                    variant="standard"
                    label="Search..."
                    color="info"
                  />
                )}
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
