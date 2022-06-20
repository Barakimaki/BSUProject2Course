import {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Loader from "../../../../Loader/Loader";
import style from './Main.module.css'
import EventItem from "../Shop/EventItem";
import img from '../../../../IMG/dennis-vinther-6M_4NIlTEe8-unsplash 1.png'


export default function Main(props) {


    let [news, setNews] = useState([])
    let [event, setEvent] = useState({})
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/news`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setNews(data);
                setIsLoading(false);
            });
        fetch(`http://localhost:3002/api/v1/catalog`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setIsLoading(true);
                setEvent(data[0]);
                setIsLoading(false);
            });
    }, []);

    return <div>
        <img src={img} alt=""/>
        <div className={style.content}>
            {isLoading && <Loader/>}
            <h2 className={style.h2}>Рекомендуем</h2>
            <EventItem
                key={event.nameProduct}
                name={event.nameProduct}
                price={event.price}
                description={event.description}
                image={event.imageProduct}/>
            <hr/>
                <h2 className={style.h2}>Новости</h2>
                {!isLoading && news.map((news) => {
                        return <NewsItem
                            key={news.newsTitle}
                            title={news.newsTitle}
                            image={news.image}
                            description={news.description}/>

                    }
                )
                }
        </div>
    </div>
;
};