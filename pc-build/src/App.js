import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";
import ComputerIcon from "@mui/icons-material/Computer";
import FAQ from "./pages/FAQ";
import ComputerTypes from "./pages/ComputerTypes";
import Parts from "./pages/Parts";
import AllPc from "./pages/ComponentPages/AllPc";

function WhiteBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ComputerIcon fontSize="large" />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <WhiteBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ComputerTypes" element={<ComputerTypes />}>
          <Route
            index
            element={<h1 style={{ textAlign: "center" }}>Overview</h1>}
          />
          <Route path=":computerType" element={<AllPc />} />
        </Route>
        <Route path="/PCBuilds" element={<Prebuilt />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Components" element={<Parts />} />
      </Routes>
    </div>
  );
}
