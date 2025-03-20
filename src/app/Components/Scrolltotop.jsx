"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // ✅ Import scroll-up icon

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-2 lg:p-3 rounded-full bg-gray-600 text-white text-lg shadow-lg hover:bg-gray-500 hover:scale-110 hover:cursor-pointer transition ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;
