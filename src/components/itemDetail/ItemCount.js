import { useState } from "react";


const ItemCount = ({stock, initial, onAdd, addFail}) => {

    const [count, setCount] = useState(initial);


    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const agregarCarrito = () => {
        if (count <= stock) {
            onAdd(count);
            setCount(initial);
        }
        else {
            addFail();
        }
    }
    

    return (   
        <div className="contador">
            <span>{count}</span>
            <div className="count-button">
                <button onClick={restar}>-</button> 
                <button onClick={sumar}>+</button>
            </div>
            <div className="agregar-btn">
                <button onClick={agregarCarrito}>Agregar al carrito</button>
            </div>    
            
        </div>
            
    );
}



export default ItemCount
