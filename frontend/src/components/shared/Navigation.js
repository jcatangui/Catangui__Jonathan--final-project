import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
// import "../shared/Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <NavbarBrand href="">Jonathan Catangui</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <NavItem>
              <NavLink tag={RouteLink} to="/">
                Home
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={RouteLink} to="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/entries">
                Entries
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
