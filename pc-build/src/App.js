import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";
import ComputerIcon from "@mui/icons-material/Computer";

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
        <Route path="/PCBuilds" element={<Prebuilt />} />
      </Routes>
    </div>
  );
}

export default App;
