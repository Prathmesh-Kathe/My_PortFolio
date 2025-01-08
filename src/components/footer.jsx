import React from 'react';
import { Link } from 'react-router-dom';
import Line from './Line';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Line></Line>
            <footer className="bg-gray-900 text-gray-400 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <Link to="/" className="footer__logo">
                        <span
                            className=" bg-contain bg-center block w-16 h-12"
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
                        ></span>
                    </Link>
                    <ul className="flex justify-center items-center gap-6 mr-7">
                        {/* Twitter */}
                        <li>
                            <a
                                href="https://www.threads.net/@chetan_kathe_patil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent bg-transparent hover:bg-white hover:scale-110 hover:rotate-180 transform transition-all duration-300"
                                title="Twitter"
                            >
                                <span
                                    className="w-6 h-6 bg-contain bg-center block"
                                    style={{
                                        backgroundImage: "url('https://ig-launch.test-project.pp.ua/img/twitter.svg')",
                                    }}
                                ></span>
                            </a>
                        </li>

                        {/* YouTube */}
                        <li>
                            <a
                                href="https://www.instagram.com/chetan_kathe_patil?igsh=YWx1a2ZmbGFhNmk0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent bg-transparent hover:bg-white hover:scale-110 hover:rotate-180 transform transition-all duration-300"
                                title="YouTube"
                            >
                                <span
                                    className="w-6 h-6 bg-contain bg-center block"
                                    style={{
                                        backgroundImage: "url('https://ig-launch.test-project.pp.ua/img/twitter.svg')",
                                    }}
                                ></span>
                            </a>
                        </li>

                        {/* Telegram (commented out) */}
                        {/* <li>
        <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent bg-transparent hover:bg-white hover:scale-110 hover:rotate-180 transform transition-all duration-300"
            title="Telegram"
        >
            <span
                className="w-6 h-6 bg-contain bg-center block"
                style={{
                    backgroundImage: "url('https://ig-launch.test-project.pp.ua/img/telegram.svg')",
                }}
            ></span>
        </a>
    </li> */}

                        {/* WhatsApp (commented out) */}
                        {/* <li>
        <a
            href="555"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent bg-transparent hover:bg-white hover:scale-110 hover:rotate-180 transform transition-all duration-300"
            title="WhatsApp"
        >
            <span
                className="w-6 h-6 bg-contain bg-center block"
                style={{
                    backgroundImage: "url('https://ig-launch.test-project.pp.ua/img/whatsapp.svg')",
                }}
            ></span>
        </a>
    </li> */}
                    </ul>


                    <button
                        type="button"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 transition-transform hover:scale-110"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span
                            className="w-6 h-6 bg-contain bg-center block"
                            style={{ backgroundImage: "url('https://ig-launch.test-project.pp.ua/img/drop-up.svg')" }}
                        ></span>
                    </button>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 mr-10">
                    <li>
                        <Link to="/" className="text-gray-400 hover:text-white transition duration-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-gray-400 hover:text-white transition duration-200">project</Link>
                    </li>
                    <li>
                        <Link to="/github" className="text-gray-400 hover:text-white transition duration-200">GitHub</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-gray-400 hover:text-white transition duration-200">Repo</Link>
                    </li>
                </ul>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm text-gray-500">Prathmesh kathe  &copy; {currentYear}</p>
                </div>
            </footer>
        </>
    );
}
