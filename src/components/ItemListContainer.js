import { Fragment } from "react";
import ItemCount from "./ItemCount";


const ItemListContainer = (props) => {

    return (
        <Fragment>
            <p>{props.greeting}</p>
            <ItemCount />
        </Fragment>
    )
}

export default ItemListContainer;