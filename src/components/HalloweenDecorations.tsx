import React from 'react';

const HalloweenDecorations: React.FC = () => {
  return (
    <>
      {/* Hanging decorations */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden h-20">
        <div className="relative w-full h-full">
          {/* Hanging pumpkins */}
          <div className="absolute top-0 left-[10%] animate-[swing_3s_ease-in-out_infinite]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-orange-900/50 to-transparent"></div>
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]">🎃</span>
            </div>
          </div>
          
          {/* Hanging ghost */}
          <div className="absolute top-0 left-[25%] animate-[swing_2.5s_ease-in-out_infinite_0.3s]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-10 bg-gradient-to-b from-gray-400/50 to-transparent"></div>
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">👻</span>
            </div>
          </div>
          
          {/* Hanging bat */}
          <div className="absolute top-0 left-[45%] animate-[swing_2.8s_ease-in-out_infinite_0.5s]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-purple-900/50 to-transparent"></div>
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]">🦇</span>
            </div>
          </div>
          
          {/* Hanging spider */}
          <div className="absolute top-0 left-[65%] animate-[swing_3.2s_ease-in-out_infinite_0.7s]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-gray-600/50 to-transparent"></div>
              <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(100,100,100,0.8)]">🕷️</span>
            </div>
          </div>
          
          {/* Hanging pumpkin */}
          <div className="absolute top-0 left-[80%] animate-[swing_2.6s_ease-in-out_infinite_0.2s]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-7 bg-gradient-to-b from-orange-900/50 to-transparent"></div>
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]">🎃</span>
            </div>
          </div>

          {/* Hanging candy */}
          <div className="absolute top-0 left-[90%] animate-[swing_2.9s_ease-in-out_infinite_0.4s]">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-9 bg-gradient-to-b from-pink-600/50 to-transparent"></div>
              <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,20,147,0.8)]">🍬</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes swing {
          0%, 100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
      `}</style>
    </>
  );
};

export default HalloweenDecorations;
