function StatCard({

    title,

    value,

    icon,

    color

}) {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition-all">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-gray-500 font-medium">

                        {title}

                    </p>

                    <h2 className="text-3xl font-black mt-3 text-gray-900">

                        {value}

                    </h2>

                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${color}`}>

                    {icon}

                </div>

            </div>

        </div>
    );
}

export default StatCard;