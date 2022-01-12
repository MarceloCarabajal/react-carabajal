import { useContexto } from "../contextFiles/CartContext";




const Cart = () => {
    const { cart, removeFromCart, emptyCart} = useContexto();
    console.log(cart, removeFromCart, emptyCart);

    return (
        <div>
            <h1>Carrito</h1>
            {/* {cart.length > 0 ? } */}
            {/* hacer un map */}
        </div>
    )
}

export default Cart
