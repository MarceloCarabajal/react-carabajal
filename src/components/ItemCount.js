import { useState, Fragment } from "react";
import { Card, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = () => {

    let stock = 10;
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

    const agregarCarrito = () => {
        if (count > 0) {
            toast.info('Agregando al carrito');
            stock = stock - count;
            setCount(0);
        }
    }

    

    return (   
        <Fragment>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/100x50" />
                <Card.Body>
                    <Card.Title>Producto "X"</Card.Title>
                    <Card.Text>
                        descripción del producto
                    </Card.Text>
                    <h3>{count}</h3>
                    <div>
                        <Button variant="dark" onClick={restar}>-</Button>
                        <Button variant="dark" onClick={sumar}>+</Button>
                    </div>      
                    <br></br><br></br>
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
                    </Card.Body>
            </Card>
        </Fragment>
            
    );
}



export default ItemCount
