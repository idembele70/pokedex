import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/layouts/Header";
import RouteWrapper from "./components/Container/RouteWrapper";
const Container = styled.div`
  max-width: 985px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
`;

function App() {
  return (
    <Container>
      <RouteWrapper />
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
