import { useEffect, useState }
from "react";

import API
from "../../api/axiosConfig";

import MainLayout
from "../../components/layout/MainLayout";

function Attendance() {

    const [attendance,
        setAttendance] =

        useState([]);

    const [employeeId,
        setEmployeeId] =

        useState("");

    useEffect(() => {

        fetchAttendance();

    }, []);

    const fetchAttendance =
        async () => {

            try {

                const response =

                    await API.get(
                        "/attendance"
                    );

                setAttendance(
                    response.data
                );

            } catch (error) {

                console.log(error);
            }
        };

    const handleCheckIn =
        async () => {

            if (!employeeId)
                return;

            try {

                await API.post(

                    `/attendance/checkin/${employeeId}`
                );

                fetchAttendance();

                setEmployeeId("");

            } catch (error) {

                console.log(error);
            }
        };

    const handleCheckOut =
        async () => {

            if (!employeeId)
                return;

            try {

                await API.post(

                    `/attendance/checkout/${employeeId}`
                );

                fetchAttendance();

                setEmployeeId("");

            } catch (error) {

                console.log(error);
            }
        };

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 rounded-3xl px-10 py-10 text-white shadow-xl mb-5">

                <h1 className="text-4xl font-black leading-tight">

                    Attendance Management

                </h1>

                <p className="text-sm text-green-100 mt-3 max-w-2xl">

                    Monitor employee attendance, check-in workflow and workforce activity in real-time.

                </p>

            </div>

            {/* KPI CARDS */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                {/* CARD */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Total Records

                    </p>

                    <h2 className="text-4xl font-black text-blue-600 mt-4">

                        {attendance.length}

                    </h2>

                </div>

                {/* CARD */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Present

                    </p>

                    <h2 className="text-4xl font-black text-green-600 mt-4">

                        {
                            attendance.filter(

                                item =>

                                    item.status ===
                                    "PRESENT"

                            ).length
                        }

                    </h2>

                </div>

                {/* CARD */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Performance

                    </p>

                    <h2 className="text-4xl font-black text-purple-600 mt-4">

                        96%

                    </h2>

                </div>

                {/* CARD */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Workforce

                    </p>

                    <h2 className="text-4xl font-black text-orange-500 mt-4">

                        Active

                    </h2>

                </div>

            </div>

            {/* ACTIONS */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-5">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Attendance Actions

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Manage employee check-in and check-out operations

                        </p>

                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">

                        🕒

                    </div>

                </div>

                <div className="flex gap-4">

                    <input
                        type="number"

                        placeholder="Enter Employee ID"

                        value={employeeId}

                        onChange={(e) =>

                            setEmployeeId(
                                e.target.value
                            )
                        }

                        className="flex-1 border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-blue-600 text-gray-700 shadow-sm"
                    />

                    <button

                        onClick={handleCheckIn}

                        className="px-8 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg hover:scale-105 transition-all">

                        ✅ Check In

                    </button>

                    <button

                        onClick={handleCheckOut}

                        className="px-8 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 text-white font-bold shadow-lg hover:scale-105 transition-all">

                        ❌ Check Out

                    </button>

                </div>

            </div>

            {/* TABLE */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Attendance Records

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Employee attendance history

                        </p>

                    </div>

                    <button className="px-5 h-11 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold shadow-md hover:scale-105 transition-all">

                        Export Report

                    </button>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                        <thead>

                            <tr className="bg-gray-100 text-gray-700">

                                <th className="px-4 py-4 rounded-l-2xl text-left">

                                    ID

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Employee

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Date

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Check In

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Check Out

                                </th>

                                <th className="px-4 py-4 rounded-r-2xl text-left">

                                    Status

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                attendance.map(

                                    (item) => (

                                        <tr
                                            key={item.id}

                                            className="border-b border-gray-100 hover:bg-gray-50 transition-all">

                                            <td className="px-4 py-5 font-bold text-gray-700">

                                                #{item.id}

                                            </td>

                                            <td className="px-4 py-5">

                                                <div className="flex items-center gap-3">

                                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-md">

                                                        {
                                                            item.employee
                                                                ?.name
                                                                ?.charAt(0)
                                                        }

                                                    </div>

                                                    <div>

                                                        <h3 className="font-bold text-gray-800">

                                                            {
                                                                item.employee
                                                                    ?.name
                                                            }

                                                        </h3>

                                                        <p className="text-xs text-gray-500">

                                                            Employee

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="px-4 py-5 text-gray-600">

                                                {
                                                    item.date
                                                }

                                            </td>

                                            <td className="px-4 py-5 text-gray-600">

                                                {
                                                    item.checkInTime
                                                }

                                            </td>

                                            <td className="px-4 py-5 text-gray-600">

                                                {
                                                    item.checkOutTime
                                                        || "-"
                                                }

                                            </td>

                                            <td className="px-4 py-5">

                                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold">

                                                    {
                                                        item.status
                                                    }

                                                </span>

                                            </td>

                                        </tr>
                                    )
                                )
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </MainLayout>
    );
}

export default Attendance;