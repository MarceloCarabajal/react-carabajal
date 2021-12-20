import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../json/productos.json";



const ItemDetailContainer = () => {

  let itemID = 3;

  const [selected, setSelected] = useState({});
  
  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos.find((prod) => prod.id === itemID));
      }, 3000);
    });
    promesa.then((prod) => {
      setSelected(prod);
    });
  }

  useEffect(() => {
    getItem()},[itemID])

  


  


  return <ItemDetail prod={selected}/>

};

export default ItemDetailContainer;
