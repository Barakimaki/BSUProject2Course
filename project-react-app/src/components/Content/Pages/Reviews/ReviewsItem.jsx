import React from 'react';

const ReviewsItem = (props) => {
    return (<div>
            <h2>{props.nickname}</h2>
            <img src={props.avatar} alt=""/>
            <p>{props.review}</p>
        </div>
    );
};

export default ReviewsItem;