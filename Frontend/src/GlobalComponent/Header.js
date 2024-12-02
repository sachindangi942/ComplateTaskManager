


import { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./style.css"; // Ensure the path is correct

const Header = () => {
  const [register, setRegister] = useState("Registration");
  return (
    <div className="bg-light w-100">
      <Navbar expand="md" variant="light" className="container-fluid">
        <Navbar.Brand className="brand" href="./dashboard">
         Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="./login">
              Home
            </Nav.Link>
            {/* <Nav.Link className="link" href="./contact">
              Contact
            </Nav.Link> */}
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link className="link" href="./registration">
              {register}
            </Nav.Link>
            <Nav.Link className="link" href="./login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
