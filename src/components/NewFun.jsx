
const NewFun = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center" >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Square Wrapper */}

          <div className="relative w-96 h-96 flex items-center justify-center mb-12 group mt-10">
            {/* Shape Layers */}
            <span className="absolute w-full h-full border-2 border-black rounded-[32%_58%_69%_43%/48%_32%_59%_55%] animate-spin group-hover:bg-gray-800 group-hover:border-transparent"></span>
            <span className="absolute w-full h-full border-2 border-black rounded-[38%_62%_63%_37%/41%_44%_56%_59%] animate-spin-reverse group-hover:bg-gray-800 group-hover:border-transparent"></span>
            <span className="absolute w-full h-full border-2 border-black rounded-[31%_45%_74%_35%/38%_56%_51%_37%] animate-spin-slow group-hover:bg-gray-800 group-hover:border-transparent"></span>


            {/* Circle Content */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-20 sm:space-y-0 sm:space-x-4">
              <div className="relative p-10 text-center transition-all hover:border-4 hover:border-white hover:scale-105 hover:shadow-xl hover:rounded-lg hover:bg-gray-800 hidden sm:block">
                <h4 className="text-white text-5xl  font-bold">FrontEnd Skills</h4>
                <p className="text-white text-lg mt-4">
                  Proficient in HTML5, CSS3, JavaScript, React.js, responsive design, Tailwind CSS, version control (Git), and browser debugging.
                </p>
              </div>

              <div className="relative p-10 text-center  transition-all ">
                <h4 className="text-white text-5xl font-bold">MERN  Developer</h4>
                <p className="text-white text-lg mt-2">
                I am a highly motivated web developer with a solid foundation in React.js, Hand JavaScript, now expanding my skills to build full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </p>
              </div>

              <div className="relative p-10 text-center hidden sm:block transition-all hover:border-4 hover:border-white hover:scale-105 hover:shadow-xl hover:rounded-lg hover:bg-gray-800">
                <h4 className="text-white text-5xl font-bold">Backend Skills</h4>
                <p className="text-white text-lg mt-2">
                  Proficient in server-side programming with Node.js, Express.js, REST APIs, database management using MongoDB and MySQL, authentication, and deployment.
                </p>
              </div>
            </div>

          </div>

          {/* Button */}

        </div>
      </div>

      <style>{`
        .animate-spin {
          animation: spin 6s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NewFun;
