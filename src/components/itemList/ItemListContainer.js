import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import products from "../json/productos.json";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';


const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()



    useEffect(() => {
        setLoading(true);
        const promesa = new Promise((resolve, reject) => {
            setTimeout (() => {
                if ( id ) {
                    resolve(products.filter(producto => producto.categoria == id));
                    setLoading(false);
                } else {
                    resolve(products)
                    setLoading(false)} 
            }, 2000)
        })
        promesa.then(data => {
            setProductos(data);
        })
    }, [id])



    if (loading) {
        return <ReactLoading type={"spinningBubbles"} color={"#131313"} height={300} width={150} />
    }
    else {
    return (
        <div className="contenedor">
            <p>{props.greeting}</p>
            <ItemList data={productos} />
        </div>      
    )
    }
}

export default ItemListContainer;