import style from './AppContent.module.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../routes/routes";
import EventItem from "./Pages/Shop/EventItem";

export default function AppContent(props) {

    return <Routes className={style.appContent}>
        {routes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
    </Routes>;
};