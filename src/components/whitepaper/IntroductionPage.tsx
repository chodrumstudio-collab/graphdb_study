import React from 'react';
import { Quote } from 'lucide-react';
import { PageProps } from '../../types/PageProps';

export const IntroductionPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">01</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">소개</h2>
            <p className="text-gray-500">Introduction</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      <div className="max-w-4xl space-y-8">
        <p className="text-gray-700 leading-relaxed">
          오늘날의 데이터는 단순히 독립적인 정보의 집합이 아닙니다. 데이터 간의 관계와 연결이 
          비즈니스의 핵심 가치를 만들어냅니다. 그래프 데이터베이스는 이러한 연결된 데이터를 
          자연스럽게 표현하고 효율적으로 탐색할 수 있는 혁신적인 기술입니다.
        </p>

        <p className="text-gray-700 leading-relaxed">
          전통적인 관계형 데이터베이스(RDBMS)는 테이블과 조인을 통해 데이터를 관리하지만, 
          관계가 복잡해질수록 성능이 급격히 저하됩니다. 반면 그래프 데이터베이스는 노드와 
          엣지로 구성된 그래프 구조를 사용하여 관계를 일급 시민(first-class citizen)으로 
          취급합니다.
        </p>

        {/* Highlighted Quote */}
        <div className="bg-[#F5F5F5] border-l-4 border-[#00BCD4] p-8 rounded-r-lg relative my-8">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-[#00BCD4] opacity-20" />
          <div className="pl-12">
            <blockquote className="text-[#1A237E] text-xl leading-relaxed mb-3">
              "그래프 데이터베이스는 연결된 데이터 쿼리에서 관계형 데이터베이스 대비 
              <span className="text-[#00BCD4]"> 수백 배에서 수천 배의 성능 향상</span>을 제공합니다."
            </blockquote>
            <cite className="text-gray-600 not-italic">
              — Orders-of-magnitude improvement in query performance
            </cite>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          이 백서에서는 그래프 데이터베이스의 핵심 개념부터 실제 적용 사례까지 포괄적으로 
          다룹니다. 데이터 전문가와 기술 리더들이 그래프 데이터베이스의 가치를 이해하고 
          비즈니스에 적용할 수 있도록 실용적인 가이드를 제공합니다.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1A237E] text-white p-6 rounded-lg">
            <div className="text-3xl mb-2">1000x</div>
            <p className="text-[#00BCD4]">성능 향상</p>
            <p className="text-sm text-white/80 mt-1">Performance Gain</p>
          </div>
          <div className="bg-[#1A237E] text-white p-6 rounded-lg">
            <div className="text-3xl mb-2">92%</div>
            <p className="text-[#00BCD4]">복잡도 감소</p>
            <p className="text-sm text-white/80 mt-1">Complexity Reduction</p>
          </div>
          <div className="bg-[#1A237E] text-white p-6 rounded-lg">
            <div className="text-3xl mb-2">10x</div>
            <p className="text-[#00BCD4]">개발 속도</p>
            <p className="text-sm text-white/80 mt-1">Development Speed</p>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <svg className="absolute bottom-8 left-16 w-24 h-24 opacity-5" viewBox="0 0 100 100">
        <circle cx="30" cy="30" r="5" fill="#1A237E" />
        <circle cx="70" cy="30" r="5" fill="#1A237E" />
        <circle cx="50" cy="70" r="5" fill="#1A237E" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="#1A237E" strokeWidth="2" />
        <line x1="30" y1="30" x2="50" y2="70" stroke="#1A237E" strokeWidth="2" />
        <line x1="70" y1="30" x2="50" y2="70" stroke="#1A237E" strokeWidth="2" />
      </svg>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 3</p>
      </div>
    </div>
  );
};
