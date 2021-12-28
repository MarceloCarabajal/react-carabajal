import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {

    return (
      <nav>
        <button className="nav-button">Menú</button>
        <NavLink to="/" className="nav-enlace">MStar</NavLink>
        <NavLink to="/productos" className="nav-enlace">Productos</NavLink>
        <NavLink to="/categoria/1" className="nav-enlace">Categoría 1</NavLink>
        <NavLink to="/categoria/2" className="nav-enlace">Categoría 2</NavLink>
        <NavLink to="/carrito" className="nav-enlace"><CartWidget></CartWidget></NavLink>
      </nav>

      // // // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      // // //     <LinkContainer to = "/">
      // // //     <Navbar.Brand href="/home">MStar</Navbar.Brand>
      // // //     </LinkContainer >
      // // //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      // // //     <Navbar.Collapse id="responsive-navbar-nav">
      // // //         <Nav className="me-auto">
      // // //         <NavDropdown title="Categorías" id="collasible-nav-dropdown">
      // // //             <NavLink to="action/3.1"><NavDropdown.Item> Producto1 </NavDropdown.Item></NavLink>
      // // //             <NavDropdown.Item href="#action/3.2"> Producto2 </NavDropdown.Item>
      // // //             <NavDropdown.Item href="#action/3.3"> Producto3 </NavDropdown.Item>
      // // //             <NavDropdown.Divider />
      // // //             <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
      // // //         </NavDropdown>
      // // //         <Nav.Link href="/nosotros">Nosotros</Nav.Link>
      // // //         <Nav.Link href="/contacto">Contacto</Nav.Link>
      // // //         </Nav>
      // // //         <Nav>
      // // //             <LinkContainer to = "/carrito">
      // // //                 <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
      // // //             </LinkContainer>
      // // //         </Nav>
      // // //     </Navbar.Collapse>
      // // // </Navbar>
    );
}

export default NavBar;
