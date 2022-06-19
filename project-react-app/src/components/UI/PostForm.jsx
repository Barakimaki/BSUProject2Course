import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = (props) => {


    const [postBody, setPostBody] = useState({name: props.name, user: '', tel: 0});

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postBody)
    };

    const post = () => {
        fetch('http://localhost:3002/api/v1/shop', requestOptions)
            .then((response) => {
                return response.json();
            });
        alert("Заказ принят. Ожидайте звонка");
    }

    const doPost = (e) => {
        e.preventDefault();
        props.disableModal();
        post();
        setPostBody({name: props.name, user: '', tel: 0})

    };

    return (
        <form action="">
            <MyInput
                value={postBody.title}
                onChange={e => setPostBody({...postBody, user: e.target.value})}
                type="text"
                placeholder="Ваше имя"/>
            <MyInput
                value={postBody.body}
                onChange={e => setPostBody({...postBody, tel: e.target.value})}
                type="tel"
                placeholder="Номер телефона"/>
            <MyButton onClick={doPost} disabled={false}>Отправить</MyButton>
        </form>
    );
};

export default PostForm;