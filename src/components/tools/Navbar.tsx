import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../utils/responsive";

const Container = styled.header`
  margin-top: 30px;
  margin-bottom: 30px;
  flex-grow: 90px;
  width: 80vw;
  max-width: 460px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 38px;
  ${mobile({ maxWidth: 308, gap: "10px 25px" })}
`;

interface ButtonProps {
  isactive: boolean;
}

const Button = styled.nav<ButtonProps>`
  cursor: pointer;
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
  box-shadow: ${({ isactive, theme }) =>
    isactive ? `0px 4px 16px -3px ${theme.palette.secondary.main}` : ""};
  ${mobile({ padding: "7px 8%" })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (link: string) => {
    navigate(`/pokedex/${link}`);
  };
  const [isActive, setIsActive] = useState("home");
  useEffect(() => {
    if (location.pathname === "/") setIsActive("home");
    else setIsActive("liked");
  }, [location]);
  return (
    <Container>
      <Button isactive={isActive === "home"} onClick={() => handleNavigate("")}>
        Pokedex
      </Button>
      <Button
        isactive={isActive === "liked"}
        onClick={() => handleNavigate("liked")}
      >
        Liked
      </Button>
    </Container>
  );
};

export default Navbar;
