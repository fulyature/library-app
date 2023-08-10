import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>Begum Library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink>Home</MenuLink>
        <MenuLink>home</MenuLink>
        <MenuLink>home</MenuLink>
        <MenuLink>home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
