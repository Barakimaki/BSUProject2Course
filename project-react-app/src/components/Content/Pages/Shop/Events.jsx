import {useEffect, useState} from "react";
import Loader from "../../../../Loader/Loader";
import EventItem from "./EventItem";
import img from '../../../../IMG/Maskgroup.png'
import style from "../Main/Main.module.css";

export default function Events(props) {

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
        <img src={img} className={style.img} alt=""/>
        <div className={style.content}>
            <h2 className={style.h2}>Мероприятия</h2>
            {isLoading && <Loader/>}
            {!isLoading && state.map((item) => {
                    return <EventItem
                        key={item.nameProduct}
                        name={item.nameProduct}
                        price={item.price}
                        description={item.description}
                        image={item.imageProduct}/>

                }
            )
            }
        </div>
    </div>;
};