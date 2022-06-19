import React, {useEffect, useState} from 'react';
import MyModal from "../../../UI/MyModal/MyModal";
import MyButton from "../../../UI/button/MyButton";
import PostForm from "../../../UI/PostForm";
import style from "./EventItem.module.css"

const EventItem = (props) => {

    const [modal, setModal] = useState(false);

    const disableModal = (newPost) => {
        setModal(false);
    }



    return (
        <div>
            <h3 className={style.h3}>{props.name}</h3>
            <img src={props.image} alt=""/>
            <p className={style.p}>{props.description}</p>
            <h3 className={style.h3}>{props.price}$</h3>

            <MyButton style={{marginTop: 10, marginBottom: 35}} onClick={() => setModal(true)}>
                ЗАКАЗАТЬ
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm disableModal = {disableModal}  name = {props.name}/>
            </MyModal>
        </div>
)
;
};

export default EventItem;