import {
    createBrowserRouter,
    //RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetail from "../pages/ServiceDetail";
import AddService from "../pages/AddService";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch(`http://localhost:5000/service`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/details/:id',
                element: <ServiceDetail />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/addService",
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>
            },
        ]
    },
]);

export default router;