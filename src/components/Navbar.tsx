import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo_white from '../assets/logo.png'
// import logo_green from '../assets/logo5.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Experiences from './components/Experiences';

export default function Navigation() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home"><Image src={logo_white} width="300" height="auto"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    {/* <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#project/00">Shape Editing app</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Experiences" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#experience/00">Geotab</NavDropdown.Item>
                        <NavDropdown.Item href="#experience/00">Geotab</NavDropdown.Item>
                        <NavDropdown.Item href="#experience/00">Geotab</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <NavbarCollapse>
                
            </NavbarCollapse>
        </Navbar>
    )
}