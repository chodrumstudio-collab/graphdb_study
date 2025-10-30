import React from 'react';
import { PageProps } from '../../types/PageProps';

export const CoverPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="relative h-full bg-[#1A237E] overflow-hidden flex flex-col items-center justify-center p-12">
      {/* Abstract graph network background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 1000">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Network nodes */}
        <circle cx="100" cy="150" r="8" fill="#00BCD4" />
        <circle cx="250" cy="100" r="12" fill="#00BCD4" />
        <circle cx="400" cy="180" r="6" fill="#00BCD4" />
        <circle cx="600" cy="120" r="10" fill="#00BCD4" />
        <circle cx="700" cy="200" r="8" fill="#00BCD4" />
        <circle cx="150" cy="350" r="10" fill="#00BCD4" />
        <circle cx="350" cy="400" r="14" fill="#00BCD4" />
        <circle cx="550" cy="350" r="8" fill="#00BCD4" />
        <circle cx="200" cy="550" r="12" fill="#00BCD4" />
        <circle cx="450" cy="600" r="10" fill="#00BCD4" />
        <circle cx="650" cy="550" r="8" fill="#00BCD4" />
        <circle cx="300" cy="750" r="10" fill="#00BCD4" />
        <circle cx="500" cy="800" r="12" fill="#00BCD4" />
        <circle cx="100" cy="850" r="8" fill="#00BCD4" />
        <circle cx="700" cy="750" r="10" fill="#00BCD4" />
        
        {/* Network edges */}
        <line x1="100" y1="150" x2="250" y2="100" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="250" y1="100" x2="400" y2="180" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="400" y1="180" x2="600" y2="120" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="600" y1="120" x2="700" y2="200" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="100" y1="150" x2="150" y2="350" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="250" y1="100" x2="350" y2="400" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="400" y1="180" x2="350" y2="400" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="350" y1="400" x2="550" y2="350" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="700" y1="200" x2="550" y2="350" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="150" y1="350" x2="200" y2="550" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="350" y1="400" x2="450" y2="600" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="550" y1="350" x2="650" y2="550" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="200" y1="550" x2="300" y2="750" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="450" y1="600" x2="500" y2="800" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="650" y1="550" x2="700" y2="750" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="300" y1="750" x2="100" y2="850" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
        <line x1="500" y1="800" x2="700" y2="750" stroke="#00BCD4" strokeWidth="2" opacity="0.4" />
      </svg>

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-[#00BCD4] tracking-[0.3em] mb-8">TECHNICAL WHITEPAPER</p>
        
        <h1 className="text-white text-5xl mb-4 leading-tight">
          그래프 데이터베이스 기술 백서
        </h1>
        
        <div className="w-24 h-1 bg-[#00BCD4] mx-auto mb-6"></div>
        
        <h2 className="text-[#00BCD4] text-3xl mb-16">
          연결된 데이터의 가치 발견
        </h2>
        
        <p className="text-white/80 text-xl">
          Graph Database Technology Whitepaper:<br />
          Discovering the Value of Connected Data
        </p>
      </div>
      
      <div className="absolute bottom-8 text-white/60">
        <p>2025</p>
      </div>
    </div>
  );
};
