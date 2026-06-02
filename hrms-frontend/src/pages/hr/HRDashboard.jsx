import Sidebar
from "../../components/layout/Sidebar";

import Navbar
from "../../components/layout/Navbar";

function HRDashboard() {

    return (

        <div className="flex">

            <Sidebar />

            <div className="ml-72 w-full min-h-screen bg-gray-100">

                <Navbar />

                <div className="p-8">

                    <h1 className="text-5xl font-bold mb-10">

                        HR Dashboard

                    </h1>

                    <div className="grid grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-2xl shadow">

                            <h2 className="text-xl font-bold">

                                Employees

                            </h2>

                            <p className="text-4xl mt-4 text-blue-600">

                                80

                            </p>

                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">

                            <h2 className="text-xl font-bold">

                                Pending Leaves

                            </h2>

                            <p className="text-4xl mt-4 text-yellow-500">

                                10

                            </p>

                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">

                            <h2 className="text-xl font-bold">

                                Attendance

                            </h2>

                            <p className="text-4xl mt-4 text-green-600">

                                95%

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default HRDashboard;