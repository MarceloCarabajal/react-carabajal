import ItemCount from "./ItemCount";


const ItemDetail = ({ prod }) => {



  return (
    <div>
      <h2>{prod.nombre}</h2>
      <img src={prod.img} alt={prod.nombre} />
      <p>{prod.descripcion}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;
