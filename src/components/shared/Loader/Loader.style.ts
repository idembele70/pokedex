import styled, { keyframes } from "styled-components";

interface ContainerProps {
  opacity: number;
}
const Container = styled.div<ContainerProps>`
  flex: 0 0 100%;
  height: 130px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  opacity: ${(props) => props.opacity};
`;
const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export {
  Container,
  Spinner
}