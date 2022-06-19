import style from './MyInput.module.css'
import React from "react";

const MyInput = (props) => {
    return (
        <input {...props} className={style.myInput}/>
    );
};

export default MyInput;