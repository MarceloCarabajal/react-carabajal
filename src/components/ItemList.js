import Item from './Item'

const ItemList = (props) => {

    return(
        <div className="itemList">
                {props.data.map(item => (
                    <Item key={item.id} nombre={item.nombre} img={item.img}/>
                ))}
            </div>
        )
}


export default ItemList
