import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import Root from "../layout/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import FoodDetail from "../component/Detail/FoodDetail";
import AllFood from "../component/AllFood/AllFood";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Purchase from "../component/Purchase/Purchase";
import AddFood from "../component/AddFood/AddFood";
import MyPurchase from "../component/MyPurchase/MyPurchase";

import MyAdd from "../component/MyAdd/MyAdd";
import Update from "../component/Update/Update";
import Gallery from "../component/Gallery/Gallery";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/all',
                element: <AllFood></AllFood>,
               // loader: () => fetch('https://resturant-server-liart.vercel.app/food')
            },
            {
                path: '/food/:id',
                element:<FoodDetail></FoodDetail>,
                loader: ({params}) => fetch(`https://resturant-server-liart.vercel.app/food/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({params}) => fetch(`https://resturant-server-liart.vercel.app/food/${params.id}`)
            },
            {
                path: '/add',
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: '/myadd',
                element: <PrivateRoute>
                    <MyAdd></MyAdd>
                </PrivateRoute>,
              //  loader: () => fetch('https://resturant-server-liart.vercel.app/food')
            },
            {
                path: '/gallery',
                element: <PrivateRoute>
                    <Gallery></Gallery>
                </PrivateRoute>,
               // loader: () => fetch('https://resturant-server-liart.vercel.app/gallery')
            },
            {
                path: '/order',
                element: <PrivateRoute>
                    <MyPurchase></MyPurchase>
                </PrivateRoute>,
               // loader: () => fetch('https://resturant-server-liart.vercel.app/purchase')
            },
            {
            path: '/myadd/update/:id',
            element: <PrivateRoute>
                <Update></Update>
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://resturant-server-liart.vercel.app/food/${params.id}`)
        },
        ]
    }    
]);

export default router;