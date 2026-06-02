import { useEffect, useState }
from "react";

import Sidebar
from "../../components/layout/Sidebar";

import Navbar
from "../../components/layout/Navbar";

import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
    Legend

} from "recharts";

import {

    getDashboardData

} from "../../services/dashboard/dashboardService";

function Dashboard() {

    const username =
        localStorage.getItem(
            "username"
        );

    const [dashboardData,
        setDashboardData] =
        useState(null);

    useEffect(() => {

        fetchDashboardData();

    }, []);

    const fetchDashboardData =
        async () => {

            try {

                const response =

                    await getDashboardData();

                setDashboardData(
                    response.data.data
                );

            } catch (error) {

                console.log(error);
            }
        };

    const employeeData = [

        {
            name: "Employees",

            value:
                dashboardData?.totalEmployees || 0
        },

        {
            name: "Active",

            value:
                dashboardData?.activeEmployees || 0
        },

        {
            name: "Inactive",

            value:
                dashboardData?.inactiveEmployees || 0
        }
    ];

    const payrollData = [

        {
            name: "Payroll",

            value:
                dashboardData?.totalSalary || 0
        },

        {
            name: "Bonus",

            value: 100000
        },

        {
            name: "Deduction",

            value: 20000
        }
    ];

    const COLORS = [

        "#2563eb",
        "#16a34a",
        "#dc2626"
    ];

    return (

        <div className="flex bg-gray-100">

            <Sidebar />

            <div className="ml-72 w-full min-h-screen">

                <Navbar />

                <div className="p-8">

                    {/* HEADER */}

                    <div className="flex justify-between items-center mb-10">

                        <div>

                            <h1 className="text-5xl font-extrabold text-gray-800">

                                HRMS Dashboard

                            </h1>

                            <p className="text-gray-500 text-lg mt-3">

                                Welcome back,
                                {" "}
                                <span className="font-bold text-blue-700">

                                    {username}

                                </span>

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-3xl shadow-2xl">

                            <h2 className="text-xl font-bold">

                                Enterprise Analytics

                            </h2>

                            <p className="text-sm mt-2 opacity-80">

                                HRMS Pro Suite

                            </p>

                        </div>

                    </div>

                    {/* ANALYTICS CARDS */}

                    <div className="grid grid-cols-4 gap-8 mb-10">

                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition-all">

                            <p className="text-gray-500 font-semibold">

                                Total Employees

                            </p>

                            <h2 className="text-5xl font-bold text-blue-600 mt-4">

                                {
                                    dashboardData
                                        ?.totalEmployees || 0
                                }

                            </h2>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition-all">

                            <p className="text-gray-500 font-semibold">

                                Active Employees

                            </p>

                            <h2 className="text-5xl font-bold text-green-600 mt-4">

                                {
                                    dashboardData
                                        ?.activeEmployees || 0
                                }

                            </h2>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition-all">

                            <p className="text-gray-500 font-semibold">

                                Inactive Employees

                            </p>

                            <h2 className="text-5xl font-bold text-red-500 mt-4">

                                {
                                    dashboardData
                                        ?.inactiveEmployees || 0
                                }

                            </h2>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition-all">

                            <p className="text-gray-500 font-semibold">

                                Total Payroll

                            </p>

                            <h2 className="text-5xl font-bold text-purple-600 mt-4">

                                ₹
                                {
                                    dashboardData
                                        ?.totalSalary || 0
                                }

                            </h2>

                        </div>

                    </div>

                    {/* CHARTS */}

                    <div className="grid grid-cols-2 gap-8">

                        {/* BAR CHART */}

                        <div className="bg-white rounded-3xl shadow-xl p-8">

                            <h2 className="text-3xl font-bold mb-8">

                                Employee Analytics

                            </h2>

                            <div className="h-[400px]">

                                <ResponsiveContainer>

                                    <BarChart
                                        data={employeeData}>

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                        />

                                        <XAxis
                                            dataKey="name"
                                        />

                                        <YAxis />

                                        <Tooltip />

                                        <Bar
                                            dataKey="value"
                                            fill="#2563eb"
                                            radius={[10, 10, 0, 0]}
                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </div>

                        </div>

                        {/* PIE CHART */}

                        <div className="bg-white rounded-3xl shadow-xl p-8">

                            <h2 className="text-3xl font-bold mb-8">

                                Payroll Analytics

                            </h2>

                            <div className="h-[400px]">

                                <ResponsiveContainer>

                                    <PieChart>

                                        <Pie

                                            data={payrollData}

                                            dataKey="value"

                                            cx="50%"

                                            cy="50%"

                                            outerRadius={130}

                                            label>

                                            {
                                                payrollData.map(

                                                    (entry, index) => (

                                                        <Cell

                                                            key={`cell-${index}`}

                                                            fill={
                                                                COLORS[index % COLORS.length]
                                                            }
                                                        />
                                                    )
                                                )
                                            }

                                        </Pie>

                                        <Tooltip />

                                        <Legend />

                                    </PieChart>

                                </ResponsiveContainer>

                            </div>

                        </div>

                    </div>

                    {/* REPORT SECTION */}

                    <div className="grid grid-cols-3 gap-8 mt-10">

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl">

                            <h2 className="text-2xl font-bold">

                                Attendance Rate

                            </h2>

                            <p className="text-5xl font-bold mt-6">

                                95%

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-3xl p-8 shadow-xl">

                            <h2 className="text-2xl font-bold">

                                Monthly Growth

                            </h2>

                            <p className="text-5xl font-bold mt-6">

                                +12%

                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-3xl p-8 shadow-xl">

                            <h2 className="text-2xl font-bold">

                                Leave Requests

                            </h2>

                            <p className="text-5xl font-bold mt-6">

                                18

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;