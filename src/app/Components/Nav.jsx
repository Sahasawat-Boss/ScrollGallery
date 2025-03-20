"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { LuImageDown } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-900 text-white py-3.5 px-4.5 md:px-12 shadow-lg relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex pl-2 text-2xl animate-fade-in-down hover:scale-105">
                        <span className="pt-1 pr-2"><Image src='/logo.png' width={28} height={28} alt="logo"/></span>
                        <span className="gradient-text font-semibold">ScrollGallery</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-lg animate-fade-in-down">
                    <Link href="/">
                        <div className="flex  hover:text-blue-400 transition">
                            <span className="pt-1.5 pr-1"><AiOutlineHome /></span>
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link href="/pages/Design">
                        <div className="flex text-white hover:text-blue-400 transition">
                            <span className="pt-1.5 pr-1"><LuImageDown /></span>
                            <span>Design</span>
                        </div>
                    </Link>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none hover:bg-gray-700 p-2 rounded  animate-fade-in-up hover:cursor-pointer"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu (Absolute Positioned) */}
            {menuOpen && (
                <div
                    className="absolute z-50 top-10 right-8 w-44 bg-gray-800 text-white rounded-b-lg shadow-md rounded  animate-fade-in-right"
                >
                    <div className="text-lg">
                        <Link href="/" onClick={toggleMenu}>
                            <div className="flex text-white hover:bg-blue-700 transition  p-2.5 ">
                                <span className="pt-1.5 pr-1"><AiOutlineHome /></span>
                                <span>Home</span>
                            </div>
                        </Link>
                        <Link href="/pages/Design" onClick={toggleMenu}>
                            <div className="flex text-white hover:bg-blue-700 transition  p-2.5 ">
                                <span className="pt-1.5 pr-1"><LuImageDown /></span>
                                <span>Design</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
