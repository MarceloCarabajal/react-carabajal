import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {contexto} from "./components/contextFiles/CartContext";
import {useContext} from "react";

const ItemDetail = ({ prod }) => {

  const {addToCart} = useContext(contexto);

  const [confirmar, setConfirmar] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (contador) => {

    addToCart(contador, prod);
    toast.success('Items agregados al carrito: ' + contador, {
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
    setCantidad(contador)
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
        <h2>{prod.nombre}</h2>
        <p>${prod.precio}</p>
        <p>{prod.descripcion}</p>
      </div>
      <img src={prod.img} alt={prod.nombre} />
      {confirmar ? <NavLink to="/carrito"><button className="terminar-btn">Terminar compra</button></NavLink> : <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={onAddFail} />}
      <ToastContainer />
    </div>
  );
}

export default ItemDetail;
