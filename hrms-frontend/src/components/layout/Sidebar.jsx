import { Link, useLocation }
from "react-router-dom";

function Sidebar() {

    const role =
        localStorage.getItem(
            "role"
        );

    const location =
        useLocation();

    const menuClass =
        (path) =>

            `group flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300 text-[14px] font-semibold relative overflow-hidden

            ${location.pathname === path

                ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-2xl scale-[1.02] border border-white/10"

                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`;

    return (

        <div className="w-64 h-screen bg-[#050816] text-white fixed border-r border-white/10 flex flex-col justify-between shadow-2xl overflow-hidden z-50">

            {/* TOP */}

            <div className="p-5 overflow-y-auto scrollbar-hide">

                {/* LOGO */}

                <div className="mb-10">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-2xl text-2xl">

                            🚀

                        </div>

                        <div>

                            <h1 className="text-2xl font-black tracking-wide">

                                HRMS

                            </h1>

                            <p className="text-[11px] text-gray-500 mt-1">

                                Enterprise Suite

                            </p>

                        </div>

                    </div>

                </div>

                {/* MAIN */}

                <div className="mb-8">

                    <h2 className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-4 font-bold px-2">

                        Main

                    </h2>

                    <ul className="space-y-2">

                        <li>

                            <Link

                                to={
                                    role === "ADMIN"

                                        ? "/admin"

                                        : role === "HR"

                                        ? "/hr"

                                        : "/employee"
                                }

                                className={menuClass(

                                    role === "ADMIN"

                                        ? "/admin"

                                        : role === "HR"

                                        ? "/hr"

                                        : "/employee"
                                )}>

                                <span className="text-xl">

                                    📊

                                </span>

                                Dashboard

                            </Link>

                        </li>

                    </ul>

                </div>

                {/* WORKFORCE */}

                <div className="mb-8">

                    <h2 className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-4 font-bold px-2">

                        Workforce

                    </h2>

                    <ul className="space-y-2">

                        {(role === "ADMIN" || role === "HR") && (

                            <li>

                                <Link
                                    to="/employees"

                                    className={menuClass(
                                        "/employees"
                                    )}>

                                    <span className="text-xl">

                                        👨‍💼

                                    </span>

                                    Employees

                                </Link>

                            </li>
                        )}

                        <li>

                            <Link
                                to="/attendance"

                                className={menuClass(
                                    "/attendance"
                                )}>

                                <span className="text-xl">

                                    🕒

                                </span>

                                Attendance

                            </Link>

                        </li>

                        <li>

                            <Link
                                to="/leave"

                                className={menuClass(
                                    "/leave"
                                )}>

                                <span className="text-xl">

                                    🌴

                                </span>

                                Leave

                            </Link>

                        </li>

                        {(role === "ADMIN" || role === "HR") && (

                            <li>

                                <Link
                                    to="/payroll"

                                    className={menuClass(
                                        "/payroll"
                                    )}>

                                    <span className="text-xl">

                                        💰

                                    </span>

                                    Payroll

                                </Link>

                            </li>
                        )}

                    </ul>

                </div>

                {/* DOCUMENTS */}

                <div className="mb-8">

                    <h2 className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-4 font-bold px-2">

                        Documents

                    </h2>

                    <ul className="space-y-2">

                        <li>

                            <Link
                                to="/files"

                                className={menuClass(
                                    "/files"
                                )}>

                                <span className="text-xl">

                                    📁

                                </span>

                                Files

                            </Link>

                        </li>

                        {(role === "ADMIN" || role === "HR") && (

                            <li>

                                <Link
                                    to="/reports"

                                    className={menuClass(
                                        "/reports"
                                    )}>

                                    <span className="text-xl">

                                        📑

                                    </span>

                                    Reports

                                </Link>

                            </li>
                        )}

                    </ul>

                </div>

                {/* COMMUNICATION */}

                {(role === "ADMIN" || role === "HR") && (

                    <div className="mb-8">

                        <h2 className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-4 font-bold px-2">

                            Communication

                        </h2>

                        <ul className="space-y-2">

                            <li>

                                <Link
                                    to="/notifications"

                                    className={menuClass(
                                        "/notifications"
                                    )}>

                                    <span className="text-xl">

                                        🔔

                                    </span>

                                    Notifications

                                </Link>

                            </li>

                            <li>

                                <Link
                                    to="/email"

                                    className={menuClass(
                                        "/email"
                                    )}>

                                    <span className="text-xl">

                                        ✉️

                                    </span>

                                    Email Center

                                </Link>

                            </li>

                        </ul>

                    </div>
                )}

                {/* ACCOUNT */}

                <div>

                    <h2 className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-4 font-bold px-2">

                        Account

                    </h2>

                    <ul className="space-y-2">

                        <li>

                            <Link
                                to="/profile"

                                className={menuClass(
                                    "/profile"
                                )}>

                                <span className="text-xl">

                                    👤

                                </span>

                                Profile

                            </Link>

                        </li>

                        {role === "ADMIN" && (

                            <li>

                                <Link
                                    to="/settings"

                                    className={menuClass(
                                        "/settings"
                                    )}>

                                    <span className="text-xl">

                                        ⚙️

                                    </span>

                                    Settings

                                </Link>

                            </li>
                        )}

                    </ul>

                </div>

            </div>

            {/* FOOTER */}

            <div className="p-5 border-t border-white/5">

                <div className="bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-700/10 rounded-3xl p-5 border border-white/10 backdrop-blur-xl shadow-2xl">

                    <div className="flex items-center justify-between mb-4">

                        <div>

                            <h2 className="font-black text-lg">

                                HRMS Pro

                            </h2>

                            <p className="text-[11px] text-gray-400 mt-1">

                                Enterprise Platform

                            </p>

                        </div>

                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-700 flex items-center justify-center shadow-lg text-lg">

                            ⚡

                        </div>

                    </div>

                    <div className="flex items-center justify-between mt-4">

                        <span className="text-[10px] bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold">

                            ● Online

                        </span>

                        <span className="text-[10px] text-gray-500 font-semibold">

                            v2.0

                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Sidebar;