import { useState, UseEffect } from "react";



const ItemCount = () => {

    const stock = 10;
    const [count, setCount] = useState(0);



    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };


    

    return (

        
        <>
            <article className="box-item-count">

            </article>
        
            <button onClick={restar}>
                <span className="material-icons">
                    remove
                </span>
            </button>
            <h3>{count}</h3>
            <button onClick={sumar}>
                <span className="material-icons">
                    add
                </span>
            </button>
           

        </>
            
    );
}



export default ItemCount
