import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import HowToBuy from "../pages/Howtobuy";
import Tokenomics from "../pages/Tokenomics";
import Roadmap from "../pages/Roadmap";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/buy', element: <HowToBuy /> },
            { path: '/tokenomics', element: <Tokenomics /> },
            { path: '/roadmap', element: <Roadmap /> },
        ]

    },
])

export default routes