import {useEffect, useState} from "react";
import Loader from "../../../../Loader/Loader";
import ReviewsItem from "./ReviewsItem";


export default function Reviews(props) {

    let [state, setState] = useState([])
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/reviews`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setState(data);
                setIsLoading(false);
            });
    }, []);

    return <div>
        <h2>Отзывы</h2>
        {isLoading && <Loader/>}
        {!isLoading && state.map((rev) => {
                return <ReviewsItem
                    key={rev.nickname}
                    nickname={rev.nickname}
                    avatar={rev.avatar}
                    review={rev.review}/>

            }
        )
        }
    </div>;
};