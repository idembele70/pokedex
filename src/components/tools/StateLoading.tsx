import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

interface LoaderContainerProps {
  opacity: number;
}
const LoaderContainer = styled.div<LoaderContainerProps>`
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
const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
type StateLoadingProps = {
  opacity: boolean;
};
const StateLoading: React.FC<StateLoadingProps> = ({ opacity }) => (
  <LoaderContainer opacity={opacity ? 1 : 0}>
    <Loader />
  </LoaderContainer>
);

export default StateLoading;
