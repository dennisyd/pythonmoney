import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #0044cc;
  padding: 10px;
  color: white;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLinks>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/money">Money</NavLink></li>
        <li><NavLink href="/education">Education</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/contact">Contact</NavLink></li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
