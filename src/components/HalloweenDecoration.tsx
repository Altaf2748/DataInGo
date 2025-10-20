import React from 'react';

const HalloweenDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating Pumpkins */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-80">
        🎃
      </div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}>
        👻
      </div>
      <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-75" style={{ animationDelay: '1s' }}>
        🦇
      </div>
      <div className="absolute bottom-32 right-32 text-6xl animate-pulse opacity-80" style={{ animationDelay: '1.5s' }}>
        🎃
      </div>
      <div className="absolute top-1/3 right-10 text-4xl animate-bounce opacity-60" style={{ animationDelay: '2s' }}>
        🕷️
      </div>
      <div className="absolute top-1/2 left-32 text-5xl animate-pulse opacity-70" style={{ animationDelay: '2.5s' }}>
        🦇
      </div>
      
      {/* Spooky Web in Corners */}
      <div className="absolute top-0 left-0 text-8xl opacity-30">
        🕸️
      </div>
      <div className="absolute top-0 right-0 text-8xl opacity-30 scale-x-[-1]">
        🕸️
      </div>
    </div>
  );
};

export default HalloweenDecoration;
