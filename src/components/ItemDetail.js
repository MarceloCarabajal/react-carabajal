const ItemDetail = (props) => {
    return (
        <div className="itemDetail">
            <div className="itemDetail__img">
                <img src={props.producto.img} alt={props.producto.nombre} />
            </div>
            <div className="itemDetail__info">
                <h2>{props.producto.nombre}</h2>
                <p>{props.producto.descripcion}</p>
                <p>Precio: {props.producto.precio}</p>
            </div>
        </div>
    )

}

export default ItemDetail