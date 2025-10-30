import React from 'react';
import { PageProps } from '../../types/PageProps';

export const CoreConceptsPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">02</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">핵심 개념</h2>
            <p className="text-gray-500">Core Concepts</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      <div className="grid grid-cols-2 gap-12 mb-8">
        {/* Graph Components Diagram */}
        <div>
          <h3 className="text-[#1A237E] text-xl mb-6">그래프 구성 요소</h3>
          
          <svg viewBox="0 0 400 300" className="w-full">
            {/* Node Example */}
            <g>
              <circle cx="100" cy="80" r="40" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
              <text x="100" y="85" textAnchor="middle" fill="white" fontSize="14">Person</text>
              <rect x="45" y="130" width="110" height="60" fill="#F5F5F5" stroke="#00BCD4" strokeWidth="1" rx="4" />
              <text x="100" y="150" textAnchor="middle" fill="#1A237E" fontSize="12">name: "Alice"</text>
              <text x="100" y="170" textAnchor="middle" fill="#1A237E" fontSize="12">age: 30</text>
            </g>
            
            {/* Relationship Example */}
            <g>
              <line x1="180" y1="80" x2="320" y2="80" stroke="#00BCD4" strokeWidth="4" markerEnd="url(#arrowhead)" />
              <rect x="220" y="60" width="80" height="24" fill="white" stroke="#00BCD4" strokeWidth="2" rx="4" />
              <text x="260" y="77" textAnchor="middle" fill="#1A237E" fontSize="12">KNOWS</text>
              <text x="260" y="110" textAnchor="middle" fill="#00BCD4" fontSize="11">since: 2020</text>
            </g>
            
            {/* Second Node */}
            <circle cx="360" cy="80" r="40" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
            <text x="360" y="85" textAnchor="middle" fill="white" fontSize="14">Person</text>
            
            {/* Labels */}
            <text x="100" y="220" textAnchor="middle" fill="#1A237E" fontSize="13">Node</text>
            <text x="100" y="240" textAnchor="middle" fill="#666" fontSize="11">엔티티 표현</text>
            
            <text x="260" y="140" textAnchor="middle" fill="#1A237E" fontSize="13">Relationship</text>
            <text x="260" y="160" textAnchor="middle" fill="#666" fontSize="11">관계 표현</text>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#00BCD4" />
              </marker>
            </defs>
          </svg>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1A237E] rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <p className="text-[#1A237E]">Node (노드)</p>
                <p className="text-sm text-gray-600">엔티티를 표현하는 기본 단위</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-2 bg-[#00BCD4] flex-shrink-0 mt-2"></div>
              <div>
                <p className="text-[#1A237E]">Relationship (관계)</p>
                <p className="text-sm text-gray-600">노드 간의 연결을 표현</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 border-2 border-[#00BCD4] rounded flex-shrink-0 mt-1"></div>
              <div>
                <p className="text-[#1A237E]">Property (속성)</p>
                <p className="text-sm text-gray-600">노드와 관계의 데이터</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#00BCD4] rounded flex-shrink-0 mt-1"></div>
              <div>
                <p className="text-[#1A237E]">Label (레이블)</p>
                <p className="text-sm text-gray-600">노드의 타입 분류</p>
              </div>
            </div>
          </div>
        </div>

        {/* RDBMS vs Graph DB */}
        <div>
          <h3 className="text-[#1A237E] text-xl mb-6">RDBMS vs Graph Database</h3>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1A237E] text-white">
                  <th className="p-3 text-left">특성</th>
                  <th className="p-3 text-left">RDBMS</th>
                  <th className="p-3 text-left">Graph DB</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-[#F5F5F5]">데이터 모델</td>
                  <td className="p-3">테이블</td>
                  <td className="p-3 text-[#00BCD4]">그래프</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-[#F5F5F5]">관계 표현</td>
                  <td className="p-3">외래 키</td>
                  <td className="p-3 text-[#00BCD4]">엣지</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-[#F5F5F5]">조인 성능</td>
                  <td className="p-3">깊이↑ 성능↓</td>
                  <td className="p-3 text-[#00BCD4]">일정</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-[#F5F5F5]">쿼리 복잡도</td>
                  <td className="p-3">높음</td>
                  <td className="p-3 text-[#00BCD4]">낮음</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 bg-[#F5F5F5]">스키마</td>
                  <td className="p-3">고정적</td>
                  <td className="p-3 text-[#00BCD4]">유연함</td>
                </tr>
                <tr>
                  <td className="p-3 bg-[#F5F5F5]">활용 사례</td>
                  <td className="p-3">트랜잭션</td>
                  <td className="p-3 text-[#00BCD4]">관계 분석</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#F5F5F5] p-6 rounded-lg">
            <h4 className="text-[#1A237E] mb-3">성능 비교</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>2-hop 쿼리</span>
                  <span className="text-[#00BCD4]">10x faster</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#00BCD4]" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>3-hop 쿼리</span>
                  <span className="text-[#00BCD4]">100x faster</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#00BCD4]" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>4-hop 쿼리</span>
                  <span className="text-[#00BCD4]">1000x faster</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#00BCD4]" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 4</p>
      </div>
    </div>
  );
};
