


// import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css"; // Ensure the path is correct
import { useSelector } from "react-redux";

const Header = () => {

  const {Role} = useSelector((state)=>state.A_login)
  // const [register, setRegister] = useState("Registration");
  return (
    <div className="bg-light w-100">
      <Navbar expand="md" variant="light" className="container-fluid p-3">
        <Navbar.Brand className="brand"  href={Role === "user" ? "./usertask" : Role==="admin" ? "./Admin_dashboard" : "./login"}>
         Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="./login">
              Home
            </Nav.Link>
            
          </Nav>

          <Nav className="ms-auto">
            {Role  ? (
              <Nav.Link className="link" href="./login">
              LogOut
            </Nav.Link>
            ) : (
              <Nav.Link className="link" href="./login">
              Login
            </Nav.Link>
            )}
           
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
