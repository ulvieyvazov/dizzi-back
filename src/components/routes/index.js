import MainRoot from "../Pages/Client/MainRoot"
import Home from "../Pages/Client/Home/index"
import About from "../Pages/Client/About/index"
import Detail from "../Pages/Client/Detail/DetailPage"

import AdminRoot from "../Pages/Admin/AdminRoot"
import AddProduct from "../Pages/Admin/AddProduct"
import Login from "../login/Login"
import Signup from "../register"



export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,

        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/detail",
                element: <Detail />
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Signup/>
            }
        ]
    },


    {
        path: "/admin",
        element: <AdminRoot />,

        children: [
            {
                path: "/admin",
                element: <AddProduct />
            }
        ]
    }
]