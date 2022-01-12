import { createContext, useState, useContext } from "react";


export const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

export const CustomProvider = ({children}) => { 

    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([]);


    const addToCart = (contador, prod) => {
        console.log("soy addToCart");
        console.log(contador, prod);

        if(isInCart()){
            console.log("ya esta en el carrito");
            const newCart = cart.map(item => {
                if(item.id === prod.id){
                    item.cantidad += contador;
                }
                return item;
            })
            setCart(newCart);
        }else{
            console.log("no esta en el carrito");
            setCart([...cart, {...prod, cantidad: contador}]);
        }
        setCantidad(contador)
    }

    const isInCart = (prod) => {
        const result = cart.find(item => item.id === prod.id);
        return result !== undefined;
    }


    const removeFromCart = (id) => {
        //const copia = [...cart]
        let carritoFiltrado = cart.filter =(prod)=>{
            return (prod.id !== id)
        }
        

    };

    const emptyCart = () => {
        setCart([]);
    };

    const valor_del_contexto = {
        cantidad: cantidad,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart
    };
    return (
        <Provider value={valor_del_contexto}>
            {children}
        </Provider>
    );
}
