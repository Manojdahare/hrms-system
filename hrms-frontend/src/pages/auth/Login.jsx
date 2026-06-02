import { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import API from "../../api/axiosConfig";

function Login() {

    const navigate =
        useNavigate();

    const [formData,
        setFormData] =

        useState({

            username: "",

            password: ""
        });

    const handleChange =
        (e) => {

            setFormData({

                ...formData,

                [e.target.name]:
                    e.target.value
            });
        };

    const handleLogin =
        async (e) => {

            e.preventDefault();

            try {

                const response =

                    await API.post(

                        "/auth/login",

                        formData
                    );

                localStorage.setItem(

                    "token",

                    response.data.data.token
                );

                localStorage.setItem(

                    "username",

                    response.data.data.username
                );

                localStorage.setItem(

                    "role",

                    response.data.data.role
                );

                if (
                    response.data.data.role ===
                    "ADMIN"
                ) {

                    navigate("/admin");

                } else if (

                    response.data.data.role ===
                    "HR"
                ) {

                    navigate("/hr");

                } else {

                    navigate("/employee");
                }

            } catch (error) {

                alert(
                    "Invalid Username or Password"
                );

                console.log(error);
            }
        };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-6">

            <div className="grid lg:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl max-w-7xl w-full">

                {/* LEFT */}

                <div className="p-14 text-white flex flex-col justify-center relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl">

                    </div>

                    <div className="relative z-10">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-4xl shadow-2xl">

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

                            Manage Your
                            Workforce
                            Smarter.

                        </h2>

                        <p className="text-slate-300 mt-8 text-lg leading-8 max-w-xl">

                            Enterprise-grade human resource management platform for employees, HR teams and administrators.

                        </p>

                        <div className="grid grid-cols-2 gap-5 mt-12">

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                                <h3 className="text-3xl font-black">

                                    24/7

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    Cloud Access

                                </p>

                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                                <h3 className="text-3xl font-black">

                                    AI

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    Smart Analytics

                                </p>

                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                                <h3 className="text-3xl font-black">

                                    99%

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    System Uptime

                                </p>

                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                                <h3 className="text-3xl font-black">

                                    Secure

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    Enterprise Security

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="bg-white p-14 flex flex-col justify-center">

                    <div className="max-w-md w-full mx-auto">

                        <h2 className="text-4xl font-black text-gray-900">

                            Welcome Back

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Login to continue to your enterprise dashboard

                        </p>

                        <form
                            onSubmit={handleLogin}

                            className="mt-10 space-y-6">

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

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-blue-600"
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

                                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-blue-600"
                                />

                            </div>

                            <div className="flex justify-between items-center">

                                <label className="flex items-center gap-2 text-sm text-gray-600">

                                    <input type="checkbox" />

                                    Remember Me

                                </label>

                                <Link
                                    to="/forgot-password"

                                    className="text-blue-600 font-semibold text-sm hover:text-cyan-500 transition-all">

                                    Forgot Password?

                                </Link>

                            </div>

                            <button
                                type="submit"

                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">

                                Login to HRMS

                            </button>

                        </form>

                        <div className="mt-8 text-center">

                            <p className="text-gray-500">

                                Don't have an account?

                                <Link
                                    to="/register"

                                    className="text-blue-600 font-bold ml-2 hover:text-cyan-500 transition-all">

                                    Register

                                </Link>

                            </p>

                        </div>

                        <div className="mt-10">

                            <p className="text-sm font-semibold text-gray-500 mb-4">

                                Enterprise Access Roles

                            </p>

                            <div className="flex gap-3 flex-wrap">

                                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-bold">

                                    ADMIN

                                </span>

                                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">

                                    HR

                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-bold">

                                    EMPLOYEE

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;