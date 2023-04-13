import React from "react";
import {
  Container,
  Pokeball,
  PokeballContent,
  PokeballContentCenter,
  PokeballContentCenterInner,
} from "./Spinner.style";
export type SpinnerProps = {
  isVisible: boolean;
};
const Spinner: React.FC<SpinnerProps> = ({ isVisible }) => {
  return (
    <Container isVisible={isVisible}>
      <Pokeball>
        <PokeballContent>
          <PokeballContentCenter>
            <PokeballContentCenterInner>
              <PokeballContentCenter />
            </PokeballContentCenterInner>
          </PokeballContentCenter>
        </PokeballContent>
      </Pokeball>
    </Container>
  );
};

export default Spinner;
