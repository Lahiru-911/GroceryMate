import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Inventory from "../Pages/Inventory";
import Recommendations from "../Pages/Recommendations";
import About from "../Pages/About";
import Register from "../Pages/Register";
import DataForm from "../Pages/DataForm";
import Connect from "../Pages/Orders";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/connect" element={<Connect/>} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dataForm" element={<DataForm/>} />
    </Routes>
  );
};

export default AppRouter;
