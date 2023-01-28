import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TableBarang from '../components/table/TableBarang';
import ErrorHandler from '../handlers/error/ErrorHandler';
import EditData from '../pages/items/EditData';


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorHandler />,
    },
    {
        path: "/items",
        element: <TableBarang />,
        errorElement: <ErrorHandler />,
    },
    {
        path: "/items/edit",
        element: <EditData />,
        errorElement: <ErrorHandler />,
    },
]);

const Route = () => {
    return (
        <RouterProvider router={router} />
    )
}


export default Route;