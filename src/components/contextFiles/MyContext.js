import { createContext, useContext, useState} from 'react';

const contexto = createContext();

const { Provider } = contexto;

export const useContexto = () => {
    return useContext(contexto);
}


const CustomProvider = ({children}) => {

    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (cantidad, producto) => {

        const id = producto.id

        if(isInCarrito(id)){
            const copiaCarrito= [...carrito]
            let match = copiaCarrito.find(item => item.id === id);
            match.cantidad += cantidad;
            setCarrito(copiaCarrito)
        }else{
            const productoConCantidad = {...producto}
            productoConCantidad.cantidad=cantidad;
    
            const copiaCarrito = [...carrito, productoConCantidad]
            setCarrito(copiaCarrito)
    
        }
        const copiaCantidadTotal = cantidadTotal + cantidad;
        setCantidadTotal(copiaCantidadTotal)
    }


    const borrarDelCarrito = (id, cantidad) => {
        let copiaCarrito = carrito.filter(prod => (prod.id) !== id)
        setCarrito(copiaCarrito)
        setCantidadTotal(cantidadTotal - cantidad)
    }



    const limpiarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
    }


    const isInCarrito = (id) => {
        const producto = carrito.find(producto => producto.id === id)
        return producto !== undefined
    
    }

    const valorDelContexto = {
        carrito,
        cantidadTotal,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito
    }

    return (
        <Provider value= {valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CustomProvider;

