import { Navigate }
from "react-router-dom";

function RoleProtectedRoute({

    children,

    allowedRoles

}) {

    const token =
        localStorage.getItem(
            "token"
        );

    const role =
        localStorage.getItem(
            "role"
        );

    if (!token) {

        return <Navigate to="/" />;
    }

    if (!allowedRoles.includes(role)) {

        return (

            <div className="h-screen flex items-center justify-center text-4xl font-bold text-red-600">

                Unauthorized Access

            </div>
        );
    }

    return children;
}

export default RoleProtectedRoute;