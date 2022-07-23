import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Box,
  ClickAwayListener,
  Collapse,
  IconButton,
  TextField,
  Autocomplete,
} from "@mui/material";

export default function SearchButton(props) {
  const [open, setOpen] = React.useState(false);

  let navigate = useNavigate();

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

  const pages = [
    { label: "", path: "/" },
    { label: "About", path: "/Service" },
  ];

  const [inputValue, setInputValue] = React.useState(pages[0]);

  const inputValueHandler = (event, value) => {
    setInputValue(value);
    navigate(inputValue.path);
  };

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
                value={inputValue}
                options={pages}
                sx={{ width: 200 }}
                onChange={inputValueHandler}
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
