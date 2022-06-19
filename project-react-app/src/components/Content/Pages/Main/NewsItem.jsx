import style from './NewsItem.module.css'
const NewsItem = (props) => {
    return (
        <div>
            <h3 className={style.h3}>{props.title}</h3>
            <img src={props.image} alt=""/>
            <p className={style.p}>{props.description}</p>
        </div>
    );
};

export default NewsItem;