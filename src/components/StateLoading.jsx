import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const LoaderContainer = styled.div`
  //width: 100vw;
  //height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
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
const StateLoading = ({ opacity }) => (
  <LoaderContainer opacity={opacity ? 1 : 0}>
    <Loader />
  </LoaderContainer>
);

StateLoading.propTypes = {
  opactiy: PropTypes.bool,
};
StateLoading.defaultProps = {
  opacity: true,
};
export default StateLoading;
