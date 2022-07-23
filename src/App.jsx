import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/tools/Navbar";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

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
        <Route path="/pokedex" element={<Home />} />
        <Route path="/pokedex/liked" element={<Liked />} />
      </Routes>
    </Container>
  );
}

export default App;
