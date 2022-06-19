import style from './Footer.module.css';
import img1 from '../../IMG/log1.png';
import img2 from '../../IMG/log2.png';
import img3 from '../../IMG/log3.png';


export default function Footer(props) {

    return <footer className={style.footer}>
        <div className={style.div}>
            <img src={img1} alt=""/>
            <a href="#" className={style.link}>+375 (29) 123-45-67</a>
        </div>
        <div className={style.div}>
            <img src={img2} alt=""/>
            <a href="#" className={style.link}>Минск, пр. Независимости 4</a>
        </div>
        <div className={style.div}>
            <img src={img3} alt=""/>
            <a href="#" className={style.link}>adamandeve@gmail.com</a>
        </div>
    </footer>;
};