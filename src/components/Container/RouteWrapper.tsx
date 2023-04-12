import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Liked from "../pages/Liked";
import AppContextProvider from "../context/AppContext";

const RouteWrapper = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </AppContextProvider>
  );
};

export default RouteWrapper;
