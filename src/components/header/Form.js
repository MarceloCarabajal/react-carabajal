import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useContexto } from "../contextFiles/MyContext";

const Form = () => {
  const { carrito, limpiarCarrito, precioTotal } = useContexto();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [idSale, setIdSale] = useState("");

  const [compraTerminada, setCompraTerminada] = useState(true);

  const send = (data, e) => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      buyer: {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
      },
      items: carrito,
      date: serverTimestamp(),
      total: precioTotal,
    }).then((resultado) => {
      setIdSale(resultado.id);
      setName(data.nombre);
      setEmail(data.email);
      setPhone(data.telefono);

      setCompraTerminada(false);
      limpiarCarrito();
    });
  };

  return (
    <div>
      {compraTerminada ? (
        <form onSubmit={handleSubmit(send)}>
          <h4>Opciones de Envío</h4>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="Nombre"
              {...register("nombre", {
                required: { value: true, message: "El nombre es obligatorio" },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
            />

            <span className="text-danger text-small d-block mb-2">
              {errors?.nombre?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "El email es obligatorio" },
                minLength: {
                  value: 3,
                  message: "El email debe tener al menos 3 caracteres",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El email no es válido",
                },
              })}
            />

            <span className="text-danger text-small d-block mb-2">
              {errors?.email?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              className="form-control"
              name="telefono"
              placeholder="Telefono"
              {...register("telefono", {
                required: {
                  value: true,
                  message: "El telefono es obligatorio",
                },
                minLength: {
                  value: 3,
                  message: "El telefono debe tener al menos 3 caracteres",
                },
              })}
            />

            <span className="text-danger text-small d-block mb-2">
              {errors?.telefono?.message}
            </span>
          </div>
          <button className="btn btn-dark">Finalizar compra</button>
        </form>
      ) : (
        <div>
          <h4>Datos de la compra</h4>
          <p>ID de la venta: {idSale}</p>
          <p>Nombre: {name}</p>

          <p>Email: {email}</p>

          <p>Telefono: {phone}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
