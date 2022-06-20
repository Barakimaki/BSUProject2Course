import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export default function Navbar(props) {

    return <nav className={style.navbar}>
        <div className={style.item}>
            <NavLink className={SelectedLink()} to="/*">ГЛАВНАЯ</NavLink>
        </div>
        <div className={style.item}>
            <NavLink className={SelectedLink()} to="/catalog">НАШИ МЕРОПРИЯТИЯ</NavLink>
        </div>
        <div className={style.item}>
            <NavLink className={SelectedLink()} to="/reviews">ОТЗЫВЫ</NavLink>
        </div>
    </nav>;
};

const SelectedLink = () => {
    return (
        select => select.isActive ? style.activeLink : style.item
    );
}