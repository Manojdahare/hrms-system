import { useEffect, useState }
from "react";

import API
from "../../api/axiosConfig";

import MainLayout
from "../../components/layout/MainLayout";

function Payroll() {

    const [payrolls,
        setPayrolls] =

        useState([]);

    const [formData,
        setFormData] =

        useState({

            employeeId: "",

            basicSalary: "",

            bonus: "",

            deduction: "",

            salaryMonth: ""
        });

    useEffect(() => {

        fetchPayrolls();

    }, []);

    const fetchPayrolls =
        async () => {

            try {

                const response =

                    await API.get(
                        "/payroll"
                    );

                setPayrolls(
                    response.data.data || []
                );

            } catch (error) {

                console.log(error);

                alert(
                    "Failed to fetch payroll"
                );
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

    const addPayroll =
        async (e) => {

            e.preventDefault();

            try {

                await API.post(

                    "/payroll",

                    formData
                );

                fetchPayrolls();

                setFormData({

                    employeeId: "",

                    basicSalary: "",

                    bonus: "",

                    deduction: "",

                    salaryMonth: ""
                });

            } catch (error) {

                console.log(error);

                alert(
                    "Payroll Add Failed"
                );
            }
        };

    const totalPayroll =

        payrolls.reduce(

            (total, payroll) =>

                total +

                (payroll.netSalary || 0),

            0
        );

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl px-10 py-10 text-white shadow-xl mb-5">

                <h1 className="text-4xl font-black leading-tight">

                    Payroll Management

                </h1>

                <p className="text-sm text-cyan-100 mt-3 max-w-2xl">

                    Manage salary structures, payroll processing and enterprise payroll workflow.

                </p>

            </div>

            {/* ANALYTICS */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Total Payroll

                    </p>

                    <h2 className="text-4xl font-black text-emerald-600 mt-4">

                        ₹{totalPayroll}

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Total Records

                    </p>

                    <h2 className="text-4xl font-black text-blue-600 mt-4">

                        {payrolls.length}

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Average Salary

                    </p>

                    <h2 className="text-4xl font-black text-purple-600 mt-4">

                        ₹{

                            payrolls.length > 0

                                ? Math.floor(

                                    totalPayroll /

                                    payrolls.length
                                )

                                : 0
                        }

                    </h2>

                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

                    <p className="text-sm text-gray-500 font-semibold">

                        Financial Status

                    </p>

                    <h2 className="text-4xl font-black text-orange-500 mt-4">

                        Stable

                    </h2>

                </div>

            </div>

            {/* FORM */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-5">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Process Payroll

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Generate employee salary and payroll records

                        </p>

                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl">

                        💰

                    </div>

                </div>

                <form
                    onSubmit={addPayroll}>

                    <div className="grid grid-cols-2 gap-5">

                        <input
                            type="number"

                            name="employeeId"

                            placeholder="Employee ID"

                            value={formData.employeeId}

                            onChange={handleChange}

                            className="border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-emerald-600 shadow-sm"
                        />

                        <input
                            type="number"

                            name="basicSalary"

                            placeholder="Basic Salary"

                            value={formData.basicSalary}

                            onChange={handleChange}

                            className="border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-emerald-600 shadow-sm"
                        />

                        <input
                            type="number"

                            name="bonus"

                            placeholder="Bonus"

                            value={formData.bonus}

                            onChange={handleChange}

                            className="border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-emerald-600 shadow-sm"
                        />

                        <input
                            type="number"

                            name="deduction"

                            placeholder="Deduction"

                            value={formData.deduction}

                            onChange={handleChange}

                            className="border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-emerald-600 shadow-sm"
                        />

                        <input
                            type="month"

                            name="salaryMonth"

                            value={formData.salaryMonth}

                            onChange={handleChange}

                            className="border border-gray-300 rounded-2xl px-5 h-14 outline-none focus:border-emerald-600 shadow-sm"
                        />

                    </div>

                    <button
                        type="submit"

                        className="mt-5 px-8 h-14 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold shadow-lg hover:scale-105 transition-all">

                        Process Payroll

                    </button>

                </form>

            </div>

            {/* TABLE */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Payroll Records

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Employee salary and payroll history

                        </p>

                    </div>

                    <button className="px-5 h-11 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-sm font-bold shadow-md hover:scale-105 transition-all">

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

                                    Salary

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Bonus

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Deduction

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Net Salary

                                </th>

                                <th className="px-4 py-4 text-left">

                                    Month

                                </th>

                                <th className="px-4 py-4 rounded-r-2xl text-left">

                                    Slip

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                payrolls.map(

                                    (payroll) => (

                                        <tr
                                            key={payroll.id}

                                            className="border-b border-gray-100 hover:bg-gray-50 transition-all">

                                            <td className="px-4 py-5 font-bold text-gray-700">

                                                #{payroll.id}

                                            </td>

                                            <td className="px-4 py-5">

                                                <div className="flex items-center gap-3">

                                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold shadow-md">

                                                        {
                                                            payroll.employee
                                                                ?.fullName
                                                                ?.charAt(0)
                                                        }

                                                    </div>

                                                    <div>

                                                        <h3 className="font-bold text-gray-800">

                                                            {
                                                                payroll.employee
                                                                    ?.fullName
                                                            }

                                                        </h3>

                                                        <p className="text-xs text-gray-500">

                                                            Employee

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="px-4 py-5 font-semibold text-gray-700">

                                                ₹{
                                                    payroll.basicSalary
                                                }

                                            </td>

                                            <td className="px-4 py-5 font-bold text-green-600">

                                                ₹{
                                                    payroll.bonus
                                                }

                                            </td>

                                            <td className="px-4 py-5 font-bold text-red-500">

                                                ₹{
                                                    payroll.deduction
                                                }

                                            </td>

                                            <td className="px-4 py-5 font-black text-emerald-700">

                                                ₹{
                                                    payroll.netSalary || 0
                                                }

                                            </td>

                                            <td className="px-4 py-5 text-gray-600">

                                                {
                                                    payroll.salaryMonth
                                                }

                                            </td>

                                            <td className="px-4 py-5">

                                                <a

                                                    href={`http://localhost:8080/api/payroll/slip/${payroll.id}`}

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold shadow-md hover:scale-105 transition-all inline-block">

                                                    Download

                                                </a>

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

export default Payroll;