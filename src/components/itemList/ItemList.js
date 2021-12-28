import Item from './Item'

const ItemList = (props) => {

    return(
        <div className= "row itemList">
                {props.data.map(item => (
                    <Item key={item.id} nombre={item.nombre} img={item.img} precio={item.precio}/>
                ))}
        </div>
        )
}


export default ItemList
