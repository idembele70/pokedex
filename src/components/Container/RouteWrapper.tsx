import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Liked from "../pages/Liked";
import SearchContextProvider from "../context/SearchContext";

const RouteWrapper = () => {
  return (
    <SearchContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </SearchContextProvider>
  );
};

export default RouteWrapper;
