import { useState, Fragment } from "react";
import { Card, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = () => {

    let stock = 10;
    const [count, setCount] = useState(1);


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
        if (count > 0) {
            toast.info('Agregando al carrito');
            setCount(1);
        }
    }

    

    return (   
        <Fragment>

            <Card className="contador">
                <Button variant="dark" onClick={restar}>-</Button>
                <Card.Body>{count}</Card.Body>    
                <Button Classname="btn-toolbar" variant="dark" onClick={sumar}>+</Button>
            </Card>
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
