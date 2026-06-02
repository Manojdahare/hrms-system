import Sidebar
from "../../components/layout/Sidebar";

import Navbar
from "../../components/layout/Navbar";

function Notifications() {

    const notifications = [

        {
            id: 1,
            title: "Attendance Checked In",
            message: "You checked in successfully at 09:05 AM.",
            time: "2 min ago",
            type: "attendance",
            unread: true,
            icon: "🕒"
        },

        {
            id: 2,
            title: "Leave Approved",
            message: "Your leave request has been approved by HR.",
            time: "15 min ago",
            type: "leave",
            unread: true,
            icon: "🌴"
        },

        {
            id: 3,
            title: "Payroll Generated",
            message: "Monthly payroll has been generated successfully.",
            time: "1 hour ago",
            type: "payroll",
            unread: false,
            icon: "💰"
        },

        {
            id: 4,
            title: "HR Announcement",
            message: "Team meeting scheduled tomorrow at 10 AM.",
            time: "3 hours ago",
            type: "announcement",
            unread: false,
            icon: "📢"
        },

        {
            id: 5,
            title: "Document Uploaded",
            message: "Employee documents uploaded to cloud storage.",
            time: "Yesterday",
            type: "files",
            unread: false,
            icon: "📁"
        }
    ];

    const unreadCount =

        notifications.filter(

            notification =>
                notification.unread
        ).length;

    return (

        <div className="flex bg-gray-100">

            <Sidebar />

            <div className="ml-64 w-full min-h-screen">

                <Navbar />

                <div className="p-6">

                    {/* HEADER */}

                    <div className="flex justify-between items-center mb-6">

                        <div>

                            <h1 className="text-3xl font-black text-gray-800">

                                Notifications

                            </h1>

                            <p className="text-gray-500 mt-1 text-sm">

                                Enterprise alerts and activity updates

                            </p>

                        </div>

                        <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-lg font-bold text-sm">

                            {unreadCount}
                            {" "}Unread

                        </div>

                    </div>

                    {/* STATS */}

                    <div className="grid grid-cols-4 gap-5 mb-6">

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Total Notifications

                            </p>

                            <h2 className="text-3xl font-black text-blue-600 mt-3">

                                {notifications.length}

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                Unread

                            </p>

                            <h2 className="text-3xl font-black text-red-500 mt-3">

                                {unreadCount}

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                HR Alerts

                            </p>

                            <h2 className="text-3xl font-black text-purple-600 mt-3">

                                3

                            </h2>

                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100">

                            <p className="text-gray-500 text-sm">

                                System Status

                            </p>

                            <h2 className="text-3xl font-black text-green-600 mt-3">

                                Active

                            </h2>

                        </div>

                    </div>

                    {/* NOTIFICATION LIST */}

                    <div className="space-y-4">

                        {notifications.map((notification) => (

                            <div

                                key={notification.id}

                                className={`bg-white rounded-3xl shadow-xl border p-5 flex items-start justify-between transition-all duration-300 hover:scale-[1.01]

                                ${notification.unread

                                        ? "border-blue-200 bg-blue-50/30"

                                        : "border-gray-100"
                                    }`}>

                                <div className="flex items-start gap-4">

                                    {/* ICON */}

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-2xl shadow-lg">

                                        {notification.icon}

                                    </div>

                                    {/* CONTENT */}

                                    <div>

                                        <div className="flex items-center gap-3">

                                            <h2 className="text-lg font-black text-gray-800">

                                                {notification.title}

                                            </h2>

                                            {notification.unread && (

                                                <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold">

                                                    NEW

                                                </span>
                                            )}

                                        </div>

                                        <p className="text-gray-500 text-sm mt-2 leading-6">

                                            {notification.message}

                                        </p>

                                        <p className="text-xs text-gray-400 mt-3">

                                            {notification.time}

                                        </p>

                                    </div>

                                </div>

                                {/* ACTION */}

                                <button className="bg-gray-100 hover:bg-blue-600 hover:text-white transition-all px-4 py-2 rounded-xl text-sm font-semibold">

                                    View

                                </button>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Notifications;