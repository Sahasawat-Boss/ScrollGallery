"use client"
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AppTitle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <header className="text-center py-6 bg-gray-900 text-white ">
            <h1 className="text-4xl font-bold animate-fade-in-up">ScrollGallery</h1>
            {isVisible && (
                <p className="text-lg mt-2 max-w-2xl mx-auto animate-fade-in-up">
                    ScrollGallery is an infinite scrolling image gallery that lets you explore endless pictures seamlessly. Enjoy a smooth and immersive browsing experience with high-quality images loaded dynamically.
                </p>
            )}
            <div className="flex justify-center">
                <button
                    className="mt-4 px-2 py-1 text-white rounded transition flex items-center hover:bg-gray-600 gap-2"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    {isVisible ? "" : ""} {/*---If wanna add some text later---*/}
                </button>
            </div>
        </header>
    );
};

export default AppTitle;
