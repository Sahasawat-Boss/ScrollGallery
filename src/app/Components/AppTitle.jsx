"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AppTitle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <header className="text-center py-6 px-10 bg-gray-900 text-white shadow-md">
            <h1 className="text-4xl font-bold animate-fade-in-up mt-4 gradient-text">
                ScrollGallery
            </h1>

            {isVisible && (
                <div className="text-md md:text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up text-gray-200">
                    <p className="mb-3">
                        <strong>ScrollGallery</strong> lets you explore an <strong>infinite stream</strong> of high-quality images seamlessly.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-left pl-10">
                        <li><strong>Search images</strong> instantly by clicking a tag.</li>
                        <li><strong>Add custom tags</strong> to organize images your way.</li>
                        <li><strong>Infinite scrolling</strong> keeps your gallery fresh with new images.</li>
                    </ul>
                </div>

            )}

            <div className="flex justify-center mt-3">
                <button
                    className="px-4 py-2 bg-gray-800 text-white rounded transition focus:outline-none hover:bg-gray-600 flex items-center gap-2 relative group hover:cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    <span className="hidden group-hover:block absolute right-14 w-36 bg-gray-700 text-white text-xs px-4 py-2 rounded-md transition">
                        {isVisible ? "Hide Description" : "Show Description"}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default AppTitle;
