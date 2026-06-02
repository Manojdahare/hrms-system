import { useEffect, useState }
from "react";

import API
from "../../api/axiosConfig";

import MainLayout
from "../../components/layout/MainLayout";

function AdminDashboard() {

    const [dashboard,
        setDashboard] =

        useState({

            totalEmployees: 0,

            totalLeaves: 0,

            payrollCost: 0,

            attendanceRate: 0
        });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard =
        async () => {

            try {

                const response =

                    await API.get(
                        "/admin/dashboard"
                    );

                console.log(
                    response.data
                );

                setDashboard(
                    response.data
                );

            } catch (error) {

                console.log(error);
            }
        };

    return (

        <MainLayout>

            {/* HEADER */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h1 className="text-3xl font-black text-gray-900">

                        Welcome Back, Admin 👋

                    </h1>

                    <p className="text-sm text-gray-500 mt-1">

                        Monitor employees, payroll, attendance and enterprise operations.

                    </p>

                </div>

                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl px-5 py-3">

                    <p className="text-xs text-gray-500 font-semibold">

                        SYSTEM STATUS

                    </p>

                    <div className="flex items-center gap-2 mt-2">

                        <div className="w-2.5 h-2.5 rounded-full bg-green-500">

                        </div>

                        <span className="text-sm font-bold text-gray-800">

                            All Services Online

                        </span>

                    </div>

                </div>

            </div>

            {/* KPI CARDS */}

            <div className="grid grid-cols-4 gap-5 mb-6">

                {/* EMPLOYEES */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-medium">

                                Total Employees

                            </p>

                            <h2 className="text-3xl font-black mt-3 text-gray-900">

                                {
                                    dashboard.totalEmployees || 0
                                }

                            </h2>

                            <p className="text-xs text-green-600 font-bold mt-3">

                                ↑ +12% this month

                            </p>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">

                            👨‍💼

                        </div>

                    </div>

                </div>

                {/* PAYROLL */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-medium">

                                Payroll Cost

                            </p>

                            <h2 className="text-3xl font-black mt-3 text-gray-900">

                                ₹{
                                    dashboard.payrollCost || 0
                                }

                            </h2>

                            <p className="text-xs text-red-500 font-bold mt-3">

                                ↑ +8% payroll growth

                            </p>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">

                            💰

                        </div>

                    </div>

                </div>

                {/* LEAVES */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-medium">

                                Leave Requests

                            </p>

                            <h2 className="text-3xl font-black mt-3 text-gray-900">

                                {
                                    dashboard.totalLeaves || 0
                                }

                            </h2>

                            <p className="text-xs text-orange-500 font-bold mt-3">

                                Pending approvals

                            </p>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-2xl">

                            🌴

                        </div>

                    </div>

                </div>

                {/* ATTENDANCE */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-medium">

                                Attendance Rate

                            </p>

                            <h2 className="text-3xl font-black mt-3 text-gray-900">

                                {
                                    dashboard.attendanceRate || 0
                                }%

                            </h2>

                            <p className="text-xs text-purple-600 font-bold mt-3">

                                Excellent performance

                            </p>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">

                            🕒

                        </div>

                    </div>

                </div>

            </div>

            {/* LOWER SECTION */}

            <div className="grid grid-cols-3 gap-5">

                {/* ACTIVITY */}

                <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

                    <div className="flex items-center justify-between mb-5">

                        <h2 className="text-xl font-black text-gray-900">

                            Recent Activities

                        </h2>

                        <button className="text-sm font-bold text-blue-600">

                            View All

                        </button>

                    </div>

                    <div className="space-y-4">

                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">

                                    👨‍💼

                                </div>

                                <div>

                                    <h3 className="font-bold text-sm text-gray-800">

                                        New Employee Added

                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">

                                        Manoj joined Development Team

                                    </p>

                                </div>

                            </div>

                            <span className="text-xs text-gray-400">

                                2 min ago

                            </span>

                        </div>

                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center">

                                    💰

                                </div>

                                <div>

                                    <h3 className="font-bold text-sm text-gray-800">

                                        Payroll Processed

                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">

                                        Monthly salary credited successfully

                                    </p>

                                </div>

                            </div>

                            <span className="text-xs text-gray-400">

                                1 hour ago

                            </span>

                        </div>

                    </div>

                </div>

                {/* QUICK INSIGHTS */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

                    <h2 className="text-xl font-black text-gray-900 mb-5">

                        Quick Insights

                    </h2>

                    <div className="space-y-5">

                        <div>

                            <div className="flex justify-between mb-2">

                                <span className="text-sm font-semibold text-gray-600">

                                    Employee Growth

                                </span>

                                <span className="text-sm font-bold text-blue-600">

                                    78%

                                </span>

                            </div>

                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

                                <div className="w-[78%] h-full bg-blue-600 rounded-full">

                                </div>

                            </div>

                        </div>

                        <div>

                            <div className="flex justify-between mb-2">

                                <span className="text-sm font-semibold text-gray-600">

                                    Attendance

                                </span>

                                <span className="text-sm font-bold text-green-600">

                                    92%

                                </span>

                            </div>

                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

                                <div className="w-[92%] h-full bg-green-600 rounded-full">

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default AdminDashboard;