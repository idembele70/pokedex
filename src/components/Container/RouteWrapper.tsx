import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Liked from "../pages/Liked";

const RouteWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </>
  );
};

export default RouteWrapper;
