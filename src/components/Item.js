const Item = (props) => {

    return (
        <>
            <p>{props.nombre}</p>
            <img src={props.img} alt={props.nombre}/>
        </>

    )
}

export default Item