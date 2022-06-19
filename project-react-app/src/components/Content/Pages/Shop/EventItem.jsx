import React, {useEffect, useState} from 'react';
import MyModal from "../../../UI/MyModal/MyModal";
import MyButton from "../../../UI/button/MyButton";
import PostForm from "../../../UI/PostForm";

const EventItem = (props) => {

    const [modal, setModal] = useState(false);

    const disableModal = (newPost) => {
        setModal(false);
    }



    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
            <p>{props.description}</p>
            <h3>{props.price}$</h3>

            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Заказать
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm disableModal = {disableModal}  name = {props.name}/>
            </MyModal>
        </div>
)
;
};

export default EventItem;