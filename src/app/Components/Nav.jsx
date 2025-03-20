"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { LuImageDown } from "react-icons/lu";
import Image from "next/image";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-900 text-white py-3 px-8 shadow-lg relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex text-2xl animate-fade-in-down">
                        <span className="pt-1 pr-2"><Image src='/logo.png' width={26} height={26} alt="logo" /></span>
                        <span className="gradient-text font-semibold">ScrollGallery</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-lg animate-fade-in-down">
                    <li className="hover:text-blue-400 transition">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <Link href="/" className="pt-1.5">
                        <span className="text-white hover:text-blue-400 transition"><LuImageDown /></span>
                    </Link>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none hover:bg-gray-700 p-2 rounded  animate-fade-in-up"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu (Absolute Positioned) */}
            {menuOpen && (
                <div
                    className="absolute top-12 right-14 w-44 bg-gray-800 text-white rounded-b-lg shadow-md rounded  animate-fade-in-right"
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
