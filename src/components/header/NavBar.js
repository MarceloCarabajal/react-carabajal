import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
            <LinkContainer to = "/home">      
            <Navbar.Brand href="/home">MStar</Navbar.Brand>
            </LinkContainer > 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">              
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                    <NavLink to="action/3.1"><NavDropdown.Item> Producto1 </NavDropdown.Item></NavLink>
                    <NavDropdown.Item href="#action/3.2"> Producto2 </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> Producto3 </NavDropdown.Item>
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
