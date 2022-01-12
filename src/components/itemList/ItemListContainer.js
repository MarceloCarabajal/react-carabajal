import { Fragment, useState, useEffect} from "react";
import ItemList from "./ItemList";
import products from "../json/productos.json";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams()

    useEffect(() => {
        if(!categoria) {
            const promesa = new Promise((resolve, reject) => {
                setTimeout (() => {
                    resolve (products);
                }, 2000)
            })
       
        }else {
            const promesa = new Promise((resolve, reject) => {
                setTimeout (() => {
                    resolve (products.filter(producto => producto.categoria === categoria));
                }, 2000)
            })
        }
        promesa.then(data => {
            setProductos(data);
        })
    }, [categoria])



    if (productos.length === 0) {
        return <h1>Cargando...</h1>

    }
    else {
    return (
        <Fragment>
            <p>{props.greeting}</p>
            <ItemList data={productos} />
        </Fragment>      
    )
    }
}

export default ItemListContainer;