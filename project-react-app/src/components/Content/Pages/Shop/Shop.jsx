import {useEffect, useState} from "react";
import Loader from "../../../../Loader/Loader";
import ShopItem from "./ShopItem";


export default function Shop(props) {

    let [state, setState] = useState([]);
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/shop`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setState(data);
                setIsLoading(false);
            });
    }, []);

    return <div>
        <h2>Магазин</h2>
        {isLoading && <Loader/>}
        {!isLoading && state.map((item) => {
                return <ShopItem
                    key={item.nameProduct}
                    name={item.nameProduct}
                    price={item.price}
                    image={item.imageProduct}/>

            }
        )
        }
    </div>;
};