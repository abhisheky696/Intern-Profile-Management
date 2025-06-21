import React, { useState } from "react";
import { STATUS_COLORS } from "../utils/StatusColor";
import { internData } from "../utils/InternData";

const InternProfileManagementDashboard = () => {
    const [data, setData] = useState(internData);
    const handleStatusChange = (id, newStatus) => {
        setData((prev) =>
            prev.map((intern) =>
                intern.id === id ? { ...intern, status: newStatus } : intern
            )
        );
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(`File uploaded:`, file?.name);
    };
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Intern Profile Management Dashboard
            </h1>
            <div className="bg-white rounded-xl shadow overflow-auto">
                <div className="grid grid-cols-8 gap-4 p-4 bg-gray-200 font-semibold text-sm text-gray-700 min-w-[1000px]">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Department</div>
                    <div>Status</div>
                    <div>Resume</div>
                    <div>Govt ID</div>
                    <div>Agreement</div>
                    <div>Joining Letter</div>
                </div>
                {data.map((intern) => (
                    <div
                        key={intern.id}
                        className="grid grid-cols-8 gap-4 items-center p-4 border-t border-gray-100 hover:bg-gray-50 text-sm min-w-[1000px]"
                    >
                        <div>{intern.name}</div>
                        <div className="text-gray-600">{intern.email}</div>
                        <div>{intern.department}</div>
                        <div className="flex flex-col gap-1">
                            <div
                                className={`text-xs  px-2 py-1 rounded-full w-fit font-semibold ${
                                    STATUS_COLORS[intern.status]
                                }`}
                            >
                                {intern.status}
                            </div>
                            <select
                                className="border rounded px-1 py-1 text-xs"
                                value={intern.status}
                                onChange={(e) =>
                                    handleStatusChange(
                                        intern.id,
                                        e.target.value
                                    )
                                }
                            >
                                <option>Onboarding</option>
                                <option>Completed</option>
                                <option>Pending Docs</option>
                            </select>
                        </div>
                        <input
                            type="file"
                            name="Resume"
                            className="block w-full text-xs text-gray-700 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
                            onChange={(e) => handleFileChange(e)}
                        />
                        <input
                            type="file"
                            name="giveid"
                            className="block w-full text-xs text-gray-700 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
                            onChange={(e) => handleFileChange(e)}
                        />
                        <input
                            type="file"
                            name="agreement"
                            className="block w-full text-xs text-gray-700 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
                            onChange={(e) => handleFileChange(e)}
                        />
                        <input
                            type="file"
                            name="joiningletter"
                            className="block w-full text-xs text-gray-700 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
                            onChange={(e) => handleFileChange(e)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InternProfileManagementDashboard;
