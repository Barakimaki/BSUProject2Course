import {useEffect, useState} from "react";
import Loader from "../../../../Loader/Loader";
import EventItem from "./EventItem";
import img from '../../../../IMG/Maskgroup.png'
import style from "../Main/Main.module.css";

export default function Events(props) {

    let [state, setState] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [isFull, setIsFull] = useState(false)

    useEffect((param) => {
        let backUrl = `http://localhost:3002/api/v1/catalog`;
        let frontUrl = window.location.href;
        frontUrl = frontUrl.split('/')
        if (frontUrl.length > 4) {
            backUrl += '/' + frontUrl[frontUrl.length - 1];
            setIsFull(true)
            fetch(backUrl, {}).then((response) => {
                return response.json();
            })
                .then((data) => {
                    setState([data]);
                    setIsLoading(false);
                });
        } else {
            setIsFull(false);
            fetch(backUrl, {}).then((response) => {
                return response.json();
            })
                .then((data) => {
                    setState(data);
                    setIsLoading(false);
                });
        }
    }, [window.location.href]);

    return <div>
        <img src={img} alt=""/>
        <div className={style.content}>
            <h2 className={style.h2}>Мероприятия</h2>
            {isLoading && <Loader/>}
            {!isLoading && state.map((item) => {
                    return <EventItem
                        key={item.nameProduct}
                        name={item.nameProduct}
                        price={item.price}
                        description={item.description}
                        image={item.imageProduct}
                        isFull={isFull}
                    />

                }
            )
            }
        </div>
    </div>;
};