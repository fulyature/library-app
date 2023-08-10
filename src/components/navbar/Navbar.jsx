import React from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
const Navbar = () => {
  return (
    <Nav>
      <Logo>Begum Library</Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>
      <Menu>
        <MenuLink>Home</MenuLink>
        <MenuLink></MenuLink>
        <MenuLink></MenuLink>
        <MenuLink></MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
