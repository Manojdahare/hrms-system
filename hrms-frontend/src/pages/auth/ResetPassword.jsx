import { useState } from "react";

import {
    Link,
    useNavigate,
    useSearchParams
} from "react-router-dom";

import API from "../../api/axiosConfig";

function ResetPassword() {

    const navigate =
        useNavigate();

    const [searchParams] =
        useSearchParams();

    const token =
        searchParams.get("token");

    const [formData,
        setFormData] =

        useState({

            newPassword: "",

            confirmPassword: ""
        });

    const [loading,
        setLoading] =

        useState(false);

    const handleChange =
        (e) => {

            setFormData({

                ...formData,

                [e.target.name]:
                    e.target.value
            });
        };

    const handleReset =
        async (e) => {

            e.preventDefault();

            if (

                formData.newPassword !==

                formData.confirmPassword
            ) {

                alert(
                    "Passwords do not match"
                );

                return;
            }

            try {

                setLoading(true);

                await API.post(

                    "/auth/reset-password",

                    {

                        token: token,

                        password:
                            formData.newPassword
                    }
                );

                alert(
                    "Password Reset Successful"
                );

                navigate("/");

            } catch (error) {

                console.log(error);

                alert(
                    "Reset link failed"
                );

            } finally {

                setLoading(false);
            }
        };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 flex items-center justify-center p-6">

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl w-full max-w-md p-10 text-white">

                <div className="text-center">

                    <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-5xl shadow-2xl mb-6 mx-auto">

                        🔑

                    </div>

                    <h1 className="text-4xl font-black">

                        Reset Password

                    </h1>

                    <p className="text-slate-300 text-sm mt-4 leading-7">

                        Create a new secure password for your HRMS account.

                    </p>

                </div>

                <form
                    onSubmit={handleReset}

                    className="mt-8 space-y-5">

                    <div>

                        <label className="block text-sm font-semibold text-slate-200 mb-3">

                            New Password

                        </label>

                        <input
                            type="password"

                            name="newPassword"

                            placeholder="Enter new password"

                            value={formData.newPassword}

                            onChange={handleChange}

                            required

                            className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 text-white outline-none"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-semibold text-slate-200 mb-3">

                            Confirm Password

                        </label>

                        <input
                            type="password"

                            name="confirmPassword"

                            placeholder="Confirm password"

                            value={formData.confirmPassword}

                            onChange={handleChange}

                            required

                            className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 text-white outline-none"
                        />

                    </div>

                    <button
                        type="submit"

                        disabled={loading}

                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg shadow-xl">

                        {

                            loading

                                ? "Resetting..."

                                : "Reset Password"
                        }

                    </button>

                </form>

                <div className="mt-8 text-center">

                    <Link
                        to="/"

                        className="text-purple-300 font-semibold">

                        ← Back to Login

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ResetPassword;