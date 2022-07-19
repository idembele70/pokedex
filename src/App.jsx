import styled from "styled-components";
import Cards from "./components/card";
import PokemonsSuggest from "./components/PokemonsSuggest";
import InputContainer from "./components/tools/InputContainer";
import Navbar from "./components/tools/Navbar";

const Container = styled.div`
  max-width: 985px;
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
      <InputContainer />
      <PokemonsSuggest />
    </Container>
  );
}

export default App;
