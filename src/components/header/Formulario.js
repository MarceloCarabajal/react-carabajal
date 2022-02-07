import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const Formulario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }


    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        telefono: "",
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos, 
            [e.target.name]: e.target.value
        })
    }

  return <div>
      <h4>Opciones de Envío</h4>
        <form onSubmit= {handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Nombre" 
                    onChange={handleInputChange}
                    {...register("nombre", {
                            required: { value: true, message: "El nombre es obligatorio" },
                            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },

                            })
                    }
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
                    onChange={handleInputChange}
                    {...register("email", {
                            required: { value: true, message: "El email es obligatorio" },
                            minLength: { value: 3, message: "El email debe tener al menos 3 caracteres" },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "El email no es válido" },
                            })
                    }

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
                    onChange={handleInputChange}
                    {...register("telefono", {
                            required: { value: true, message: "El telefono es obligatorio" },
                            minLength: { value: 3, message: "El telefono debe tener al menos 3 caracteres" },
            

                            })
                    }

                />

                <span className="text-danger text-small d-block mb-2">
                {errors?.telefono?.message}
                </span>

            </div>
            <button className="btn btn-dark" >Validar datos</button>

        </form>
    </div>

};

export default Formulario;
