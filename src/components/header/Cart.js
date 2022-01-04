import { useContext } from "react"
import { contexto } from "../../contextFiles/CartContext"



const Cart = () => {
    const resultado = useContext(contexto);
    console.log(resultado);

    return (
        <div>
            <h1>Carrito</h1>
            {/* hacer un map */}
        </div>
    )
}

export default Cart
