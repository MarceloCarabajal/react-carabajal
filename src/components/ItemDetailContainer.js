import { useState , useEffect } from 'react'
import product from './json/productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    let [producto, setProducto] = useState({})

    useEffect (() => {
        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                res(product)
            }, 2000)

        })
        promesa.then((product) => {
            setProducto(product)
        })

    }
    , [])   




    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer