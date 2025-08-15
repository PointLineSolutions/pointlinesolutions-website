import React from 'react';

// Geometric Pattern Divider
export const GeometricDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-24 overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-cyan-500/60 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
  </div>
);

// Wave Divider
export const WaveDivider = ({ className = "", reverse = false }: { className?: string; reverse?: boolean }) => (
  <div className={`relative h-20 overflow-hidden ${className}`}>
    <svg
      className={`absolute inset-0 w-full h-full ${reverse ? 'rotate-180' : ''}`}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-cyan-500/20"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-cyan-500/30"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-cyan-500/40"
      />
    </svg>
  </div>
);

// Animated Dots Divider
export const AnimatedDotsDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-16 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-cyan-500/80 rounded-full animate-bounce"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
  </div>
);

// Hexagon Pattern Divider
export const HexagonDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-20 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-1">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-cyan-500/40 transform rotate-45 animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
  </div>
);

// Gradient Line Divider
export const GradientLineDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-12 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-pulse"></div>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 bg-cyan-500/80 rounded-full animate-ping"></div>
    </div>
  </div>
);

// Spiral Divider
export const SpiralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-24 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-2 w-12 h-12 border-2 border-cyan-500/50 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 w-8 h-8 border-2 border-cyan-500/70 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
        <div className="absolute inset-6 w-4 h-4 bg-cyan-500/80 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Zigzag Divider
export const ZigzagDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-16 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="M0,10 L10,5 L20,10 L30,5 L40,10 L50,5 L60,10 L70,5 L80,10 L90,5 L100,10"
          stroke="url(#zigzagGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

// Diamond Pattern Divider
export const DiamondDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-20 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-cyan-500/40 transform rotate-45 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
  </div>
);

// Floating Elements Divider
export const FloatingElementsDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-28 overflow-hidden ${className}`}>
    <div className="absolute inset-0">
      <div className="absolute top-4 left-1/4 w-3 h-3 bg-cyan-500/60 rounded-full animate-float"></div>
      <div className="absolute top-8 right-1/3 w-2 h-2 bg-purple-500/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-12 left-1/2 w-4 h-4 bg-yellow-500/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-6 right-1/4 w-2 h-2 bg-green-500/60 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-10 left-1/3 w-3 h-3 bg-pink-500/60 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
  </div>
);

// Modern Line Divider
export const ModernLineDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-16 overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500/50"></div>
          <div className="w-2 h-2 bg-cyan-500/80 rounded-full animate-ping"></div>
          <div className="w-1 h-1 bg-cyan-500/60 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-500/80 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-500/50"></div>
        </div>
      </div>
    </div>
  </div>
);
