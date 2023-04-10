import React from "react";
import { Container, Spinner } from "./Loader.style";

type StateLoadingProps = {
  opacity: boolean;
};
const Loader: React.FC<StateLoadingProps> = ({ opacity }) => (
  <Container opacity={opacity ? 1 : 0}>
    <Spinner />
  </Container>
);

export default Loader;
