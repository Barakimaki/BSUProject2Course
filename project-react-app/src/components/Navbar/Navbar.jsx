import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export default function Navbar(props) {

    return <nav className={style.navbar}>
        <div className={style.item}>
            <NavLink to="/*">Главная</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/library">Наши авторы</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/shop">Магазин</NavLink>
        </div>
    </nav>;
};