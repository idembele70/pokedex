import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Liked from "../pages/Liked";
import AppContextProvider from "../context/AppContext";
import Spinner from "../shared/Spinner";
import Navbar from "../layouts/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const RouteWrapper = () => {
  const { pathname } = useLocation();
  // loader between route changes
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);
  return (
    <AppContextProvider>
      <Spinner isVisible={loading} />
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="liked/" element={<Liked />} />
          </Routes>
        </>
      )}
    </AppContextProvider>
  );
};

export default RouteWrapper;
