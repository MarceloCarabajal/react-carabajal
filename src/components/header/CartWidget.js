import { useContext } from "react";
import { contexto } from "../../contextFiles/CartContext";



const CartWidget = () => {

    const {cart} = useContext(contexto);
    console.log(cart);

    return (
            <span className="material-icons icon-cart">
                shopping_cart
            </span>
        

    )
}

export default CartWidget;