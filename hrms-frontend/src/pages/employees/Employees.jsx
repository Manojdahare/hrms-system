import { useEffect, useState }
from "react";

import MainLayout
from "../../components/layout/MainLayout";

import API
from "../../api/axiosConfig";

function Employees() {

    const [employees,
        setEmployees] =

        useState([]);

    const [page,
        setPage] =

        useState(0);

    const [totalPages,
        setTotalPages] =

        useState(0);

    const [search,
        setSearch] =

        useState("");

    const [showNotifications,
        setShowNotifications] =

        useState(false);

    const [showModal,
        setShowModal] =

        useState(false);

    const [editMode,
        setEditMode] =

        useState(false);

    const [editId,
        setEditId] =

        useState(null);

    const [viewEmployee,
        setViewEmployee] =

        useState(null);

    const [showViewModal,
        setShowViewModal] =

        useState(false);

    const [formData,
        setFormData] =

        useState({

            employeeCode: "",

            firstName: "",

            lastName: "",

            email: "",

            phone: "",

            department: "",

            designation: "",

            salary: "",

            joiningDate: "",

            status: "ACTIVE"
        });

    useEffect(() => {

        fetchEmployees();

    }, [page]);

    const fetchEmployees =
        async () => {

            try {

                const response =

                    await API.get(

                        `/employees?page=${page}&size=5`
                    );

                setEmployees(

                    response.data.data.content
                );

                setTotalPages(

                    response.data.data.totalPages
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

    const handleView =
        (employee) => {

            setViewEmployee(
                employee
            );

            setShowViewModal(
                true
            );
        };

    const handleEdit =
        (employee) => {

            setEditMode(true);

            setEditId(employee.id);

            setShowModal(true);

            setFormData({

                employeeCode:
                    employee.employeeCode,

                firstName:
                    employee.firstName,

                lastName:
                    employee.lastName,

                email:
                    employee.email,

                phone:
                    employee.phone,

                department:
                    employee.department,

                designation:
                    employee.designation,

                salary:
                    employee.salary,

                joiningDate:
                    employee.joiningDate,

                status:
                    employee.status
            });
        };

    const addEmployee =
        async (e) => {

            e.preventDefault();

            try {

                if (editMode) {

                    await API.put(

                        `/employees/${editId}`,

                        formData
                    );

                    alert(
                        "Employee Updated"
                    );

                } else {

                    await API.post(

                        "/employees",

                        formData
                    );

                    alert(
                        "Employee Added"
                    );
                }

                setShowModal(false);

                setEditMode(false);

                fetchEmployees();

            } catch (error) {

                console.log(error);

                alert(
                    "Operation Failed"
                );
            }
        };

    const deleteEmployee =
        async (id) => {

            const confirmDelete =

                window.confirm(

                    "Delete this employee?"
                );

            if (!confirmDelete)
                return;

            try {

                await API.delete(

                    `/employees/${id}`
                );

                alert(
                    "Employee Deleted"
                );

                fetchEmployees();

            } catch (error) {

                console.log(error);

                alert(
                    "Delete Failed"
                );
            }
        };

    const filteredEmployees =

        employees.filter(

            employee =>

                employee.firstName
                    .toLowerCase()

                    .includes(

                        search.toLowerCase()
                    )
        );

    return (

        <MainLayout>

            {/* HEADER */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-3xl font-black text-gray-900">

                        Employee Management

                    </h1>

                    <p className="text-sm text-gray-500 mt-1">

                        Manage workforce and employee records

                    </p>

                </div>

                <button

                    onClick={() => {

                        setShowModal(true);

                        setEditMode(false);

                        setFormData({

                            employeeCode: "",

                            firstName: "",

                            lastName: "",

                            email: "",

                            phone: "",

                            department: "",

                            designation: "",

                            salary: "",

                            joiningDate: "",

                            status: "ACTIVE"
                        });
                    }}

                    className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all text-sm font-bold">

                    + Add Employee

                </button>

            </div>

            {/* SEARCH */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5">

                <input
                    type="text"

                    placeholder="Search employees..."

                    value={search}

                    onChange={(e) =>

                        setSearch(
                            e.target.value
                        )
                    }

                    className="border border-gray-300 rounded-2xl h-12 px-5 outline-none focus:border-blue-600 w-[300px]"
                />

            </div>

            {/* TABLE */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left text-sm">

                                Employee

                            </th>

                            <th className="p-4 text-left text-sm">

                                Department

                            </th>

                            <th className="p-4 text-left text-sm">

                                Designation

                            </th>

                            <th className="p-4 text-left text-sm">

                                Status

                            </th>

                            <th className="p-4 text-left text-sm">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            filteredEmployees.map(

                                (employee) => (

                                    <tr
                                        key={employee.id}

                                        className="border-b border-gray-100 hover:bg-gray-50 transition-all">

                                        <td className="p-4">

                                            <div className="flex items-center gap-3">

                                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold">

                                                    {
                                                        employee.firstName
                                                            ?.charAt(0)
                                                    }

                                                </div>

                                                <div>

                                                    <h2 className="font-bold text-sm text-gray-800">

                                                        {
                                                            employee.firstName
                                                        }
                                                        {" "}
                                                        {
                                                            employee.lastName
                                                        }

                                                    </h2>

                                                    <p className="text-xs text-gray-500">

                                                        {
                                                            employee.email
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        <td className="p-4 text-sm font-medium">

                                            {
                                                employee.department
                                            }

                                        </td>

                                        <td className="p-4 text-sm font-medium">

                                            {
                                                employee.designation
                                            }

                                        </td>

                                        <td className="p-4">

                                            <span className={`px-4 py-2 rounded-full text-xs font-bold

                                                ${
                                                    employee.status === "ACTIVE"

                                                        ? "bg-green-100 text-green-700"

                                                        : "bg-red-100 text-red-700"
                                                }`}>

                                                {
                                                    employee.status
                                                }

                                            </span>

                                        </td>

                                        <td className="p-4 flex gap-2">

                                            <button

                                                onClick={() =>
                                                    handleView(employee)
                                                }

                                                className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold hover:scale-105 transition-all">

                                                View

                                            </button>

                                            <button

                                                onClick={() =>
                                                    handleEdit(employee)
                                                }

                                                className="px-4 py-2 rounded-xl bg-green-100 text-green-700 text-xs font-bold hover:scale-105 transition-all">

                                                Edit

                                            </button>

                                            <button

                                                onClick={() =>
                                                    deleteEmployee(employee.id)
                                                }

                                                className="px-4 py-2 rounded-xl bg-red-100 text-red-700 text-xs font-bold hover:scale-105 transition-all">

                                                Delete

                                            </button>

                                        </td>

                                    </tr>
                                )
                            )
                        }

                    </tbody>

                </table>

                {/* PAGINATION */}

                <div className="flex justify-between items-center p-5 border-t border-gray-100">

                    <button

                        disabled={page === 0}

                        onClick={() =>
                            setPage(page - 1)
                        }

                        className="px-5 py-2 rounded-xl bg-gray-800 text-white text-sm disabled:bg-gray-300">

                        Previous

                    </button>

                    <p className="text-sm font-semibold text-gray-700">

                        Page {page + 1}
                        {" "}of{" "}
                        {totalPages}

                    </p>

                    <button

                        disabled={page + 1 >= totalPages}

                        onClick={() =>
                            setPage(page + 1)
                        }

                        className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm disabled:bg-gray-300">

                        Next

                    </button>

                </div>

            </div>

            {/* VIEW MODAL */}

            {
                showViewModal && (

                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

                        <div className="bg-white rounded-3xl w-[500px] p-8 shadow-2xl">

                            <div className="flex justify-between items-center mb-6">

                                <h2 className="text-3xl font-black">

                                    Employee Details

                                </h2>

                                <button

                                    onClick={() =>
                                        setShowViewModal(false)
                                    }

                                    className="text-2xl">

                                    ✕

                                </button>

                            </div>

                            <div className="space-y-5">

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Name

                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 mt-1">

                                        {
                                            viewEmployee?.firstName
                                        }
                                        {" "}
                                        {
                                            viewEmployee?.lastName
                                        }

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Email

                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 mt-1">

                                        {
                                            viewEmployee?.email
                                        }

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Department

                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 mt-1">

                                        {
                                            viewEmployee?.department
                                        }

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Designation

                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 mt-1">

                                        {
                                            viewEmployee?.designation
                                        }

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Salary

                                    </p>

                                    <h3 className="text-lg font-bold text-green-600 mt-1">

                                        ₹{
                                            viewEmployee?.salary
                                        }

                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>
                )
            }

            {/* ADD / EDIT MODAL */}

            {
                showModal && (

                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto p-5">

                        <div className="bg-white rounded-3xl w-full max-w-3xl p-8 shadow-2xl">

                            <div className="flex justify-between items-center mb-6">

                                <h2 className="text-3xl font-black text-gray-900">

                                    {
                                        editMode
                                            ? "Edit Employee"
                                            : "Add Employee"
                                    }

                                </h2>

                                <button

                                    onClick={() =>
                                        setShowModal(false)
                                    }

                                    className="text-2xl">

                                    ✕

                                </button>

                            </div>

                            <form
                                onSubmit={addEmployee}>

                                <div className="grid grid-cols-2 gap-5">

                                    <input
                                        type="text"

                                        name="employeeCode"

                                        placeholder="Employee Code"

                                        value={formData.employeeCode}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="text"

                                        name="firstName"

                                        placeholder="First Name"

                                        value={formData.firstName}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="text"

                                        name="lastName"

                                        placeholder="Last Name"

                                        value={formData.lastName}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="email"

                                        name="email"

                                        placeholder="Email"

                                        value={formData.email}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="text"

                                        name="phone"

                                        placeholder="Phone"

                                        value={formData.phone}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="text"

                                        name="department"

                                        placeholder="Department"

                                        value={formData.department}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="text"

                                        name="designation"

                                        placeholder="Designation"

                                        value={formData.designation}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="number"

                                        name="salary"

                                        placeholder="Salary"

                                        value={formData.salary}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <input
                                        type="date"

                                        name="joiningDate"

                                        value={formData.joiningDate}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600"
                                    />

                                    <select
                                        name="status"

                                        value={formData.status}

                                        onChange={handleChange}

                                        className="border border-gray-300 rounded-2xl h-14 px-5 outline-none focus:border-blue-600">

                                        <option value="ACTIVE">

                                            ACTIVE

                                        </option>

                                        <option value="INACTIVE">

                                            INACTIVE

                                        </option>

                                    </select>

                                </div>

                                <button
                                    type="submit"

                                    className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all font-bold">

                                    {
                                        editMode
                                            ? "Update Employee"
                                            : "Add Employee"
                                    }

                                </button>

                            </form>

                        </div>

                    </div>
                )
            }

        </MainLayout>
    );
}

export default Employees;