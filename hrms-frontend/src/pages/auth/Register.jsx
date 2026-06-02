import { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import API from "../../api/axiosConfig";

function Register() {

    const navigate =
        useNavigate();

    const [formData,
        setFormData] =

        useState({

            fullName: "",

            username: "",

            email: "",

            password: "",

            role: "EMPLOYEE"
        });

    const handleChange =
        (e) => {

            setFormData({

                ...formData,

                [e.target.name]:
                    e.target.value
            });
        };

    const handleRegister =
        async (e) => {

            e.preventDefault();

            try {

                const response =

                    await API.post(

                        "/auth/register",

                        formData
                    );

                alert(
                    response.data.message
                );

                navigate("/");

            } catch (error) {

                console.log(error);

                alert(

                    error?.response?.data?.message ||

                    "Registration Failed"
                );
            }
        };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 flex items-center justify-center p-6">

            <div className="grid lg:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl max-w-7xl w-full">

                {/* LEFT */}

                <div className="p-14 text-white flex flex-col justify-center relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl">

                    </div>

                    <div className="relative z-10">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-4xl shadow-2xl">

                                🚀

                            </div>

                            <div>

                                <h1 className="text-5xl font-black">

                                    HRMS Pro

                                </h1>

                                <p className="text-slate-300 mt-2">

                                    Enterprise Workforce Suite

                                </p>

                            </div>

                        </div>

                        <h2 className="text-6xl font-black leading-tight">

                            Create Your
                            Enterprise
                            Account.

                        </h2>

                        <p className="text-slate-300 mt-8 text-lg leading-8 max-w-xl">

                            Join the modern workforce management platform trusted by enterprise HR teams and employees.

                        </p>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="bg-white p-14 flex flex-col justify-center">

                    <div className="max-w-md w-full mx-auto">

                        <h2 className="text-4xl font-black text-gray-900">

                            Create Account

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Register to access your enterprise dashboard

                        </p>

                        <form
                            onSubmit={handleRegister}

                            className="mt-10 space-y-5">

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-3">

                                    Full Name

                                </label>

                                <input
                                    type="text"

                                    name="fullName"

                                    placeholder="Enter full name"

                                    value={formData.fullName}

                                    onChange={handleChange}

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-indigo-600"
                                />

                            </div>

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-3">

                                    Username

                                </label>

                                <input
                                    type="text"

                                    name="username"

                                    placeholder="Enter username"

                                    value={formData.username}

                                    onChange={handleChange}

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-indigo-600"
                                />

                            </div>

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-3">

                                    Email Address

                                </label>

                                <input
                                    type="email"

                                    name="email"

                                    placeholder="Enter email"

                                    value={formData.email}

                                    onChange={handleChange}

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-indigo-600"
                                />

                            </div>

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-3">

                                    Password

                                </label>

                                <input
                                    type="password"

                                    name="password"

                                    placeholder="Enter password"

                                    value={formData.password}

                                    onChange={handleChange}

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-indigo-600"
                                />

                            </div>

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-3">

                                    Role

                                </label>

                                <select
                                    name="role"

                                    value={formData.role}

                                    onChange={handleChange}

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-indigo-600">

                                    <option value="EMPLOYEE">

                                        EMPLOYEE

                                    </option>

                                    <option value="HR">

                                        HR

                                    </option>

                                    <option value="ADMIN">

                                        ADMIN

                                    </option>

                                </select>

                            </div>

                            <button
                                type="submit"

                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">

                                Create Enterprise Account

                            </button>

                        </form>

                        <div className="mt-8 text-center">

                            <p className="text-gray-500">

                                Already have an account?

                                <Link
                                    to="/"

                                    className="text-indigo-600 font-bold ml-2">

                                    Login

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;