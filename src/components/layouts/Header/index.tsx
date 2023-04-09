import { Container, Nav, NavItem } from "./Header.style";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavItem to="/">Pokedex</NavItem>
        <NavItem to="/liked">Liked</NavItem>
      </Nav>
    </Container>
  );
};

export default Navbar;
