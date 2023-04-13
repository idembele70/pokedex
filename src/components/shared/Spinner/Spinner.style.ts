import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from '.';
const Container = styled.div<SpinnerProps>`
position: fixed;
top: 0;
left: 0;
background-color: ${({ theme }) => theme.palette.primary.main};;
  height:100vh;
  width:100vw;
  display:flex;
  align-items:center;
  justify-content: center;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};;
  transition: all 250ms ease;
`;
const load = keyframes`
50%{
  transform: scale(0.7);
}
`
const Pokeball = styled.div`
  width:80%;
  aspect-ratio: 1;
  max-width:250px;
  border: 13px solid #383b4f;
  border-radius: 50%;
  background-image: linear-gradient(#f51939 50%,
  white 50%
  );
  animation: ${load} 1s infinite;
  position: relative;

`;
const PokeballContent = styled.div`
  width: 36%;
  aspect-ratio: 1;
  background-color: #383b4f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
`;
const PokeballContentCenter = styled.div`
  width: 70%;
  height: 70%;
  background-color: ${({ theme }) => theme.palette.common.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
const PokeballContentCenterInner = styled.div`
  width: 50%;
  height: 50%;
  background-color: #383b4f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%
`;
export {
  Container,
  Pokeball,
  PokeballContent,
  PokeballContentCenter,
  PokeballContentCenterInner
}