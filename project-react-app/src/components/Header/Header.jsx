import style from './Header.module.css';

export default function Header(props) {

    return <header className={style.header}>
        <h1 className={style.h1}>Adam & Eve</h1>
    </header>;
};