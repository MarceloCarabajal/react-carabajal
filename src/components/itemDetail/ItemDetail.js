import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {useContexto} from "../contextFiles/MyContext";

const ItemDetail = ( {prod} ) => {

  const {agregarAlCarrito} = useContexto();

  const [confirmar, setConfirmar] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cant) => {

    agregarAlCarrito(cant, prod);
    toast.success('Items agregados al carrito: ' + cant, {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast-success",
    });
    setCantidad(cant)
    setConfirmar(true);
  
  };

  const onAddFail = () => {
    toast.error('No hay stock suficiente', {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast-error",
    });
  };

  return (
    <div className="itemDetail">
      <div className="details">
        <h2>{prod.title}</h2>
        <p>${prod.price}</p>
        <p>{prod.description}</p>
      </div>
      <img src={prod.image} alt={prod.title} />
      {confirmar ? <NavLink to="/carrito"><button className="terminar-btn">Ver Carrito</button></NavLink> : <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={onAddFail} />}
      <ToastContainer />
    </div>
  );
}

export default ItemDetail;
