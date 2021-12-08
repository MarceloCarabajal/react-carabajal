import { useState, UseEffect } from "react";
import { Card, Button } from 'react-bootstrap';


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
            stock = stock - count;
            setCount(0);
        }
    }

    

    return (

        
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/100x50" />
                <Card.Body>
                    <Card.Title>Producto "X"</Card.Title>
                    <Card.Text>
                        descripción del producto
                    </Card.Text>
                    <h3>{count}</h3>
                    <div>
                        <Button variant="dark" onClick={sumar}>+</Button>
                        <Button variant="dark" onClick={restar}>-</Button>
                    </div>      
                    <br></br><br></br>
                    <Button variant="dark" onClick={agregarCarrito}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
           

        </>
            
    );
}



export default ItemCount
