import { useState }
from "react";

import Sidebar
from "../../components/layout/Sidebar";

import Navbar
from "../../components/layout/Navbar";

function Settings() {

    const [settings,
        setSettings] =
        useState({

            darkMode: false,

            notifications: true,

            emailAlerts: true,

            autoBackup: true
        });

    const handleToggle =
        (key) => {

            setSettings({

                ...settings,

                [key]:
                    !settings[key]
            });
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

                            Settings

                        </h1>

                        <p className="text-gray-500 mt-1 text-sm">

                            Enterprise system configuration panel

                        </p>

                    </div>

                    {/* SETTINGS GRID */}

                    <div className="grid grid-cols-2 gap-6">

                        {/* SYSTEM SETTINGS */}

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                            <div className="mb-6">

                                <h2 className="text-2xl font-black text-gray-800">

                                    System Settings

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Configure platform preferences

                                </p>

                            </div>

                            <div className="space-y-5">

                                {/* DARK MODE */}

                                <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">

                                    <div>

                                        <h2 className="font-bold text-gray-800">

                                            Dark Mode

                                        </h2>

                                        <p className="text-xs text-gray-500 mt-1">

                                            Enable dark interface theme

                                        </p>

                                    </div>

                                    <button

                                        onClick={() =>
                                            handleToggle("darkMode")}

                                        className={`w-14 h-7 rounded-full transition-all duration-300 relative

                                        ${settings.darkMode

                                                ? "bg-blue-600"

                                                : "bg-gray-300"}`}>

                                        <div

                                            className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300

                                            ${settings.darkMode

                                                    ? "right-1"

                                                    : "left-1"}`}>

                                        </div>

                                    </button>

                                </div>

                                {/* NOTIFICATIONS */}

                                <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">

                                    <div>

                                        <h2 className="font-bold text-gray-800">

                                            Push Notifications

                                        </h2>

                                        <p className="text-xs text-gray-500 mt-1">

                                            Enable activity notifications

                                        </p>

                                    </div>

                                    <button

                                        onClick={() =>
                                            handleToggle("notifications")}

                                        className={`w-14 h-7 rounded-full transition-all duration-300 relative

                                        ${settings.notifications

                                                ? "bg-green-600"

                                                : "bg-gray-300"}`}>

                                        <div

                                            className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300

                                            ${settings.notifications

                                                    ? "right-1"

                                                    : "left-1"}`}>

                                        </div>

                                    </button>

                                </div>

                                {/* EMAIL ALERTS */}

                                <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">

                                    <div>

                                        <h2 className="font-bold text-gray-800">

                                            Email Alerts

                                        </h2>

                                        <p className="text-xs text-gray-500 mt-1">

                                            Receive system email updates

                                        </p>

                                    </div>

                                    <button

                                        onClick={() =>
                                            handleToggle("emailAlerts")}

                                        className={`w-14 h-7 rounded-full transition-all duration-300 relative

                                        ${settings.emailAlerts

                                                ? "bg-purple-600"

                                                : "bg-gray-300"}`}>

                                        <div

                                            className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300

                                            ${settings.emailAlerts

                                                    ? "right-1"

                                                    : "left-1"}`}>

                                        </div>

                                    </button>

                                </div>

                                {/* AUTO BACKUP */}

                                <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">

                                    <div>

                                        <h2 className="font-bold text-gray-800">

                                            Auto Backup

                                        </h2>

                                        <p className="text-xs text-gray-500 mt-1">

                                            Daily enterprise cloud backup

                                        </p>

                                    </div>

                                    <button

                                        onClick={() =>
                                            handleToggle("autoBackup")}

                                        className={`w-14 h-7 rounded-full transition-all duration-300 relative

                                        ${settings.autoBackup

                                                ? "bg-orange-500"

                                                : "bg-gray-300"}`}>

                                        <div

                                            className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300

                                            ${settings.autoBackup

                                                    ? "right-1"

                                                    : "left-1"}`}>

                                        </div>

                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* ACCOUNT SETTINGS */}

                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                            <div className="mb-6">

                                <h2 className="text-2xl font-black text-gray-800">

                                    Account Settings

                                </h2>

                                <p className="text-gray-500 text-sm mt-1">

                                    Manage enterprise account details

                                </p>

                            </div>

                            <div className="space-y-4">

                                <input
                                    type="text"

                                    placeholder="Company Name"

                                    className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm"
                                />

                                <input
                                    type="email"

                                    placeholder="Company Email"

                                    className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm"
                                />

                                <input
                                    type="text"

                                    placeholder="Support Contact"

                                    className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm"
                                />

                                <textarea

                                    placeholder="Company Address"

                                    className="w-full border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-600 text-sm h-32 resize-none"
                                />

                                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-2xl shadow-xl hover:scale-[1.02] transition-all font-bold">

                                    Save Settings

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Settings;