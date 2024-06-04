import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <SNav>
      <SNavLink to={"/movies"}>Movies</SNavLink>
      <SNavLink to={"/users"}>users</SNavLink>
    </SNav>
  );
};

const SNav = styled.nav`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const SNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.6rem;
  color: #554d5d;
  &.active {
    color: #ff6a00;
  }
`;
