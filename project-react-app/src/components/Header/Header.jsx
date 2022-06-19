import style from './Header.module.css';
import img from '../../IMG/logo.png'

export default function Header(props) {

    return <header className={style.header}>
        <img src={img} alt=""/>
        <h1 className={style.h1}>Adam & Eve</h1>
    </header>;
};