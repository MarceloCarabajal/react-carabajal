import Item from './Item'

const ItemList = (props) => {

    return(
        <div className="container-fluid">
            <div className= "row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {props.data.map(item => (
                        <Item key={item.id} nombre={item.nombre} img={item.img} precio={item.precio}/>
                    ))}
            </div>
        </div>
        )
}


export default ItemList
