import APIService from "../../../../api/api";
import {useEffect, useState} from "react";


export default function Main(props) {


    let [state, setState] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/home`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                console.log(data);
                setState(data)
            });
    }, []);

    return <div>
        <h2>Main</h2>
    </div>;
};