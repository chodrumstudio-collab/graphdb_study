import React from 'react';
import { FileText, Box, PenTool, Code, GitBranch, Database, Briefcase, Lightbulb } from 'lucide-react';
import { PageProps } from '../../types/PageProps';

export const TableOfContents: React.FC<PageProps> = ({ onNavigateToPage }) => {
  const sections = [
    { number: '01', title: '소개', subtitle: 'Introduction', icon: FileText, page: 2 },
    { number: '02', title: '핵심 개념', subtitle: 'Core Concepts', icon: Box, page: 3 },
    { number: '03', title: '데이터 모델링', subtitle: 'Data Modeling', icon: PenTool, page: 4 },
    { number: '04', title: '쿼리 언어', subtitle: 'Query Languages', icon: Code, page: 5 },
    { number: '05', title: '그래프 알고리즘', subtitle: 'Graph Algorithms', icon: GitBranch, page: 6 },
    { number: '06', title: '아키텍처', subtitle: 'Architecture', icon: Database, page: 7 },
    { number: '07', title: '사용 사례', subtitle: 'Use Cases', icon: Briefcase, page: 8 },
    { number: '08', title: '결론', subtitle: 'Conclusion', icon: Lightbulb, page: 9 },
  ];

  return (
    <div className="h-full bg-[#F5F5F5] p-16 relative">
      {/* Decorative network pattern */}
      <svg className="absolute top-8 right-8 w-32 h-32 opacity-10" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="4" fill="#1A237E" />
        <circle cx="50" cy="30" r="4" fill="#1A237E" />
        <circle cx="80" cy="25" r="4" fill="#1A237E" />
        <circle cx="35" cy="60" r="4" fill="#1A237E" />
        <circle cx="70" cy="70" r="4" fill="#1A237E" />
        <line x1="20" y1="20" x2="50" y2="30" stroke="#1A237E" strokeWidth="1" />
        <line x1="50" y1="30" x2="80" y2="25" stroke="#1A237E" strokeWidth="1" />
        <line x1="20" y1="20" x2="35" y2="60" stroke="#1A237E" strokeWidth="1" />
        <line x1="50" y1="30" x2="35" y2="60" stroke="#1A237E" strokeWidth="1" />
        <line x1="35" y1="60" x2="70" y2="70" stroke="#1A237E" strokeWidth="1" />
        <line x1="80" y1="25" x2="70" y2="70" stroke="#1A237E" strokeWidth="1" />
      </svg>

      <div className="max-w-4xl">
        <h2 className="text-[#1A237E] text-4xl mb-2">목차</h2>
        <p className="text-gray-600 mb-12">Table of Contents</p>
        
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.number} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 group cursor-pointer"
                onClick={() => onNavigateToPage?.(section.page)}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#1A237E] rounded-lg flex items-center justify-center group-hover:bg-[#00BCD4] transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[#00BCD4]">{section.number}</span>
                    <h3 className="text-[#1A237E] text-xl">{section.title}</h3>
                  </div>
                  <p className="text-gray-500">{section.subtitle}</p>
                </div>
                
                <div className="flex-shrink-0 text-[#1A237E] opacity-50">
                  {section.page + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 text-right text-gray-400">
        <p>Page 2</p>
      </div>
    </div>
  );
};
