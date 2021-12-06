import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'


const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">      
            <Navbar.Brand href="#home">MStar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mantenimiento de PC</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Reparación de PC</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Instalación de softwares</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
                <Nav>
                
                <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
