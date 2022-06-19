import React from 'react';
import style from './ReviewsItem.module.css'

const ReviewsItem = (props) => {
    return (<div>
            <h3 className={style.h3}>{props.nickname}</h3>
            <img src={props.avatar} alt=""/>
            <p className={style.p}>{props.review}</p>
        </div>
    );
};

export default ReviewsItem;