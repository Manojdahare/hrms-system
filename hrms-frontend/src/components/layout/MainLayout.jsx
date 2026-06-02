import Sidebar
from "./Sidebar";

import Navbar
from "./Navbar";

function MainLayout({

    children

}) {

    return (

        <div className="flex bg-[#f5f7fb]">

            {/* SIDEBAR */}

            <Sidebar />

            {/* MAIN AREA */}

            <div className="ml-60 w-full min-h-screen">

                {/* NAVBAR */}

                <Navbar />

                {/* PAGE CONTENT */}

                <div className="px-6 py-5">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default MainLayout;