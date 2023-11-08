import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="progress w-full"></div>
    }
    if (!user?.email) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;