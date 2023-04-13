import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../styles/responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Container = styled.header`
  padding: 30px 0;
  width: 80vw;
  max-width: 460px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 38px;
  ${mobile({ maxWidth: 308, gap: "10px 25px" })}
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 7px 12%;
  letter-spacing: 0.345rem;
  color: ${({ theme }) => theme.palette.common.black};
  transition: all 350ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    box-shadow: 0 4px 16px -3px ${({ theme }) => theme.palette.common.white};
  }
  &.active {
    box-shadow: ${({ theme }) =>
    `0px 4px 16px -3px ${theme.palette.secondary.main}`};
  }
  ${mobile({ padding: "7px 8%" })}
`;

// ScrollToTop Button
interface ScrollTopBtnProps {
  display: boolean;
}
const ScrollTopBtn = styled.button<ScrollTopBtnProps>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary.darker};
  border: 1px solid ${({ theme }) => theme.palette.primary.darker};
  opacity: ${({ display }) => (display === true ? 1 : 0)};
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 10px;
  padding: 0;
  cursor: pointer;
  transition: all 1s ease;
  visibility: ${({ display }) => display ? "visible" : "hidden"};
  z-index: 5;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.darker};
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(83, 118, 252, 0.5);
  }
`;
const ScrollTopBtnIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.5rem;
`
export {
  Container,
  Nav,
  NavItem,
  ScrollTopBtn,
  ScrollTopBtnIcon,
}