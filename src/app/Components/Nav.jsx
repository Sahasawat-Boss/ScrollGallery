"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-900 text-white py-3 px-8 shadow-lg relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold gradient-text animate-fade-in-down">
                    <Link href="/">ScrollGallery</Link>
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-lg animate-fade-in-down">
                    <li className="hover:text-blue-400 transition">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-400 transition">
                        <Link href="/">About</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none hover:bg-gray-700 p-2 rounded"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu (Absolute Positioned) */}
            {menuOpen && (
                <div
                    className="absolute top-12 right-14 w-44 bg-gray-800 text-white rounded-b-lg shadow-md rounded animate-fade-in"
                >
                    <ul className="text-lg">
                        <Link href="/" onClick={toggleMenu}>
                            <li className="hover:bg-blue-500 transition p-3 rounded-t">
                                Home
                            </li>
                        </Link>
                        <Link href="/" onClick={toggleMenu}>
                            <li className="hover:bg-blue-500 transition p-3">
                                About
                            </li>
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
