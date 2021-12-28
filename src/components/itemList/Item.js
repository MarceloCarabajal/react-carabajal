import { NavLink } from "react-router-dom"

const Item = (props) => {

    return (            
    

            <div className="card col col-xs-1 col-md-3">
            <img src={props.img} className="card-img-top" alt="card"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">Precio: ${props.precio}</p>
                    <NavLink to="/producto" className="btn btn-dark">Ver detalles</NavLink>
                </div>
            </div>
       
    )
}

export default Item


