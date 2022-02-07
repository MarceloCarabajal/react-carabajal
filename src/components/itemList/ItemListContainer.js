import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import { db } from "../firebase/firebase";
import { getDocs , query, collection, where } from "firebase/firestore";




const ItemListContainer = (props) => {
      
    const [loading, setLoading] = useState(true);
    let [lista, setLista] = useState([]);
    const { id } = useParams()
    
    
    
    useEffect(() => {
        const productosCollection = collection(db, "productos")
        
        if(id){

            const consulta = query(productosCollection, where("category", "==", id))
            getDocs(consulta)
                .then(({ docs }) => {

                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data()})))
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            getDocs(productosCollection)
                .then(({ docs }) => {
                    const resultado_parseado = []
                    docs.forEach((documento) => {
                      const id = documento.id
                      const data = documento.data()
                      const data_final = { id, ...data }
                      resultado_parseado.push(data_final)
                    })


                    setLista(resultado_parseado)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    console.log(error)
                })
        }}, [id])


    if (loading) {
        return <ReactLoading type={"spinningBubbles"} color={"#131313"} height={300} width={150} />
    }
    else {
    return (
        <div className="contenedor">
            <p>{props.greeting}</p>
            <ItemList data={lista} />
        </div>      
    )
    }
}

export default ItemListContainer;