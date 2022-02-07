import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import ReactLoading from 'react-loading';


const ItemDetailContainer = () => {

  let { id } = useParams();

  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
 
    const productosCollection = collection(db, "productos");
    const refDoc = doc(productosCollection, id);
    getDoc(refDoc)
      .then((resultado) => {
        setSelected({id: resultado.id, ...resultado.data()});
        setLoading(false);

      })
      .catch((error) => {

      })
    }, [id])


  if (loading) {
    return <ReactLoading type={"spinningBubbles"} color={"#131313"} height={300} width={150} />
  } else {
    return <ItemDetail prod={selected} />;
  }
  
};

export default ItemDetailContainer;
