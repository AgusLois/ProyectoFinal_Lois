import React from "react";
import './itemlistcontainer.css'

export const ItemListContainer = (props) => {
    return (
        <div className="title">
            <h2>{props.greeting}</h2>
        </div>
    )
}