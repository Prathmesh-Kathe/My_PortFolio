import React from "react";

function About() {
    return (
        <div className="py-16 text-center  bg-gradient-to-b from-gray-500 to-gray-500 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: 'url("https://media4.giphy.com/media/HscDLzkO8EOTmgkhQP/giphy.webp?cid=ecf05e47hhk3esbjhxnmqukx6mksj9lz9mpg13e6jux52fim&ep=v1_gifs_search&rid=giphy.webp&ct=g")' }}>
            <div className="container mx-auto px-6 text-white md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div
                        className="md:w-7/12 lg:w-6/12"
                        data-aos="fade-right"
                    >
                        <h2 className="text-2xl text-yellow-100 font-bold md:text-4xl">
                            MERN Stack Development: Powered by Passion & Innovation
                        </h2>
                        <p className="mt-6 text-white-600 leading-relaxed">
                            I have extensive experience in full-stack web development using the MERN stack. My skill set includes building responsive UIs with React.js, developing RESTful APIs with Node.js and Express.js, and efficiently handling databases with MongoDB.
                        </p>
                        <p className="mt-4 text-white-600 leading-relaxed">
                            Job Portal Application
                            Developed a MERN stack job portal that connects recruiters with job seekers. Implemented user authentication, real-time notifications, and job application tracking. Enhanced user experience by designing responsive layouts using Material-UI.
                            <br /> 
                           
                        </p>
                        <p className="mt-4 text-white-600 leading-relaxed">
                            Coding is my passion because it allows me to transform ideas into real-world solutions. I thrive on solving complex problems and creating user-focused applications that make an impact.
                        </p>
                        <button
                            className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 "
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Text Section */}
                    <div
                        className="md:w-7/12 lg:w-6/12"
                        data-aos="fade-left"
                    >
                        <h2 className="text-2xl text-yellow-100 font-bold md:text-4xl">
                        Crafting Futures: Education Built on Curiosity & Innovation
                        </h2>
                        <p className="mt-6 text-white-600 leading-relaxed">
                            💻✨MCA student at Vidyabharati Mahavidyalaya | Full-Stack Developer 🚀 | Passionate
                            about React.js and Problem Solving | Let's build tomorrow together! 💡 #WebDevelopment
                            #ProblemSolving
                        </p>
                        <p className="mt-4 text-white-600 leading-relaxed">
                            🎓 BSc in Computer Science | Java Enthusiast ☕️ | HTML, CSS, and JavaScript. Dedicated to
                            taking organizations to new heights with innovative solutions! 💥 #Core Java #WebDevelopment
                        </p>
                        <p className="mt-4 text-white-600 leading-relaxed">
                            I am a highly enthusiastic and motivated Web Developer with a strong passion for programming.
                            I have a postgraduate degree in Master of Computer Applications (MCA), specializing in
                            software development, algorithms, database management, and system analysis. 
                            Currently seeking a position in the IT industry to further enhance my skills.
                        </p>
                        <button
                            className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 "
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
