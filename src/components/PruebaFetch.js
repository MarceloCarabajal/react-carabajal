const PruebaFetch = () => {

    const resultado = fetch('https://pokeapi.co/api/v2/pokemon/')
    resultado.then((data) => {
        console.log(data);
        const pokemones_json = data.json();
        console.log(pokemones_json);
        return pokemones_json;
    })
    .then((obj_pokemones_json) => {
        console.log(obj_pokemones_json);
    })



    resultado.catch ((error) => {
        console.log(error);
        })


    return (
        <>

        </>
    )


}

export default PruebaFetch;