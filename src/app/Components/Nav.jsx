import Link from "next/link";

const Nav = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
                <h1 className="text-xl font-bold animate-fade-in-down gradient-text ">ScrollGallery </h1>
                <ul className="flex space-x-4 animate-fade-in-down">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
