import { useContexto } from "../contextFiles/MyContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto();
    console.log(carrito, borrarDelCarrito, limpiarCarrito);

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.length > 0 ? (
                <div>
                    <ul>
                        {carrito.map(producto => {
                            return <li key={producto.id}>
                                        {producto.nombre} - ${producto.precio} - {producto.cantidad}
                                        <button onClick={() => borrarDelCarrito(producto.id)}>Borrar</button> 
                                    </li>
                        })}
                    </ul>
                    <button onClick={limpiarCarrito}>Limpiar Carrito</button>
                </div>
            ) :
                <div>
                    <p>No hay productos en el carrito</p>     
                    <NavLink to="/productos" className="nav-enlace">Volver a inicio</NavLink>
                </div>        
            }
        </div>


    )
}

export default Cart
