import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const NotFound = styled.h4`
  font-size: 1.25rem;
  max-width: 90%;
  display: block;
  margin: 110px auto 0;
  text-align: center;
  opacity: 1;
  transition: opacity 350ms linear;
`;
export { Container, Wrapper, NotFound };
