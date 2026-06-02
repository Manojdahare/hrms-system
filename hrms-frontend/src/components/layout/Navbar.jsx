import { useNavigate, useLocation }
from "react-router-dom";

function Navbar() {

    const navigate =
        useNavigate();

    const location =
        useLocation();

    const username =

        localStorage.getItem(
            "username"
        );

    const role =

        localStorage.getItem(
            "role"
        );

    const handleLogout = () => {

        localStorage.clear();

        navigate("/");
    };

    const getPageTitle = () => {

        switch (
            location.pathname
        ) {

            case "/admin":

                return "Admin Dashboard";

            case "/hr":

                return "HR Dashboard";

            case "/employee":

                return "Employee Dashboard";

            case "/employees":

                return "Employees";

            case "/attendance":

                return "Attendance";

            case "/leave":

                return "Leave Management";

            case "/payroll":

                return "Payroll";

            case "/files":

                return "File Center";

            case "/reports":

                return "Reports";

            case "/profile":

                return "My Profile";

            case "/notifications":

                return "Notifications";

            case "/email":

                return "Email Center";

            case "/settings":

                return "Settings";

            default:

                return "HRMS";
        }
    };

    const getSubtitle = () => {

        switch (
            location.pathname
        ) {

            case "/admin":

                return "Enterprise administration controls";

            case "/hr":

                return "Human resource operations";

            case "/employee":

                return "Employee workspace";

            case "/employees":

                return "Manage workforce and employees";

            case "/attendance":

                return "Real-time attendance monitoring";

            case "/leave":

                return "Leave approval workflow";

            case "/payroll":

                return "Salary and payroll operations";

            case "/files":

                return "Enterprise document storage";

            case "/reports":

                return "Business analytics and reports";

            case "/profile":

                return "Manage your profile";

            case "/notifications":

                return "Enterprise notifications";

            case "/email":

                return "Corporate email management";

            case "/settings":

                return "Platform configurations";

            default:

                return "Enterprise HRMS Platform";
        }
    };

    return (

        <div className="sticky top-0 z-40 h-[86px] bg-white/75 backdrop-blur-2xl border-b border-white/20 flex items-center justify-between px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

            {/* LEFT */}

            <div>

                <h1 className="text-[30px] leading-none font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">

                    {getPageTitle()}

                </h1>

                <p className="text-[12px] text-gray-500 mt-2 font-medium tracking-wide">

                    {getSubtitle()}

                </p>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-4">

                {/* SEARCH */}

                <div className="hidden lg:flex items-center bg-white border border-gray-200/80 rounded-2xl px-5 h-12 w-[260px] shadow-sm hover:shadow-md transition-all">

                    <input
                        type="text"

                        placeholder="Search..."

                        className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
                    />

                    <span className="text-lg text-gray-500">

                        🔍

                    </span>

                </div>

                {/* NOTIFICATION */}

                <div className="relative">

                    <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300 text-lg">

                        🔔

                    </button>

                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-md">

                        3

                    </div>

                </div>

                {/* USER */}

                <div className="hidden md:flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all">

                    <div className="relative">

                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-sm shadow-lg">

                            {
                                username
                                    ?.charAt(0)
                                    ?.toUpperCase()
                            }

                        </div>

                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow">

                        </div>

                    </div>

                    <div>

                        <h2 className="text-sm font-black text-gray-800 leading-none">

                            {username}

                        </h2>

                        <p className="text-[10px] text-gray-500 uppercase tracking-[2px] font-bold mt-1">

                            {role}

                        </p>

                    </div>

                </div>

                {/* LOGOUT */}

                <button

                    onClick={handleLogout}

                    className="h-12 px-6 rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white text-sm font-black shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">

                    Logout

                </button>

            </div>

        </div>
    );
}

export default Navbar;