import { useContexto } from "../contextFiles/MyContext";



const CartWidget = () => {

    const {cantidadTotal} = useContexto();

    return (
        <div className="cart-widget">
            <span className="material-icons icon-cart">
                shopping_cart
            </span>
            {cantidadTotal > 0 ? (
                <span className="cart-widget-number">
                    {cantidadTotal}
                </span>
            ) : null}
        </div>
    )
}

export default CartWidget;