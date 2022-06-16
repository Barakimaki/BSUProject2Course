import {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Loader from "../../../../Loader/Loader";
import style from './Main.module.css'


export default function Main(props) {


    let [state, setState] = useState([])
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/home`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setState(data);
                setIsLoading(false);
            });
    }, []);

    return <div className={style.news}>
        <h2>Новости</h2>
        {isLoading && <Loader/>}
        {!isLoading && state.map((news) => {
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