import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Github() {
    const data = useLoaderData();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!data) {
            setError("Failed to fetch data.");
        }
    }, [data]);

    if (error) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-red-800">
                <div className="text-center m-4 bg-white shadow-lg rounded-lg p-6 max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

      return (
        <div className="p-6  min-h-screen  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Section */}
            <div className=" sm:ml-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card Component */}
              {[
                {
                  title: "Job Portal",
                  description: "Under Development",
                  gradient: "from-blue-500 to-indigo-500",
                  buttonColor: "bg-indigo-500",
                  buttonHover: "hover:bg-indigo-600",
                  Link: "https://prathmesh-kathe.github.io/Certificate_Application/",
                },
                {
                  title: "Bag Shop",
                  description: "Under Development",
                  gradient: "from-green-500 to-teal-500",
                  buttonColor: "bg-teal-500",
                  buttonHover: "hover:bg-teal-600",
                },
                {
                  title: "Uber Clone",
                  description: "Backend Development",
                  gradient: "from-purple-500 to-pink-500",
                  buttonColor: "bg-pink-500",
                  buttonHover: "hover:bg-pink-600",
                },
                {
                  title: "Under Development",
                  description: "Backend Development",
                  gradient: "from-red-500 to-orange-500",
                  buttonColor: "bg-orange-500",
                  buttonHover: "hover:bg-orange-600",
                },
                
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 group-hover:opacity-30 blur-xl transition-opacity`}
                  ></div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {card.title}
                    </h2>
                    <p className="text-gray-600">{card.description}</p>
                    <div className="mt-4">
                      <button
                        className={`${card.buttonColor} text-white px-4 py-2 rounded-lg ${card.buttonHover} focus:outline-none transition-all`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
    
            {/* GitHub Profile Section */}
            <div className="flex flex-col justify-center items-center sm:items-end">
              {loading && (
                <motion.div
                  className="text-white text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Loading...
                </motion.div>
              )}
    
              {!loading && (
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 text-center max-w-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
                    GitHub Profile
                  </h1>
                  <motion.div
                    className="text-gray-700 text-lg mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Public Repositories:{" "}
                    <span className="font-bold text-indigo-600">
                      {data.public_repos || "Loading..."}
                    </span>
                  </motion.div>
    
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <img
                      src="/IMG_20240331_165846-01.jpeg"
                      alt="GitHub Avatar"
                      className="rounded-full border-4 border-indigo-500 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                      width={200}
                    />
                    <a
                      href="https://github.com/prathmesh-kathe?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6"
                    >
                      <motion.button
                        className="py-3 px-6 bg-indigo-600 text-white font-semibold rounded-3xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Repositories
                      </motion.button>
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      );
    }
    

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/prathmesh-kathe');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetching GitHub data failed:', error);
        return { public_repos: 0 };
    }
};
