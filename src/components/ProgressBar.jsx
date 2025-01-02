
const DemoCube = () => {
  return (
    <main className="flex items-center justify-center  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="text-center">
        <h1 className="text-5xl flex justify-center items-center text-black">
          Loading
          <span className="dot inline-block text-3xl animate-pulse delay-100">.</span>
          <span className="dot inline-block text-3xl animate-pulse delay-200">.</span>
          <span className="dot inline-block text-3xl animate-pulse delay-300">.</span>
          <sub className="ml-4 text-xs font-normal"></sub>
        </h1>
        <div className="mt-8 w-[350px]  hidden sm:block h-[25px] bg-black rounded-lg border-2 border-dimGray relative">
          <div className="h-2 bg-gradient-to-br from-cyan-400 to-lightBlue-400 rounded-lg shadow-[0_0_10px_#00d4d4] animate-move"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(0); }
          100% { transform: translateX(390px); }
        }

        .animate-move {
          animation: move 0.25s infinite alternate ease-in-out;
        }

        .dot {
          animation: pulse-dot 1.5s infinite alternate;
        }

        @keyframes pulse-dot {
          0% { color: #00d4d4; transform: translateY(-10%); }
          100% { color: #ffffff; transform: translateY(0); }
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </main>
  );
}

export default DemoCube;
