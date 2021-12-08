import { Fragment } from "react";
import ItemCount from "./ItemCount";


const ItemListContainer = (props) => {

    return (
        <Fragment>
            <p className="saludoIni">{props.greeting}</p>
            <ItemCount />
        </Fragment>
    )
}

export default ItemListContainer;