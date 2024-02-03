import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }
  return (
    <div className="h-screen flex justify-center items-center bg-blue-200">
      <h1 className="text-4xl font-bold">Login to see your profile</h1>
    </div>
  );
};

export default PrivateRoute;
