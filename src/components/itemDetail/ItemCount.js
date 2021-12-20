import { useState, Fragment } from "react";
import { Button } from 'react-bootstrap';
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
           <Button variant="dark" onClick={restar}>-</Button>
            <p>{count}</p>    
            <Button Classname="btn-toolbar" variant="dark" onClick={sumar}>+</Button>
           </div>

           
            <br></br>
            <Button variant="dark" onClick={agregarCarrito}>Agregar al carrito</Button>
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
            {/* Same as */}
            <ToastContainer />
        </Fragment>
            
    );
}



export default ItemCount
