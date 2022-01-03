import { useState, Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);


    const sumar = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const agregarCarrito = () => {
        if (count > 0) {
            toast.info('Items agregados al carrito: ' + count);
            setCount(1);
        }
    }
    

    return (   
        <Fragment>


           <div className="contador">
           <button onClick={restar}>-</button>
            <p>{count}</p>    
            <button className="btn-toolbar" onClick={sumar}>+</button>
           </div>

           
            <br></br>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
            />
        
            <ToastContainer />
        </Fragment>
            
    );
}



export default ItemCount
