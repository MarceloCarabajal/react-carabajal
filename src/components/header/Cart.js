import { useContext } from "./contextFiles/CartContext";




const Cart = () => {
    const { cart, removeFromCart, emptyCart} = useContext();
    console.log(resultado);

    return (
        <div>
            <h1>Carrito</h1>
            {/* hacer un map */}
        </div>
    )
}

export default Cart
