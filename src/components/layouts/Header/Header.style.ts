import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

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

export {
  Container,
  Nav,
  NavItem
}