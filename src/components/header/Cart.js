import { useContexto } from "../contextFiles/MyContext";
import { NavLink } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Formulario from "./Formulario";

const Cart = () => {

    const { carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto();
    
    const finalizarCompra = () => {
        console.log("Guardando la compra en db")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: {
                nombre: "Juan",
                apellido: "Perez",
                email: "mail@mail.com"
            },
            items: carrito,
            date: serverTimestamp(),
            total: precioTotal
            })
            .then((resultado) => {
                console.log(resultado)
                limpiarCarrito()
            })
        }

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.length > 0 ? (
                <div>
                    <ul>
                        {carrito.map(producto => {
                            return <li key={producto.id}>
                                        {producto.title} - ${producto.price} - {producto.cantidad}
                                        <button onClick={() => borrarDelCarrito(producto.id, producto.cantidad)}>Borrar</button> 
                                    </li>
                        })}
                    </ul>
                    <h3>Total: ${precioTotal}</h3>
                    <Formulario />
                    <button onClick={finalizarCompra}>Finalizar Compra</button>
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
