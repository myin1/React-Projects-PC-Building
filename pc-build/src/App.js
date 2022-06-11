import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prebuilt from "./pages/Prebuilt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pre-Built" element={<Prebuilt />} />
    </Routes>
  );
}

export default App;
