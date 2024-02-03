import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../components/EditProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children : [
        {
            path : "/",
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/signUp",
            element : <Register></Register>
        },
        {
          path : "/updateProfile",
          element : <EditProfile></EditProfile>
        }
    ]
  },
]);

export default router;
