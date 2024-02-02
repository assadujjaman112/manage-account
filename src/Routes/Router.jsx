import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children : [
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/signUp",
            element : <Register></Register>
        }
    ]
  },
]);

export default router;
