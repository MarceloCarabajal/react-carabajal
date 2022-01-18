import { useContexto } from "react";



const CartWidget = () => {

    const {cart} = useContexto();
    console.log(cart);

    return (
            <span className="material-icons icon-cart">
                shopping_cart
            </span>
        

    )
}

export default CartWidget;