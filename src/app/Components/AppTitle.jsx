"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AppTitle = () => {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <header className="text-center pt-2 pb-7 px-10 bg-gray-900 text-white drop-shadow-lg">
            <h1 className="text-4xl lg:text-5xl font-bold animate-fade-in-right mt-4 p-1 gradient-text">
                ScrollGallery
            </h1>
            <p className="mt-4 md:text-lg animate-fade-in-left">
                Explore an endless collection of images with auto-generated tags.
            </p>

            {/* Feature Section*/}
            <div className="flex justify-center mt-6 animate-fade-in-up">
                <button
                    className="px-4 py-2 bg-gray-700 text-white rounded transition focus:outline-none hover:bg-gray-600 flex items-center gap-2 relative group hover:cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                >   Features
                    <div className="pt-1">{isVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}</div>
                    <span className="hidden group-hover:block absolute -top-8 left-20 w-32 bg-gray-700 text-white text-sm px-4 py-2 rounded-md transition">
                        {isVisible ? "Hide Features" : "Show Features"}
                    </span>
                </button>
            </div>

            {isVisible && (
                <div className=" animate-fade-in-up text-gray-200 py-1.5">
                    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-md md:text-lg flex flex-col items-center">
                        <div className="flex flex-col gap-1 pt-2 text-left">
                            <li><strong>Click tags</strong> to instantly find related images.</li>
                            <li><strong>Add tags</strong> to organize images your way.</li>
                            <li><strong>Infinite scrolling</strong> for endless discovery.</li>
                            <li><strong>Fully responsive</strong> for viewing on any device.</li>
                            <li><strong>Fast loading</strong> with optimized performance.</li>
                            <li><strong>Clean UI</strong> with a modern, user-friendly design.</li>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default AppTitle;
