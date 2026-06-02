import { useState }
from "react";

import API
from "../../api/axiosConfig";

import MainLayout
from "../../components/layout/MainLayout";

function FileUpload() {

    const [file,
        setFile] =

        useState(null);

    const [loading,
        setLoading] =

        useState(false);

    const [uploadedFiles,
        setUploadedFiles] =

        useState([]);

    const handleFileChange =
        (e) => {

            setFile(
                e.target.files[0]
            );
        };

    const uploadFile =
        async () => {

            if (!file) {

                alert(
                    "Select a file"
                );

                return;
            }

            const formData =
                new FormData();

            formData.append(
                "file",
                file
            );

            try {

                setLoading(true);

                const response =

                    await API.post(

                        "/files/upload",

                        formData,

                        {

                            headers: {

                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    );

                setUploadedFiles([

                    ...uploadedFiles,

                    {

                        name: file.name,

                        size: file.size,

                        response:
                            response.data,

                        type:
                            file.type
                    }
                ]);

                alert(
                    "File Uploaded Successfully"
                );

                setFile(null);

            } catch (error) {

                console.log(error);

                alert(
                    "File Upload Failed"
                );

            } finally {

                setLoading(false);
            }
        };

    const totalStorage =

        uploadedFiles.reduce(

            (total, file) =>

                total +
                file.size,

            0
        );

    return (

        <MainLayout>

            {/* HERO */}

            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl px-10 py-8 text-white shadow-xl mb-5 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl">

                </div>

                <div className="relative z-10">

                    <h1 className="text-4xl font-black">

                        Document Center

                    </h1>

                    <p className="text-blue-100 text-sm mt-3 max-w-2xl leading-7">

                        Manage company documents,
                        employee files and enterprise
                        records securely in one place.

                    </p>

                </div>

            </div>

            {/* ANALYTICS */}

            <div className="grid grid-cols-4 gap-5 mb-5">

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">

                    <p className="text-gray-500 text-sm font-semibold">

                        Total Files

                    </p>

                    <h2 className="text-3xl font-black text-blue-600 mt-3">

                        {uploadedFiles.length}

                    </h2>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">

                    <p className="text-gray-500 text-sm font-semibold">

                        Storage Used

                    </p>

                    <h2 className="text-3xl font-black text-green-600 mt-3">

                        {
                            (
                                totalStorage / 1024
                            ).toFixed(0)
                        }KB

                    </h2>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">

                    <p className="text-gray-500 text-sm font-semibold">

                        Upload Status

                    </p>

                    <h2 className="text-3xl font-black text-purple-600 mt-3">

                        Active

                    </h2>

                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">

                    <p className="text-gray-500 text-sm font-semibold">

                        Cloud Sync

                    </p>

                    <h2 className="text-3xl font-black text-orange-500 mt-3">

                        ON

                    </h2>

                </div>

            </div>

            {/* UPLOAD */}

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 mb-5">

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Upload Documents

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Upload resumes, PDFs,
                            reports and employee files

                        </p>

                    </div>

                    <div className="text-5xl">

                        ☁️

                    </div>

                </div>

                <div className="border-2 border-dashed border-blue-300 rounded-3xl p-10 text-center bg-gradient-to-br from-blue-50 to-indigo-50">

                    <div className="text-6xl mb-5">

                        📁

                    </div>

                    <h2 className="text-2xl font-black mb-3 text-gray-800">

                        Drag & Drop Files

                    </h2>

                    <p className="text-gray-500 text-sm mb-6">

                        Secure enterprise cloud storage

                    </p>

                    <input
                        type="file"

                        onChange={
                            handleFileChange
                        }

                        className="mb-5 text-sm"
                    />

                    {
                        file && (

                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 max-w-xl mx-auto mb-5 text-left">

                                <div className="flex items-center gap-4">

                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-3xl">

                                        📄

                                    </div>

                                    <div>

                                        <h3 className="font-black text-lg text-gray-800">

                                            {file.name}

                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">

                                            {
                                                (
                                                    file.size / 1024
                                                ).toFixed(2)
                                            }
                                            {" "}KB

                                        </p>

                                        <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">

                                            Ready to Upload

                                        </span>

                                    </div>

                                </div>

                            </div>
                        )
                    }

                    <button

                        onClick={uploadFile}

                        disabled={loading}

                        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-lg text-base font-bold">

                        {
                            loading
                                ? "Uploading..."
                                : "Upload File"
                        }

                    </button>

                </div>

            </div>

            {/* FILE TABLE */}

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

                <div className="p-6 border-b border-gray-200 flex justify-between items-center">

                    <div>

                        <h2 className="text-2xl font-black text-gray-900">

                            Uploaded Files

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            Enterprise document storage

                        </p>

                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-2xl shadow-md text-sm font-bold">

                        Export Files

                    </button>

                </div>

                {
                    uploadedFiles.length === 0 ? (

                        <div className="p-16 text-center">

                            <div className="text-6xl mb-5">

                                📂

                            </div>

                            <h2 className="text-2xl font-black text-gray-700">

                                No Files Uploaded

                            </h2>

                            <p className="text-gray-500 mt-3 text-sm">

                                Upload enterprise documents
                                to start managing files

                            </p>

                        </div>

                    ) : (

                        <div className="overflow-x-auto">

                            <table className="w-full text-sm">

                                <thead className="bg-gray-100">

                                    <tr>

                                        <th className="p-5 text-left">

                                            File

                                        </th>

                                        <th className="p-5 text-left">

                                            Type

                                        </th>

                                        <th className="p-5 text-left">

                                            Size

                                        </th>

                                        <th className="p-5 text-left">

                                            Status

                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        uploadedFiles.map(

                                            (uploaded, index) => (

                                                <tr

                                                    key={index}

                                                    className="border-b border-gray-100 hover:bg-gray-50 transition-all">

                                                    <td className="p-5">

                                                        <div className="flex items-center gap-4">

                                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xl">

                                                                📄

                                                            </div>

                                                            <div>

                                                                <h3 className="font-bold text-gray-800">

                                                                    {uploaded.name}

                                                                </h3>

                                                                <p className="text-gray-500 text-xs mt-1">

                                                                    Enterprise File

                                                                </p>

                                                            </div>

                                                        </div>

                                                    </td>

                                                    <td className="p-5">

                                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">

                                                            {
                                                                uploaded.type ||
                                                                "Document"
                                                            }

                                                        </span>

                                                    </td>

                                                    <td className="p-5 font-semibold text-gray-700">

                                                        {
                                                            (
                                                                uploaded.size / 1024
                                                            ).toFixed(2)
                                                        }

                                                        {" "}KB

                                                    </td>

                                                    <td className="p-5">

                                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">

                                                            Uploaded

                                                        </span>

                                                    </td>

                                                </tr>
                                            )
                                        )
                                    }

                                </tbody>

                            </table>

                        </div>
                    )
                }

            </div>

        </MainLayout>
    );
}

export default FileUpload;