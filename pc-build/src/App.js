import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";
import ComputerIcon from "@mui/icons-material/Computer";
import FAQ from "./pages/FAQ";
import ComputerTypes from "./pages/ComputerTypes";
import EntertainmentPc from "./pages/CompTypePages/EntertainmentPc";
import EditingPc from "./pages/CompTypePages/EditingPc";
import GamingPc from "./pages/CompTypePages/GamingPc";
import ProductionPc from "./pages/CompTypePages/ProductionPc";
import StreamingPc from "./pages/CompTypePages/StreamingPc";
import TheaterPc from "./pages/CompTypePages/TheaterPc";
import VrPc from "./pages/CompTypePages/VrPc";
import Parts from "./pages/Parts";

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
        <Route path="/ComputerTypes" element={<ComputerTypes />}>
          <Route path="Entertainment" element={<EntertainmentPc />} />
          <Route path="Gaming" element={<GamingPc />} />
          <Route path="Streaming" element={<StreamingPc />} />
          <Route path="Production" element={<ProductionPc />} />
          <Route path="Editing" element={<EditingPc />} />
          <Route path="Theater" element={<TheaterPc />} />
          <Route path="Vr" element={<VrPc />} />
        </Route>
        <Route path="/PCBuilds" element={<Prebuilt />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Components" element={<Parts />} />
      </Routes>
    </div>
  );
}

export default App;
