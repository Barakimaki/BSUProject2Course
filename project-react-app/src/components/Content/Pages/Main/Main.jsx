import APIService from "../../../../api/api";
import {useEffect} from "react";


export default function Main(props) {



    const result = async ()=> await APIService.getHome();


    useEffect(() => {
        console.log(result());
    }, []);

    return <div>
        <h2>Main</h2>
    </div>;
};