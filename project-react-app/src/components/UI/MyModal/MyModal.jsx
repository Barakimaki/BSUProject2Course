import style from './MyModal.module.css';


const MyModal = ({children, visible, setVisible}) => {

    const rootClasses =[style.MyModal];
    if(visible){
        rootClasses.push(style.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={style.MyModalContent} onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;