import "./App.css";
import { Route, Routes } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SearchButton from "./components/SearchButton";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";

function App() {
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={4} />
        <Grid
          item
          sx={{
            textAlign: "center",
            my: "auto",
          }}
          xs={4}
        >
          LOGO
        </Grid>
        <Grid item xs={4}>
          <SearchButton />
        </Grid>
      </Grid>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/PCBuilds" element={<Prebuilt />} />
      </Routes>
    </div>
  );
}

export default App;
