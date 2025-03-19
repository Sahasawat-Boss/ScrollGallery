"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-10 animate-fade-in-up">
            <div className="flex flex-col  items-center">

                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl font-bold gradient-text">ScrollGallery</h1>
                </Link>

                <div className="mt-8">
                    © {new Date().getFullYear()} ScrollGallery. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
