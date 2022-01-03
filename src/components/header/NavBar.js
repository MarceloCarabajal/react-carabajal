import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  const hamburger = () => {
    console.log('click');
    const nav = document.getElementsByClassName('nav-enlace');
    for(let i = 0; i < nav.length; i++) {
      nav[i].classList.toggle('desaparece');
    }
  }

    return (
      <nav>
        <button className="nav-button" onClick={hamburger}>Menú</button>
        <NavLink to="/" className="nav-enlace desaparece">MStar</NavLink>
        <NavLink to="/productos" className="nav-enlace desaparece">Productos</NavLink>
        <NavLink to="/categoria/1" className="nav-enlace desaparece">Categoría 1</NavLink>
        <NavLink to="/categoria/2" className="nav-enlace desaparece">Categoría 2</NavLink>
        <NavLink to="/carrito" className="nav-enlace desaparece"><CartWidget/></NavLink>
      </nav>
    );
}

export default NavBar;
