import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";
import ComputerIcon from "@mui/icons-material/Computer";
import FAQ from "./pages/FAQ";
import ComputerTypes from "./pages/ComputerTypes";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ComputerIcon fontSize="large" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/ComputerTypes" element={<ComputerTypes />} />
        <Route path="/PCBuilds" element={<Prebuilt />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
