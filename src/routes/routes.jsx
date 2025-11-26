import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import HowToBuy from "../pages/Howtobuy";
import Tokenomics from "../pages/Tokenomics";
import Roadmap from "../pages/Roadmap";
import Month from "../pages/Month";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/buy', element: <HowToBuy /> },
            { path: '/tokenomics', element: <Tokenomics /> },
            {
                path: '/roadmap', element: <Roadmap />,
                children: [
                    { path:'/roadmap/:value', element: <Month/>}
                ]
            },
        ]

    },
])

export default routes