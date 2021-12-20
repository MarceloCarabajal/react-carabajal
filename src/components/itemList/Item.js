import { Container, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Item = (props) => {

    return (
            
                    <Col>
                        <Card className = "itemCard"style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.img} alt={props.nombre} />
                        <Card.Body>
                            <Card.Title>{props.nombre}</Card.Title>
                            <Card.Text>
                                descripción del producto
                            </Card.Text>
                            <Card.Text>
                                Precio: ${props.precio}
                            </Card.Text>    
                        </Card.Body>
                        </Card>
                    </Col>
            

    )
}

export default Item


