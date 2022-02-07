import {Fragment} from 'react';
import {useForm} from 'react-hook-form';


const FormHook = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }

    return (
        <Fragment>
            <h4>Formulario Hooks</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    placeholder="Titulo"
                    {...register("titulo",{
                        required: { value: true, message: "titulo obligatorio" },
                        maxLength: { value: 5, message: 'No más de 5 carácteres!' },
                        minLength: { value: 2, message: 'Mínimo 2 carácteres'}
                      })
                    }
                   

                />
                <span className="text-danger text-small d-block mb-2">
                {errors?.titulo?.message}
                </span>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
    );
}

export default FormHook;