import MainLayout
from "../../components/layout/MainLayout";

function Profile() {

    const username =

        localStorage.getItem(
            "username"
        );

    const role =

        localStorage.getItem(
            "role"
        );

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl px-10 py-8 text-white shadow-xl mb-5 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl">

                </div>

                <div className="relative z-10 flex items-center justify-between">

                    <div className="flex items-center gap-6">

                        {/* AVATAR */}

                        <div className="relative">

                            <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 flex items-center justify-center text-5xl font-black shadow-2xl">

                                {
                                    username
                                        ?.charAt(0)
                                        ?.toUpperCase()
                                }

                            </div>

                            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white">

                            </div>

                        </div>

                        {/* INFO */}

                        <div>

                            <h1 className="text-4xl font-black">

                                {username}

                            </h1>

                            <p className="text-blue-100 text-lg mt-2">

                                Java Developer

                            </p>

                            <div className="flex gap-3 mt-5">

                                <span className="px-4 py-2 rounded-full bg-white/20 text-sm font-bold">

                                    {role}

                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-500/20 text-sm font-bold text-green-200">

                                    ● Active Employee

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* BUTTON */}

                    <button className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all">

                        Edit Profile

                    </button>

                </div>

            </div>

            {/* ANALYTICS */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-semibold">

                                Experience

                            </p>

                            <h2 className="text-3xl font-black text-blue-600 mt-3">

                                2Y

                            </h2>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">

                            💼

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-semibold">

                                Attendance

                            </p>

                            <h2 className="text-3xl font-black text-green-600 mt-3">

                                96%

                            </h2>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">

                            🕒

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-semibold">

                                Leaves

                            </p>

                            <h2 className="text-3xl font-black text-orange-500 mt-3">

                                05

                            </h2>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">

                            🌴

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500 font-semibold">

                                Performance

                            </p>

                            <h2 className="text-3xl font-black text-purple-600 mt-3">

                                A+

                            </h2>

                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">

                            📈

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}

            <div className="grid grid-cols-3 gap-5">

                {/* LEFT */}

                <div className="col-span-2 space-y-5">

                    {/* PERSONAL INFO */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-2xl font-black text-gray-900">

                                Personal Information

                            </h2>

                            <button className="text-blue-600 font-bold text-sm">

                                Update Info

                            </button>

                        </div>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <p className="text-xs font-bold text-gray-500 uppercase">

                                    Email Address

                                </p>

                                <h3 className="text-lg font-bold text-gray-800 mt-2">

                                    manoj@gmail.com

                                </h3>

                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <p className="text-xs font-bold text-gray-500 uppercase">

                                    Phone Number

                                </p>

                                <h3 className="text-lg font-bold text-gray-800 mt-2">

                                    9302982064

                                </h3>

                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <p className="text-xs font-bold text-gray-500 uppercase">

                                    Department

                                </p>

                                <h3 className="text-lg font-bold text-gray-800 mt-2">

                                    IT

                                </h3>

                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <p className="text-xs font-bold text-gray-500 uppercase">

                                    Designation

                                </p>

                                <h3 className="text-lg font-bold text-gray-800 mt-2">

                                    Java Developer

                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* SKILLS */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Skills

                        </h2>

                        <div className="flex flex-wrap gap-4">

                            {
                                [
                                    "Java",
                                    "Spring Boot",
                                    "React",
                                    "MySQL",
                                    "REST API",
                                    "Microservices",
                                    "Tailwind CSS",
                                    "JWT Security"
                                ].map(

                                    (skill, index) => (

                                        <span

                                            key={index}

                                            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold shadow-md hover:scale-105 transition-all">

                                            {skill}

                                        </span>
                                    )
                                )
                            }

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="space-y-5">

                    {/* ACTIVITY */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Activity

                        </h2>

                        <div className="space-y-5">

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">

                                    🕒

                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800">

                                        Checked In

                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">

                                        Today • 09:00 AM

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-xl">

                                    💰

                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800">

                                        Salary Credited

                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">

                                        Payroll processed

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">

                                    🌴

                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800">

                                        Leave Approved

                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">

                                        Annual leave accepted

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* PERFORMANCE */}

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                        <h2 className="text-2xl font-black text-gray-900 mb-6">

                            Performance

                        </h2>

                        <div className="space-y-5">

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Productivity

                                    </span>

                                    <span className="text-sm font-bold text-blue-600">

                                        92%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[92%] h-full bg-blue-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Team Collaboration

                                    </span>

                                    <span className="text-sm font-bold text-green-600">

                                        88%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[88%] h-full bg-green-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="text-sm font-semibold text-gray-600">

                                        Task Completion

                                    </span>

                                    <span className="text-sm font-bold text-purple-600">

                                        95%

                                    </span>

                                </div>

                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                                    <div className="w-[95%] h-full bg-purple-600 rounded-full">

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default Profile;