import React from "react";
import SearchIcon from "@mui/icons-material/Search";
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

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "flex-start",
          color: "white",
        }}
      >
        <IconButton onClick={handleChange}>
          <SearchIcon fontSize="large" />
        </IconButton>
        <div>
          <Collapse orientation="horizontal" in={open}>
            <TextField
              id="search"
              variant="standard"
              label="Search..."
              sx={{ mb: 1 }}
            />
          </Collapse>
        </div>
      </Box>
    </ClickAwayListener>
  );
}
