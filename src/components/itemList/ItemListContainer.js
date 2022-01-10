import { Fragment, useState, useEffect} from "react";
import ItemList from "./ItemList";
import products from "../json/productos.json";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams()

    if(categoria) {
        console.log("productos por categoria")
    }else {
        console.log("todos los productos")
    }
    

    const Promesa = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (products);
            }, 2000)
        }
        )
    }

    useEffect(() => {
        Promesa().then((products) => {
            if(!categoria) {
            setProductos(products);
            }else {
                setProductos(products.filter(producto => producto.categoria === categoria));
            }
        })
    }, [categoria]);

    if (productos.length === 0) {
        return <h1>Cargando...</h1>

    }
    else {
    return (
        <Fragment>
            <p>{props.greeting}</p>
            <ItemList data={products} />
        </Fragment>      
    )
    }
}

export default ItemListContainer;