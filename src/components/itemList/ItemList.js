import Item from './Item'

const ItemList = (props) => {

    return(
        <div className="container-fluid">
            <div className= "row row-cols-1 row-cols-sm-2 row-cols-md-4 item">
                    {props.data.map(item => (
                        <Item key={item.id} id={item.id} nombre={item.nombre} img={item.img} precio={item.precio} destacado={item.destacado}/>
                    ))}
            </div>
        </div>
        )
}


export default ItemList
