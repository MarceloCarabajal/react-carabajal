import { createContext, useState } from "react";


export const contexto = createContext();

export const { Provider, Consumer } = contexto;

export const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
    // aca va la logica de ver si el prod esta en el carrito  o no y en tal caso retornar true o false    
    //return cart.findIndex(item => item.id === id) !== -1;
    }
    

    const addToCart = (contador, prod) => {  
        console.log("soy addToCart");
        console.log(contador,prod);
        setCart ([...cart, {contador:contador, prod:prod}]);
    }

    const removeFromCart = () => {
    }

    const emptyCart = () => {
        setCart([]);
    }


    const valor_del_contexto = {
        cart : cart,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        emptyCart : emptyCart

    }
    return (
        <Provider value={valor_del_contexto}>
            {children}
        </Provider>
    )
}
