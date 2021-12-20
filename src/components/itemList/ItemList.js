import Item from './Item'
import { Row, Col } from 'react-bootstrap';

const ItemList = (props) => {

    return(
        <Row xs={1} sm={2} md={3} className="itemList">
                {props.data.map(item => (
                    <Item key={item.id} nombre={item.nombre} img={item.img} precio={item.precio}/>
                ))}
        </Row>
        )
}


export default ItemList
