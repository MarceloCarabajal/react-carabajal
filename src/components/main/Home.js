import { useState } from "react";

const Home = () => {

    const [data, setData] = useState ("");
    const [usuario, setUsuario] = useState ([]);

    
    const hacerClick = () => {
        setUsuario ([...usuario, data])
    }
    
    const hacerChange = (e) => {
        const valor = e.target.value
        setData(valor);
    }
    
    return (
        <div>
            <h1>Home</h1>
            <button onClick={hacerClick}>Click</button>
            <input type="text" onChange={hacerChange}></input>
        </div>
    )

}

export default Home
