"use client";

import { FiRefreshCw } from "react-icons/fi";

const ReloadPageButton = () => {
    const reloadPage = () => {
        window.location.reload(); // ✅ Reloads the entire page
    };

    return (
        <div className="flex w-fit h-fit relative group">
            <button
                onClick={reloadPage}
                className="gradient-re-button "
            >
                <FiRefreshCw className="text-xl " />
            </button>

            {/* ✅ Tooltip */}
            <span className="absolute left-8 -top-8 w-56 bg-gray-500 rounded text-white text-sm px-5 py-2 hidden scale-90 group-hover:inline-block group-hover:scale-100 transition-all duration-200">
                Re-Generate Image and Tags
            </span>
        </div>
    );
};

export default ReloadPageButton;
