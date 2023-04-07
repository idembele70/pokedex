import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/tools/Navbar";
import Home from "./components/pages/Home";
import Liked from "./components/pages/Liked";

const Container = styled.div`
  max-width: 985px;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </Container>
  );
}

export default App;

/* 

 <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </Container>
    
*/
