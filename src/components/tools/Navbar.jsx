import React from 'react'
import styled from 'styled-components';
import { mobile } from './responsive';

const Container = styled.header`
  margin-top: 30px;
  width:80vw;
  max-width: 460px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 38px;
  ${mobile({ maxWidth: 308, gap: "10px 25px" })}
`

const Button = styled.nav`
  cursor: pointer;
  font-size: 14px;
  line-height:16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 18px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 16px -3px rgba(0,0,0,0.15);
  padding: 7px 12%;
  letter-spacing: 0.345rem;
  color: #000000;
  transition: all 350ms linear;
  &:hover {
    background-color:rgba(0,0,0,0.15);
    box-shadow:0 4px 16px -3px #FFFFFF;
  }
  ${mobile({ padding: "7px 8%" })}
`

const Navbar = () => {
  return (
    <Container>

      <Button>Pokedex</Button>
      <Button>Liked</Button>

    </Container>
  )
}

export default Navbar
