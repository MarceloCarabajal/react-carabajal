import { NavLink } from "react-router-dom";

const CartWidget = () => {

    return (
        <NavLink to="/carrito">
            <span className="material-icons icon-cart">
            shopping_cart
            </span>
        </NavLink>
        

    )
}

export default CartWidget;