import { Fragment, useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "./json/productos.json";


const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    const Promesa = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (products);
            }, 3000)
        }
        )
    }

    useEffect(() => {
        Promesa().then((products) => {
            setProductos(products);
            console.log(products);
        })
    }, []);

    if (productos.length === 0) {
        return <h1>Cargando...</h1>

    }
    else {
    return (
        <Fragment>
            <p className="saludoIni">{props.greeting}</p>
            
            <ItemCount />
            <ItemList data={products} />
        </Fragment>      
    )
    }
}

export default ItemListContainer;