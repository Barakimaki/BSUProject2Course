import Main from "../components/Content/Pages/Main/Main";
import Reviews from "../components/Content/Pages/Reviews/Reviews";
import Events from "../components/Content/Pages/Shop/Events";


export const routes = [
    {path: '/*', component: <Main />},
    {path: '/reviews', component: <Reviews />},
    {path: '/shop', component: <Events />},
]