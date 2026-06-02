import { useState }
from "react";

import Sidebar
from "../../components/layout/Sidebar";

import Navbar
from "../../components/layout/Navbar";

import API
from "../../api/axiosConfig";

function EmailCenter() {

    const [loading,
        setLoading] =
        useState(false);

    const [formData,
        setFormData] =
        useState({

            to: "",
            subject: "",
            body: ""
        });

    const recentEmails = [

        {
            id: 1,
            to: "employee@company.com",
            subject: "Attendance Reminder",
            status: "Sent",
            time: "10 min ago"
        },

        {
            id: 2,
            to: "hr@company.com",
            subject: "Payroll Generated",
            status: "Delivered",
            time: "1 hour ago"
        },

        {
            id: 3,
            to: "admin@company.com",
            subject: "Leave Approved",
            status: "Sent",
            time: "Yesterday"
        }
    ];

    const handleChange =
        (e) => {

            setFormData({

                ...formData,

                [e.target.name]:
                    e.target.value
            });
        };

    const sendEmail =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);

                await API.post(

                    `/email/send?to=${formData.to}&subject=${formData.subject}&body=${formData.body}`
                );

                alert(
                    "Email Sent Successfully"
                );

                setFormData({

                    to: "",
                    subject: "",
                    body: ""
                });

            } catch (error) {

                console.log(error);

                alert(
                    "Failed to Send Email"
                );

            } finally {

                setLoading(false);
            }
        };

    return (

        <div className="flex bg-gray-100">

            <Sidebar />

            <div className="ml-64 w-full min-h-screen">

                <Navbar />

                <div className="p-6">

                    {/* HEADER */}

                    <div className="mb-6">

                        <h1 className="text-3xl font-black text-gray-800">

                            Email Center

                        </h1>

                        <p className="text-gray-500 mt-1 text-sm">

                            Enterprise communication and announcements

                        </p>

                    </div>

                    {/* STATS */}

                    <div className="grid grid-cols-4 gap-5 mb-6">

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Emails Sent

                            </p>

                            <h2 className="text-3xl font-black text-blue-600 mt-3">

                                248

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Delivered

                            </p>

                            <h2 className="text-3xl font-black text-green-600 mt-3">

                                240

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Pending

                            </p>

                            <h2 className="text-3xl font-black text-yellow-500 mt-3">

                                8

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                System Status

                            </p>

                            <h2 className="text-3xl font-black text-purple-600 mt-3">

                                Active

                            </h2>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        {/* SEND EMAIL */}

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                            <div className="mb-6">

                                <h2 className="text-2xl font-black text-gray-800">

                                    Send Email

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Send enterprise announcements and alerts

                                </p>

                            </div>

                            <form
                                onSubmit={sendEmail}>

                                <div className="mb-4">

                                    <label className="text-sm font-bold text-gray-600 block mb-2">

                                        Recipient

                                    </label>

                                    <input
                                        type="email"

                                        name="to"

                                        value={formData.to}

                                        onChange={handleChange}

                                        placeholder="employee@company.com"

                                        className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm"
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="text-sm font-bold text-gray-600 block mb-2">

                                        Subject

                                    </label>

                                    <input
                                        type="text"

                                        name="subject"

                                        value={formData.subject}

                                        onChange={handleChange}

                                        placeholder="Enter subject"

                                        className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm"
                                    />

                                </div>

                                <div className="mb-5">

                                    <label className="text-sm font-bold text-gray-600 block mb-2">

                                        Message

                                    </label>

                                    <textarea

                                        name="body"

                                        value={formData.body}

                                        onChange={handleChange}

                                        placeholder="Type your message..."

                                        className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm h-40 resize-none"
                                    />

                                </div>

                                <button

                                    type="submit"

                                    disabled={loading}

                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-2xl shadow-xl hover:scale-[1.02] transition-all font-bold">

                                    {
                                        loading
                                            ? "Sending..."
                                            : "Send Email"
                                    }

                                </button>

                            </form>

                        </div>

                        {/* RECENT EMAILS */}

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                            <div className="mb-6">

                                <h2 className="text-2xl font-black text-gray-800">

                                    Recent Emails

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Recent communication activity

                                </p>

                            </div>

                            <div className="space-y-4">

                                {recentEmails.map((email) => (

                                    <div

                                        key={email.id}

                                        className="border border-gray-100 rounded-2xl p-4 hover:bg-blue-50/40 transition-all">

                                        <div className="flex justify-between items-start">

                                            <div>

                                                <h2 className="font-bold text-gray-800 text-sm">

                                                    {email.subject}

                                                </h2>

                                                <p className="text-xs text-gray-500 mt-2">

                                                    To: {email.to}

                                                </p>

                                                <p className="text-xs text-gray-400 mt-2">

                                                    {email.time}

                                                </p>

                                            </div>

                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold">

                                                {email.status}

                                            </span>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EmailCenter;