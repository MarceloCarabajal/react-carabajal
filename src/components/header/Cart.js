import { useContexto } from "../contextFiles/MyContext";


const Cart = () => {
    const { carrito, borrarDelCarrito, limpiarCarrito} = useContexto();
    console.log(carrito, borrarDelCarrito, limpiarCarrito);

    return (
        <div>
            <h1>Carrito</h1>
            {/* {cart.length > 0 ? } */}
            {/* hacer un map */}
        </div>
    )
}

export default Cart
