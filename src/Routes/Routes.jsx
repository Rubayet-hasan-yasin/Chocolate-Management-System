import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddCocolate from "../Pages/AddChocolate/AddChocolate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Home/></PrivateRoute>
    },
    {
        path: '/newCocolate',
        element: <PrivateRoute><AddCocolate/></PrivateRoute>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])


export default router;