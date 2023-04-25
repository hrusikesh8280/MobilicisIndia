import React from "react";
import Apiend1 from "./components/Apiend1";
import Apiend2 from "./components/Apiend2";
import Apiend3 from "./components/Apiend3";
import Apiend4 from "./components/Apiend4";
import Apiend5 from "./components/Apiend5";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Apiend1 />} />
      <Route path="/api2" element={<Apiend2 />} />
      <Route path="/api3" element={<Apiend3 />} />
      <Route path="/api4" element={<Apiend4 />} />
      <Route path="/api5" element={<Apiend5 />} />
      <Route path="/*" element={<h3> 404 Page is Not Found.....</h3>} />
    </Routes>
  );
};

export default AllRoutes;
