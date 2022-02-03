import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../json/productos.json";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

  let { id } = useParams();

  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  
  // const getItem = () => {
  //   const promesa = new Promise((res) => {

  //       res(productos.find((prod) => prod.id === Number(id)));
  //       setLoading(false);
  //   });
  //   promesa.then((prod) => {
  //     setSelected(prod);
  //   });
  // }

  useEffect(() => {
    // getItem()},[id])
    const productosCollection = collection(db, "productos");
    const refDoc = doc(productosCollection, id);
    getDoc(refDoc)
      .then((resultado) => {
        setSelected(resultado.data());
        setLoading(false);
        
      })
      .catch((error) => {

      })
    }, [id])


  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail prod={selected} />;
  }
  
};

export default ItemDetailContainer;
