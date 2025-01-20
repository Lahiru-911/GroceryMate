import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Inventory from "../Pages/Inventory";
import Orders from "../Pages/Orders";
import Recommendations from "../Pages/Recommendations";
import About from "../Pages/About";
import Register from "../Pages/Register";
import DataForm from "../Pages/DataForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dataForm" element={<DataForm/>} />
    </Routes>
  );
};

export default AppRouter;
