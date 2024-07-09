import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Delivery} from "@/Components/Delivery.tsx";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
},
    {
        path: '/delivery',
        element: <Delivery/>,
    }
]);
const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <RouterProvider router={router}/>
    );
}
