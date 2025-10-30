import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageProps } from '../../types/PageProps';

export const DataModelingPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">03</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">데이터 모델링</h2>
            <p className="text-gray-500">Data Modeling</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      {/* 3-Step Process */}
      <div className="mb-12">
        <h3 className="text-[#1A237E] text-xl mb-6">그래프 모델링 3단계 프로세스</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="relative">
            <div className="bg-[#1A237E] text-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">1</span>
              </div>
              <h4 className="text-[#00BCD4] mb-2">엔티티 식별</h4>
              <p className="text-sm text-white/80">도메인의 핵심 개체를 노드로 정의</p>
            </div>
            <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#00BCD4] z-10" />
          </div>

          <div className="relative">
            <div className="bg-[#1A237E] text-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">2</span>
              </div>
              <h4 className="text-[#00BCD4] mb-2">관계 정의</h4>
              <p className="text-sm text-white/80">엔티티 간의 연결을 관계로 표현</p>
            </div>
            <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-[#00BCD4] z-10" />
          </div>

          <div>
            <div className="bg-[#1A237E] text-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">3</span>
              </div>
              <h4 className="text-[#00BCD4] mb-2">속성 추가</h4>
              <p className="text-sm text-white/80">노드와 관계에 세부 정보 부여</p>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Example: Email System */}
      <div>
        <h3 className="text-[#1A237E] text-xl mb-6">실제 사례: 이메일 시스템 모델링</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Before: RDBMS */}
          <div>
            <div className="bg-[#F5F5F5] p-4 rounded-lg mb-3">
              <h4 className="text-[#1A237E] mb-3">Before: RDBMS 모델</h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="text-[#00BCD4] mb-2">Users 테이블</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>• user_id (PK)</div>
                    <div>• name</div>
                    <div>• email</div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="text-[#00BCD4] mb-2">Emails 테이블</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>• email_id (PK)</div>
                    <div>• sender_id (FK)</div>
                    <div>• subject</div>
                    <div>• body</div>
                    <div>• timestamp</div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="text-[#00BCD4] mb-2">Recipients 테이블</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>• email_id (FK)</div>
                    <div>• user_id (FK)</div>
                    <div>• type (TO/CC/BCC)</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-red-50 rounded text-xs text-red-800">
                <span>문제점:</span> 복잡한 조인, 느린 쿼리 성능, 스키마 유연성 부족
              </div>
            </div>
          </div>

          {/* After: Graph DB */}
          <div>
            <div className="bg-[#E3F2FD] p-4 rounded-lg mb-3">
              <h4 className="text-[#1A237E] mb-3">After: Graph 모델</h4>
              
              <svg viewBox="0 0 400 400" className="w-full mb-4">
                {/* User Nodes */}
                <circle cx="100" cy="80" r="35" fill="#1A237E" stroke="#00BCD4" strokeWidth="2" />
                <text x="100" y="85" textAnchor="middle" fill="white" fontSize="11">Alice</text>
                
                <circle cx="300" cy="80" r="35" fill="#1A237E" stroke="#00BCD4" strokeWidth="2" />
                <text x="300" y="85" textAnchor="middle" fill="white" fontSize="11">Bob</text>
                
                <circle cx="300" cy="200" r="35" fill="#1A237E" stroke="#00BCD4" strokeWidth="2" />
                <text x="300" y="205" textAnchor="middle" fill="white" fontSize="11">Charlie</text>
                
                {/* Email Node */}
                <rect x="160" y="140" width="80" height="60" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" rx="8" />
                <text x="200" y="165" textAnchor="middle" fill="white" fontSize="11">Email</text>
                <text x="200" y="182" textAnchor="middle" fill="white" fontSize="9">Project Update</text>
                
                {/* Relationships */}
                <defs>
                  <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#00BCD4" />
                  </marker>
                </defs>
                
                <line x1="130" y1="100" x2="170" y2="150" stroke="#00BCD4" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="135" y="120" fill="#1A237E" fontSize="9">SENT</text>
                
                <line x1="240" y1="160" x2="270" y2="100" stroke="#00BCD4" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="245" y="125" fill="#1A237E" fontSize="9">TO</text>
                
                <line x1="240" y1="180" x2="270" y2="185" stroke="#00BCD4" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="245" y="175" fill="#1A237E" fontSize="9">CC</text>
                
                {/* Labels */}
                <text x="100" y="125" textAnchor="middle" fill="#666" fontSize="8">:User</text>
                <text x="300" y="125" textAnchor="middle" fill="#666" fontSize="8">:User</text>
                <text x="300" y="245" textAnchor="middle" fill="#666" fontSize="8">:User</text>
              </svg>
              
              <div className="mt-4 p-3 bg-green-50 rounded text-xs text-green-800">
                <span>장점:</span> 직관적 모델, 빠른 탐색, 유연한 스키마 확장
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#F5F5F5] p-6 rounded-lg">
          <h4 className="text-[#1A237E] mb-3">모델링 베스트 프랙티스</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-[#00BCD4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">명사를 노드로, 동사를 관계로 변환</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-[#00BCD4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">관계는 단방향성과 타입을 명확히 정의</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-[#00BCD4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">레이블로 노드 타입을 구분</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-[#00BCD4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">필요한 속성만 노드와 관계에 추가</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 5</p>
      </div>
    </div>
  );
};
