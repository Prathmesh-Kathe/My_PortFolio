import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
            <nav className="bg-opacity-90 border-gray-200 px-4 lg:px-6 py-1.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="mr-3 h-12 rounded-full border-2 border-gray-400 shadow-md"
                            alt="Logo"
                        />
                    </Link>

                    {/* Menu Toggle for Mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    {/* Links Section */}
                    <div
                        className={`${
                            menuOpen ? "block" : "hidden"
                        } w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-4 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 lg:p-0 duration-200 ${
                                            isActive ? "text-orange-400" : "text-gray-300"
                                        } hover:text-orange-400`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 lg:p-0 duration-200 ${
                                            isActive ? "text-orange-400" : "text-gray-300"
                                        } hover:text-orange-400`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 lg:p-0 duration-200 ${
                                            isActive ? "text-orange-400" : "text-gray-300"
                                        } hover:text-orange-400`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 lg:p-0 duration-200 ${
                                            isActive ? "text-orange-400" : "text-gray-300"
                                        } hover:text-orange-400`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 lg:p-0 duration-200 ${
                                            isActive ? "text-orange-400" : "text-gray-300"
                                        } hover:text-orange-400`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="https://www.linkedin.com/in/prathmesh-kathe-5b76ab217/"
                            className="text-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-6 focus:outline-none"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            to="https://github.com/Prathmesh-Kathe?tab=repositories"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
