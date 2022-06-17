import React, {useEffect, useState} from 'react';

const ShopItem = (props) => {
    let [url, setUrl] = useState('https://oz.by/search/?q=');
    useEffect(()=> setUrl(url+props.name.split(' ').join('+')), [])
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
            <h3>{props.price}$</h3>
            <a href={url}  target="_blank">Купить</a>
        </div>
    );
};

export default ShopItem;