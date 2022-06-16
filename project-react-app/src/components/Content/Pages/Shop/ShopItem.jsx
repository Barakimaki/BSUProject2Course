import React from 'react';
import MyButton from "../../../../button/MyButton";

const ShopItem = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
            <h3>{props.price}$</h3>
            <MyButton>Купить</MyButton>
        </div>
    );
};

export default ShopItem;