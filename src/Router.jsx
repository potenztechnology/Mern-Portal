import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home/Home';
import User from './pages/User/user';
import Index from './pages/Index/Index';
import AdminHome from './pages/Sidebar/adminHome';
import MainAdmin from './pages/MainAdminHomePage/MainAdmin';
import AddUser from './pages/User/addUser';
import EditUser from './pages/User/editUser';
import Data from './pages/Data/data';
import AddData from './pages/Data/addData';
import EditData from './pages/Data/editData';
import Login from './pages/Login Page/login';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: 'admin',
                element: <Index />,
                children: [
                    {
                        path: "",
                        element: <AdminHome />,
                        children: [
                            {
                                path: "",
                                element: <MainAdmin />
                            },
                            {
                                path: "user",
                                element: <Index />,
                                children: [
                                    {
                                        path: "",
                                        element: <User />
                                    },
                                    {
                                        path: 'add',
                                        element: <AddUser />
                                    },
                                    {
                                        path: "edit/:id",
                                        element: <EditUser />
                                    }
                                ]
                            },
                            {
                                path: "data",
                                element: <Index />,
                                children: [
                                    {
                                        path: '',
                                        element: <Data />
                                    },
                                    {
                                        path: "add",
                                        element: <AddData />
                                    },
                                    {
                                        path: "edit/:id",
                                        element: <EditData />
                                    }
                                ]
                            }
                        ]
                    }

                ]
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router