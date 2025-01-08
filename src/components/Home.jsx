import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700" >
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-white  from-gray-900 via-gray-800 to-gray-700 rounded-lg mx-4 sm:mx-16 py-12 sm:py-20">
                <div className="absolute inset-0 z-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-screen-xl px-4 mx-auto pt-10 pb-20 sm:py-24 sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 space-y-8 text-center sm:text-right sm:ml-auto">
                        {/* Heading */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl">
                                Wel-Come
                           
                            <span className="block mt-2 text-xl text-orange-400 sm:mt-4 sm:text-3xl lg:text-4xl">
                                I'm Prathmesh Kathe
                            </span>
                            <span className=" mt-2 text-lg sm:text-4xl lg:text-3xl">
                                (FULL STACK DEVELOPER)
                            </span>
                            </h2>
                        </div>



                        {/* Call-to-Action */}
                        <div className="space-y-4 ">
                            <Link
                                to="https://drive.google.com/file/d/1nYa1__smUowppNYyUN3YpC29ll6eCuTn/view?usp=drivesdk"
                                className="relative inline-flex items-center px-3 py-3  mr-6 font-medium text-white bg-orange-700 rounded-lg hover:opacity-80 group gap-2"
                            >
                                <span className="absolute inset-0 transform scale-95 transition-transform bg-orange-600 opacity-50 blur-sm group-hover:scale-110 "></span>
                                <svg
                                    fill="white"
                                    width="27"
                                    height="19"
                                    xmlns="https://github.com/Prathmesh-Kathe"
                                    className="mr-2 "
                                    href='https://drive.google.com/file/d/1nYa1__smUowppNYyUN3YpC29ll6eCuTn/view?usp=drivesdk'
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                Resume
                            </Link>

                            <Link
                                to="/contact"
                                className="relative inline-flex items-center px-6 py-3  mr-6 font-medium text-white bg-orange-700 rounded-lg hover:opacity-80 group gap-2"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Animated Decorations */}
                <div className="absolute -top-20 -left-16 w-96 h-96 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-700 rounded-full opacity-50 animate-ping"></div>
            </aside>


            {/* Technical Skills Section */}

            <h1 className="py-10 text-2xl text-white font-medium text-center sm:text-5xl  "><strong>Technical Skills</strong></h1>
            <div className="relative overflow-hidden  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
                <div className="flex space-x-6 animate-marquee">
                    {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrISpgedNtHAGlKBWl0ftrBe4B1JiGwDTP2g&s",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqgWAToc1DeXBIuEuZgblbMMDgD4tgsM-ag&s",
                        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_88cXM3UfBWGNrsWgw9HyWnBRHoonCbLMg&s",
                        "https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5niSKZpZhcw5Cxk4e5k_-_TNIeaRfu2fgw&s"].map((src, index) => (
                            <img
                                key={index}
                                className="h-48 p-10 rounded-full"
                                src={src}
                                alt={`Skill-${index + 1}`}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
