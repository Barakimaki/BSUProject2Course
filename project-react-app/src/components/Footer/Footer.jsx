import style from './Footer.module.css';
import img1 from '../../IMG/log1.png';
import img2 from '../../IMG/log2.png';
import img3 from '../../IMG/log3.png';


export default function Footer(props) {

    return <footer className={style.footer}>
        <div className={style.div}>
            <img src={img1} alt=""/>
            <span className={style.span}>+375 (29) 123-45-67</span>
        </div>
        <div className={style.div}>
            <img src={img2} alt=""/>
            <span className={style.span}>Минск, пр. Независимости 4</span>
        </div>
        <div className={style.div}>
            <img src={img3} alt=""/>
            <span className={style.span}>adamandeve@gmail.com</span>
        </div>
    </footer>;
};