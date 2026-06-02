import { useEffect, useState }
from "react";

import API
from "../../api/axiosConfig";

import MainLayout
from "../../components/layout/MainLayout";

function Leave() {

    const role =

        localStorage.getItem(
            "role"
        );

    const [leaves,
        setLeaves] =

        useState([]);

    const [formData,
        setFormData] =

        useState({

            employeeId: "",

            leaveType: "",

            startDate: "",

            endDate: "",

            reason: ""
        });

    useEffect(() => {

        fetchLeaves();

    }, []);

    const fetchLeaves =
        async () => {

            try {

                const response =

                    await API.get(
                        "/leave"
                    );

                setLeaves(
                    response.data.data || []
                );

            } catch (error) {

                console.log(error);
            }
        };

    const handleChange =
        (e) => {

            setFormData({

                ...formData,

                [e.target.name]:
                    e.target.value
            });
        };

    const applyLeave =
        async () => {

            try {

                await API.post(

                    "/leave",

                    formData
                );

                alert(
                    "Leave Applied Successfully"
                );

                fetchLeaves();

                setFormData({

                    employeeId: "",

                    leaveType: "",

                    startDate: "",

                    endDate: "",

                    reason: ""
                });

            } catch (error) {

                console.log(error);
            }
        };

    const approveLeave =
        async (id) => {

            try {

                await API.put(
                    `/leave/approve/${id}`
                );

                fetchLeaves();

            } catch (error) {

                console.log(error);
            }
        };

    const rejectLeave =
        async (id) => {

            try {

                await API.put(
                    `/leave/reject/${id}`
                );

                fetchLeaves();

            } catch (error) {

                console.log(error);
            }
        };

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 rounded-3xl px-10 py-8 text-white shadow-xl mb-5">

                <h1 className="text-4xl font-black">

                    Leave Management

                </h1>

                <p className="text-indigo-100 text-sm mt-3">

                    Enterprise leave approval and employee leave workflow management.

                </p>

            </div>

            {/* KPI */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

                    <p className="text-sm text-gray-500 font-semibold">

                        Total Requests

                    </p>

                    <h2 className="text-3xl font-black text-blue-600 mt-3">

                        {leaves.length}

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

                    <p className="text-sm text-gray-500 font-semibold">

                        Approved

                    </p>

                    <h2 className="text-3xl font-black text-green-600 mt-3">

                        {
                            leaves.filter(

                                item =>

                                    item.status ===
                                    "APPROVED"

                            ).length
                        }

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

                    <p className="text-sm text-gray-500 font-semibold">

                        Pending

                    </p>

                    <h2 className="text-3xl font-black text-orange-500 mt-3">

                        {
                            leaves.filter(

                                item =>

                                    item.status ===
                                    "PENDING"

                            ).length
                        }

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

                    <p className="text-sm text-gray-500 font-semibold">

                        Rejected

                    </p>

                    <h2 className="text-3xl font-black text-red-500 mt-3">

                        {
                            leaves.filter(

                                item =>

                                    item.status ===
                                    "REJECTED"

                            ).length
                        }

                    </h2>

                </div>

            </div>

            {/* EMPLOYEE APPLY FORM */}

            {
                role === "EMPLOYEE" && (

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-5">

                        <div className="flex justify-between items-center mb-6">

                            <div>

                                <h2 className="text-2xl font-black text-gray-900">

                                    Apply Leave

                                </h2>

                                <p className="text-sm text-gray-500 mt-1">

                                    Submit leave request

                                </p>

                            </div>

                            <div className="text-5xl">

                                🌴

                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-5">

                            <input
                                type="number"

                                name="employeeId"

                                placeholder="Employee ID"

                                value={formData.employeeId}

                                onChange={handleChange}

                                className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-indigo-600"
                            />

                            <input
                                type="text"

                                name="leaveType"

                                placeholder="Leave Type"

                                value={formData.leaveType}

                                onChange={handleChange}

                                className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-indigo-600"
                            />

                            <input
                                type="text"

                                name="startDate"

                                placeholder="Start Date"

                                value={formData.startDate}

                                onChange={handleChange}

                                className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-indigo-600"
                            />

                            <input
                                type="text"

                                name="endDate"

                                placeholder="End Date"

                                value={formData.endDate}

                                onChange={handleChange}

                                className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-indigo-600"
                            />

                        </div>

                        <textarea
                            name="reason"

                            placeholder="Leave Reason"

                            value={formData.reason}

                            onChange={handleChange}

                            rows="4"

                            className="w-full border border-gray-300 rounded-2xl p-5 mt-5 outline-none focus:border-indigo-600 resize-none"
                        />

                        <button

                            onClick={applyLeave}

                            className="mt-5 px-8 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition-all">

                            Apply Leave

                        </button>

                    </div>
                )
            }

            {/* TABLE */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Leave Requests

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Enterprise leave workflow

                        </p>

                    </div>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th className="px-4 py-4 text-left">

                                    ID

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Type

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Start

                                </th>

                                <th className="px-4 py-4 text-left">

                                    End

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Status

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Reason

                                </th>

                                {
                                    role !== "EMPLOYEE" && (

                                        <th className="px-4 py-4 text-left">

                                            Actions

                                        </th>
                                    )
                                }

                            </tr>

                        </thead>

                        <tbody>

                            {
                                leaves.map(

                                    (item) => (

                                        <tr
                                            key={item.id}

                                            className="border-b border-gray-100 hover:bg-gray-50">

                                            <td className="px-4 py-5 font-bold">

                                                #{item.id}

                                            </td>

                                            <td className="px-4 py-5 font-semibold">

                                                {
                                                    item.leaveType
                                                }

                                            </td>

                                            <td className="px-4 py-5">

                                                {
                                                    item.startDate
                                                }

                                            </td>

                                            <td className="px-4 py-5">

                                                {
                                                    item.endDate
                                                }

                                            </td>

                                            <td className="px-4 py-5">

                                                <span className={`px-4 py-2 rounded-full text-xs font-bold

                                                    ${
                                                        item.status === "APPROVED"

                                                            ? "bg-green-100 text-green-700"

                                                            : item.status === "REJECTED"

                                                                ? "bg-red-100 text-red-700"

                                                                : "bg-orange-100 text-orange-700"
                                                    }`}>

                                                    {
                                                        item.status
                                                    }

                                                </span>

                                            </td>

                                            <td className="px-4 py-5">

                                                {
                                                    item.reason
                                                }

                                            </td>

                                            {
                                                role !== "EMPLOYEE" && (

                                                    <td className="px-4 py-5 flex gap-2">

                                                        <button

                                                            onClick={() =>
                                                                approveLeave(item.id)
                                                            }

                                                            className="px-4 py-2 rounded-xl bg-green-100 text-green-700 text-xs font-bold">

                                                            Approve

                                                        </button>

                                                        <button

                                                            onClick={() =>
                                                                rejectLeave(item.id)
                                                            }

                                                            className="px-4 py-2 rounded-xl bg-red-100 text-red-700 text-xs font-bold">

                                                            Reject

                                                        </button>

                                                    </td>
                                                )
                                            }

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

export default Leave;