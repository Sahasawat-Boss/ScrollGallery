"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AppTitle = () => {
    const [isVisible, setIsVisible] = useState(true);


    return (
        <header className="text-center py-6 px-10 bg-gray-900 text-white shadow-md">
            <h1 className="text-4xl lg:text-5xl font-bold animate-fade-in-up mt-4 p-1 gradient-text">
                ScrollGallery
            </h1>
            <p className="my-4 lg:text-lg">
                Explore an endless collection of images with auto-generated tags.
            </p>
            {isVisible && (
                <div className="mt-4 max-w-lg mx-auto animate-fade-in-up text-gray-200">

                    <ul className="list-disc list-inside text-gray-300 text-left pl-10 lg:text-lg">
                        <strong>Features:</strong>
                        <li><strong>Click tags</strong> to instantly find related images.</li>
                        <li><strong>Add tags</strong> to organize images your way.</li>
                        <li><strong>Infinite scrolling</strong> for endless discovery.</li>
                        <li><strong>Fully responsive</strong> for seamless viewing on any device.</li>
                        <li><strong>Fast loading</strong> with optimized performance.</li>
                        <li><strong>Clean UI</strong> with a modern, user-friendly design.</li>
                    </ul>

                </div>

            )}

            <div className="flex justify-center mt-3 animate-fade-in-up">
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
