import {useEffect, useState} from "react";
import Loader from "../../../../Loader/Loader";
import LibraryItem from "./LibraryItem";


export default function Library(props) {

    let [state, setState] = useState([])
    let [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3002/api/v1/library`, {}).then((response) => {
            return response.json();
        })
            .then((data) => {
                setState(data);
                setIsLoading(false);
            });
    }, []);

    return <div>
        <h2>Наши Авторы</h2>
        {isLoading && <Loader/>}
        {!isLoading && state.map((lib) => {
                return <LibraryItem
                    key={lib.name + lib.sName}
                    name={lib.name}
                    sName={lib.sName}
                    book={lib.book}
                    cover={lib.cover}/>

            }
        )
        }
    </div>;
};