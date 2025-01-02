import React, { useState } from 'react';

const Line = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10); // Minor delay to reset animation.
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div 
        className={`h-2 sm:w-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg shadow-[0_0_10px_#00d4d4] ${
          isAnimating ? 'animate-move' : ''
        }`}
      ></div>

    
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
    </div>
  );
};

export default Line;
