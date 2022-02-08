import { useContexto } from "../contextFiles/MyContext";
import { NavLink } from "react-router-dom";

import Formulario from "./Form";

const Cart = () => {
  const { carrito, borrarDelCarrito, limpiarCarrito, precioTotal } =
    useContexto();

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <div>
          <ul>
            {carrito.map((producto) => {
              return (
                <li key={producto.id}>
                  {producto.title} - ${producto.price} - {producto.cantidad}
                  <button
                    onClick={() =>
                      borrarDelCarrito(producto.id, producto.cantidad)
                    }
                  >
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
          <h3>Total: ${precioTotal}</h3>
        </div>
      ) : (
        <div>
          <p>No hay productos en el carrito</p>
          <NavLink to="/productos" className="nav-enlace">
            Volver a inicio
          </NavLink>
        </div>
      )}
      <Formulario />
    </div>
  );
};

export default Cart;
