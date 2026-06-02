import { useState }
from "react";

import {
    Link
} from "react-router-dom";

import API
from "../../api/axiosConfig";

function ForgotPassword() {

    const [email,
        setEmail] =

        useState("");

    const [loading,
        setLoading] =

        useState(false);

    const [success,
        setSuccess] =

        useState(false);

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);

                await API.post(

                    "/auth/forgot-password",

                    {
                        email
                    }
                );

                setSuccess(true);

            } catch (error) {

                alert(
                    "Reset Link Failed"
                );

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-6 overflow-hidden relative">

            {/* BG EFFECT */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl">

            </div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl">

            </div>

            {/* CARD */}

            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl w-full max-w-md p-10 text-white">

                {/* ICON */}

                <div className="flex flex-col items-center text-center">

                    <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-5xl shadow-2xl mb-6">

                        🔐

                    </div>

                    <h1 className="text-4xl font-black">

                        Forgot Password

                    </h1>

                    <p className="text-slate-300 text-sm mt-4 leading-7">

                        Enter your registered email address to receive a secure password reset link.

                    </p>

                </div>

                {/* SUCCESS */}

                {
                    success && (

                        <div className="mt-6 bg-green-500/20 border border-green-400/20 rounded-2xl p-4 text-sm text-green-200">

                            Password reset link sent successfully.

                        </div>
                    )
                }

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}

                    className="mt-8">

                    <div className="mb-5">

                        <label className="block text-sm font-semibold text-slate-200 mb-3">

                            Email Address

                        </label>

                        <input
                            type="email"

                            placeholder="Enter your email"

                            value={email}

                            onChange={(e) =>

                                setEmail(
                                    e.target.value
                                )
                            }

                            required

                            className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition-all"
                        />

                    </div>

                    <button
                        type="submit"

                        disabled={loading}

                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">

                        {
                            loading

                                ? "Sending..."

                                : "Send Reset Link"
                        }

                    </button>

                </form>

                {/* BACK */}

                <div className="mt-8 text-center">

                    <Link
                        to="/"

                        className="text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition-all">

                        ← Back to Login

                    </Link>

                </div>

                {/* SECURITY */}

                <div className="mt-10 grid grid-cols-3 gap-3">

                    <div className="bg-white/5 rounded-2xl p-3 text-center">

                        <h3 className="text-lg font-black text-cyan-300">

                            🔒

                        </h3>

                        <p className="text-[11px] text-slate-300 mt-2">

                            Secure Reset

                        </p>

                    </div>

                    <div className="bg-white/5 rounded-2xl p-3 text-center">

                        <h3 className="text-lg font-black text-green-300">

                            ⚡

                        </h3>

                        <p className="text-[11px] text-slate-300 mt-2">

                            Fast Recovery

                        </p>

                    </div>

                    <div className="bg-white/5 rounded-2xl p-3 text-center">

                        <h3 className="text-lg font-black text-purple-300">

                            🛡️

                        </h3>

                        <p className="text-[11px] text-slate-300 mt-2">

                            Enterprise Safe

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ForgotPassword;