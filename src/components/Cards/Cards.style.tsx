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
interface NotFoundProps {
  notFoundOpacity: number;
}
const NotFound = styled.h4<NotFoundProps>`
  margin-top: 110px;
  text-align: center;
  opacity: ${({ notFoundOpacity }) => notFoundOpacity};
  transition: opacity 350ms linear;
`;
export { Container, Wrapper, NotFound };
