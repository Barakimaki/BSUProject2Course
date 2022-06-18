import React, {useEffect, useState} from 'react';

const EventItem = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
            <p>{props.description}</p>
            <h3>{props.price}$</h3>
            <span>
                <a href={"tel:+11111111"}>Заказать</a>
            </span>
</div>
)
    ;
};

export default EventItem;