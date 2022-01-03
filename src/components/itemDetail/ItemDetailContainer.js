import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../json/productos.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  let { id } = useParams();

  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  
  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        console.log(id);
        res(productos.find((prod) => prod.id === Number(id)));
        setLoading(false);
      }, 2000);
    });
    promesa.then((prod) => {
      console.log(prod);
      setSelected(prod);
    });
  }

  useEffect(() => {
    getItem()},[id])

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail prod={selected} />;
  }
  
};

export default ItemDetailContainer;
