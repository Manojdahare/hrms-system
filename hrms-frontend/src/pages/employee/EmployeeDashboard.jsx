import MainLayout
from "../../components/layout/MainLayout";

import {
    Link
} from "react-router-dom";

function EmployeeDashboard() {

    const username =

        localStorage.getItem(
            "username"
        );

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 rounded-3xl px-10 py-8 text-white shadow-xl mb-5 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl">

                </div>

                <div className="relative z-10 flex justify-between items-center">

                    <div>

                        <div className="flex items-center gap-3 mb-4">

                            <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-bold">

                                ● Online

                            </span>

                            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">

                                Employee ID : EMP1024

                            </span>

                        </div>

                        <h1 className="text-5xl font-black leading-tight">

                            Welcome Back,
                            <br />

                            {username}

                        </h1>

                        <p className="text-cyan-100 text-sm mt-4 max-w-2xl leading-7">

                            Manage your attendance,
                            leaves, payroll and employee
                            activities from your enterprise dashboard.

                        </p>

                        <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all">

                            Explore Dashboard

                        </button>

                    </div>

                    {/* PROFILE */}

                    <div className="hidden lg:flex flex-col items-center">

                        <div className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-5xl font-black shadow-2xl">

                            {
                                username
                                    ?.charAt(0)
                                    ?.toUpperCase()
                            }

                        </div>

                        <h2 className="mt-4 text-xl font-black">

                            {username}

                        </h2>

                        <p className="text-cyan-100 text-sm">

                            Software Engineer

                        </p>

                    </div>

                </div>

            </div>

            {/* KPI CARDS */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm font-semibold">

                                Attendance

                            </p>

                            <h2 className="text-4xl font-black text-blue-600 mt-3">

                                96%

                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center text-3xl">

                            🕒

                        </div>

                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full mt-5 overflow-hidden">

                        <div className="w-[96%] h-full bg-blue-600 rounded-full">

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm font-semibold">

                                Leaves

                            </p>

                            <h2 className="text-4xl font-black text-orange-500 mt-3">

                                05

                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center text-3xl">

                            🌴

                        </div>

                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full mt-5 overflow-hidden">

                        <div className="w-[40%] h-full bg-orange-500 rounded-full">

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm font-semibold">

                                Salary

                            </p>

                            <h2 className="text-4xl font-black text-green-600 mt-3">

                                ₹50K

                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-3xl bg-green-100 flex items-center justify-center text-3xl">

                            💰

                        </div>

                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full mt-5 overflow-hidden">

                        <div className="w-[88%] h-full bg-green-600 rounded-full">

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm font-semibold">

                                Performance

                            </p>

                            <h2 className="text-4xl font-black text-purple-600 mt-3">

                                A+

                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center text-3xl">

                            🚀

                        </div>

                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full mt-5 overflow-hidden">

                        <div className="w-[95%] h-full bg-purple-600 rounded-full">

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}

            <div className="grid grid-cols-3 gap-5">

                {/* LEFT */}

                <div className="col-span-2 space-y-5">

                    {/* RECENT ACTIVITY */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-2xl font-black text-gray-900">

                                Recent Activity

                            </h2>

                            <button className="text-blue-600 font-bold text-sm">

                                View All

                            </button>

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">

                                        🕒

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-gray-800">

                                            Attendance Checked In

                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">

                                            Today • 09:05 AM

                                        </p>

                                    </div>

                                </div>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">

                                    Completed

                                </span>

                            </div>

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">

                                        💰

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-gray-800">

                                            Salary Credited

                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">

                                            ₹50,000 credited this month

                                        </p>

                                    </div>

                                </div>

                                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold">

                                    Payroll

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">

                                        🌴

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-gray-800">

                                            Leave Approved

                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">

                                            Your leave request was approved

                                        </p>

                                    </div>

                                </div>

                                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold">

                                    Approved

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* QUICK ACTIONS */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Quick Actions

                        </h2>

                        <div className="grid grid-cols-2 gap-5">

                            <Link
                                to="/attendance"

                                className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-all">

                                <div className="text-4xl mb-4">

                                    🕒

                                </div>

                                <h3 className="text-xl font-black">

                                    Mark Attendance

                                </h3>

                            </Link>

                            <Link
                                to="/leave"

                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-all">

                                <div className="text-4xl mb-4">

                                    🌴

                                </div>

                                <h3 className="text-xl font-black">

                                    Apply Leave

                                </h3>

                            </Link>

                            <Link
                                to="/payroll"

                                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-all">

                                <div className="text-4xl mb-4">

                                    💰

                                </div>

                                <h3 className="text-xl font-black">

                                    Download Salary Slip

                                </h3>

                            </Link>

                            <Link
                                to="/files"

                                className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-all">

                                <div className="text-4xl mb-4">

                                    📁

                                </div>

                                <h3 className="text-xl font-black">

                                    Upload Documents

                                </h3>

                            </Link>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="space-y-5">

                    {/* HOLIDAYS */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Upcoming Holidays

                        </h2>

                        <div className="space-y-4">

                            <div className="bg-blue-50 rounded-2xl p-4">

                                <p className="text-xs text-blue-600 font-bold">

                                    15 AUG

                                </p>

                                <h3 className="font-black text-gray-800 mt-1">

                                    Independence Day

                                </h3>

                            </div>

                            <div className="bg-orange-50 rounded-2xl p-4">

                                <p className="text-xs text-orange-600 font-bold">

                                    12 NOV

                                </p>

                                <h3 className="font-black text-gray-800 mt-1">

                                    Diwali Festival

                                </h3>

                            </div>

                            <div className="bg-green-50 rounded-2xl p-4">

                                <p className="text-xs text-green-600 font-bold">

                                    25 DEC

                                </p>

                                <h3 className="font-black text-gray-800 mt-1">

                                    Christmas Holiday

                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* TASK PROGRESS */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Task Progress

                        </h2>

                        <div className="space-y-5">

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Project Tasks

                                    </span>

                                    <span className="text-sm font-bold text-blue-600">

                                        85%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[85%] h-full bg-blue-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Team Collaboration

                                    </span>

                                    <span className="text-sm font-bold text-green-600">

                                        92%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[92%] h-full bg-green-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Productivity

                                    </span>

                                    <span className="text-sm font-bold text-purple-600">

                                        96%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[96%] h-full bg-purple-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default EmployeeDashboard;