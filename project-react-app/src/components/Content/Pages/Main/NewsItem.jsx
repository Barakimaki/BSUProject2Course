import style from './NewsItem.module.css'
const NewsItem = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.image} alt=""/>
            <p>{props.description}</p>
        </div>
    );
};

export default NewsItem;