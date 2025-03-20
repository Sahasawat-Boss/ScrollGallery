"use client";

import Image from "next/image";
import Link from "next/link";

const Design = () => {
    return (
        <div className=" bg-gray-900 text-white flex flex-col items-center pt-3 pb-2">
            {/* Header */}
            <h1 className="text-4xl lg:text-5xl font-bold animate-fade-in-right mb-4 p-1 gradient-text">
                Design Showcase
            </h1>

            {/* Design Description */}
            <div className="my-6 max-w-2xl text-center text-gray-300 animate-fade-in-up">
                <p>
                    This mockup for the <strong>ScrollGallery</strong> project showcases a clean,
                    modern UI with interactive tagging, tag sorting, and dynamic content loading.
                    Designed with user experience, accessibility, and responsiveness in mind.                </p>
            </div>

            <div className="bg-grid-pattern w-full flex justify-center items-center py-6">
                {/* Design Image */}
                <div className="overflow-hidden shadow-xl shadow-black/20 animate-fade-in-left ">
                    <Image
                        src="/Images/design.png"
                        alt="App Design"
                        width={650} // Adjust size
                        height={650}
                    />
                </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-6">
                <Link href="/" className="gradient-back-button">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default Design;
