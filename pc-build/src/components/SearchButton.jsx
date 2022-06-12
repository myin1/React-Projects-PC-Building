import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
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

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Collapse orientation="horizontal" in={open}>
          <div>
            <TextField
              id="search"
              variant="standard"
              label="Search..."
              color="info"
              sx={{
                input: { color: "white" },
                borderColor: "white",
                color: "white",
              }}
            />
          </div>
        </Collapse>
        <IconButton color="inherit" edge="start" onClick={handleChange}>
          <SearchIcon fontSize="large" />
        </IconButton>
        <Button sx={{ color: "inherit" }} variant="outlined">
          Contact US
        </Button>
      </Box>
    </ClickAwayListener>
  );
}
