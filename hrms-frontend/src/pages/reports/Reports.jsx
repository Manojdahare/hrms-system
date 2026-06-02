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
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line

} from "recharts";

function Reports() {

    const employeeData = [

        {
            month: "Jan",
            employees: 45
        },

        {
            month: "Feb",
            employees: 52
        },

        {
            month: "Mar",
            employees: 61
        },

        {
            month: "Apr",
            employees: 70
        },

        {
            month: "May",
            employees: 84
        },

        {
            month: "Jun",
            employees: 96
        }
    ];

    const attendanceData = [

        {
            name: "Present",
            value: 85
        },

        {
            name: "Absent",
            value: 10
        },

        {
            name: "Leave",
            value: 5
        }
    ];

    const payrollData = [

        {
            month: "Jan",
            payroll: 40000
        },

        {
            month: "Feb",
            payroll: 45000
        },

        {
            month: "Mar",
            payroll: 47000
        },

        {
            month: "Apr",
            payroll: 52000
        },

        {
            month: "May",
            payroll: 58000
        },

        {
            month: "Jun",
            payroll: 65000
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

            <div className="ml-64 w-full min-h-screen">

                <Navbar />

                <div className="p-6">

                    {/* HEADER */}

                    <div className="mb-6">

                        <h1 className="text-3xl font-black text-gray-800">

                            Reports & Analytics

                        </h1>

                        <p className="text-gray-500 mt-1 text-sm">

                            Enterprise workforce analytics dashboard

                        </p>

                    </div>

                    {/* KPI CARDS */}

                    <div className="grid grid-cols-4 gap-5 mb-6">

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Total Employees

                            </p>

                            <h2 className="text-3xl font-black text-blue-600 mt-3">

                                96

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Attendance Rate

                            </p>

                            <h2 className="text-3xl font-black text-green-600 mt-3">

                                85%

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Payroll Cost

                            </p>

                            <h2 className="text-3xl font-black text-purple-600 mt-3">

                                ₹65K

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Performance

                            </p>

                            <h2 className="text-3xl font-black text-orange-500 mt-3">

                                A+

                            </h2>

                        </div>

                    </div>

                    {/* CHARTS */}

                    <div className="grid grid-cols-2 gap-6 mb-6">

                        {/* BAR CHART */}

                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">

                            <div className="mb-5">

                                <h2 className="text-xl font-black text-gray-800">

                                    Employee Growth

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Monthly employee statistics

                                </p>

                            </div>

                            <ResponsiveContainer
                                width="100%"
                                height={300}>

                                <BarChart
                                    data={employeeData}>

                                    <XAxis
                                        dataKey="month"
                                    />

                                    <YAxis />

                                    <Tooltip />

                                    <Bar
                                        dataKey="employees"
                                        radius={[8, 8, 0, 0]}
                                        fill="#2563eb"
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                        {/* PIE CHART */}

                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">

                            <div className="mb-5">

                                <h2 className="text-xl font-black text-gray-800">

                                    Attendance Distribution

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Present vs absent analytics

                                </p>

                            </div>

                            <ResponsiveContainer
                                width="100%"
                                height={300}>

                                <PieChart>

                                    <Pie

                                        data={attendanceData}

                                        cx="50%"

                                        cy="50%"

                                        outerRadius={100}

                                        dataKey="value"

                                        label>

                                        {
                                            attendanceData.map(

                                                (entry, index) => (

                                                    <Cell

                                                        key={index}

                                                        fill={
                                                            COLORS[index]
                                                        }
                                                    />
                                                )
                                            )
                                        }

                                    </Pie>

                                    <Tooltip />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* LINE CHART */}

                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">

                        <div className="mb-5">

                            <h2 className="text-xl font-black text-gray-800">

                                Payroll Analytics

                            </h2>

                            <p className="text-gray-500 text-sm mt-1">

                                Monthly salary expenditure trend

                            </p>

                        </div>

                        <ResponsiveContainer
                            width="100%"
                            height={350}>

                            <LineChart
                                data={payrollData}>

                                <XAxis
                                    dataKey="month"
                                />

                                <YAxis />

                                <Tooltip />

                                <Line

                                    type="monotone"

                                    dataKey="payroll"

                                    stroke="#7c3aed"

                                    strokeWidth={4}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Reports;