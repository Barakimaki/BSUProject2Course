import {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Loader from "../../../../Loader/Loader";
import style from './Main.module.css'
import EventItem from "../Shop/EventItem";


export default function Main(props) {


    let [news, setNews] = useState([])
    let [event, setEvent] = useState({})
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/home`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setNews(data);
                setIsLoading(false);
            });
        fetch(`http://localhost:3002/api/v1/shop`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setIsLoading(true);
                setEvent(data[0]);
                setIsLoading(false);
            });
    }, []);

    return <div className={style.news}>
        {isLoading && <Loader/>}
        <h2>Рекомендуем</h2>
        <EventItem
            key={event.nameProduct}
            name={event.nameProduct}
            price={event.price}
            description={event.description}
            image={event.imageProduct}/>
        <h2>Новости</h2>
        {!isLoading && news.map((news) => {
                return <NewsItem
                    key={news.newsTitle}
                    title={news.newsTitle}
                    image={news.image}
                    description={news.description}/>

            }
        )
        }
    </div>;
};