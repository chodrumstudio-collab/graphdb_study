import React from 'react';
import { PageProps } from '../../types/PageProps';

export const ArchitecturePage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">06</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">아키텍처</h2>
            <p className="text-gray-500">Architecture</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      {/* Native vs Non-Native */}
      <div className="mb-8">
        <h3 className="text-[#1A237E] text-xl mb-4">Native vs Non-Native Graph Database</h3>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Native */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00BCD4] rounded flex items-center justify-center">
                <span className="text-white text-xs">N</span>
              </div>
              <h4 className="text-[#1A237E]">Native Graph DB</h4>
            </div>
            
            <svg viewBox="0 0 300 200" className="w-full mb-4">
              <rect x="20" y="20" width="260" height="160" fill="white" stroke="#00BCD4" strokeWidth="2" rx="8" />
              
              <text x="150" y="45" textAnchor="middle" fill="#1A237E" fontSize="12">Graph Storage Engine</text>
              
              {/* Direct pointer representation */}
              <circle cx="80" cy="100" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="80" y="105" textAnchor="middle" fill="white" fontSize="10">A</text>
              
              <circle cx="150" cy="100" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="150" y="105" textAnchor="middle" fill="white" fontSize="10">B</text>
              
              <circle cx="220" cy="100" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="220" y="105" textAnchor="middle" fill="white" fontSize="10">C</text>
              
              <line x1="98" y1="100" x2="132" y2="100" stroke="#1A237E" strokeWidth="3" markerEnd="url(#arrow-native)" />
              <line x1="168" y1="100" x2="202" y2="100" stroke="#1A237E" strokeWidth="3" markerEnd="url(#arrow-native)" />
              
              <text x="115" y="90" textAnchor="middle" fill="#00BCD4" fontSize="8">직접 포인터</text>
              <text x="185" y="90" textAnchor="middle" fill="#00BCD4" fontSize="8">직접 포인터</text>
              
              <text x="150" y="150" textAnchor="middle" fill="#666" fontSize="10">Index-Free Adjacency</text>
              
              <defs>
                <marker id="arrow-native" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#1A237E" />
                </marker>
              </defs>
            </svg>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#00BCD4]">✓</span>
                <p className="text-gray-700">O(1) 탐색 성능</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00BCD4]">✓</span>
                <p className="text-gray-700">일관된 쿼리 속도</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00BCD4]">✓</span>
                <p className="text-gray-700">예: Neo4j, TigerGraph</p>
              </div>
            </div>
          </div>

          {/* Non-Native */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1A237E] rounded flex items-center justify-center">
                <span className="text-white text-xs">NN</span>
              </div>
              <h4 className="text-[#1A237E]">Non-Native Graph DB</h4>
            </div>
            
            <svg viewBox="0 0 300 200" className="w-full mb-4">
              <rect x="20" y="20" width="260" height="160" fill="white" stroke="#666" strokeWidth="2" rx="8" />
              
              <text x="150" y="45" textAnchor="middle" fill="#1A237E" fontSize="12">Relational/NoSQL Storage</text>
              
              {/* Index-based representation */}
              <rect x="50" y="70" width="60" height="30" fill="#1A237E" fillOpacity="0.3" stroke="#666" strokeWidth="1" rx="4" />
              <text x="80" y="90" textAnchor="middle" fill="#1A237E" fontSize="10">Index</text>
              
              <circle cx="80" cy="130" r="18" fill="#666" stroke="#1A237E" strokeWidth="2" />
              <text x="80" y="135" textAnchor="middle" fill="white" fontSize="10">A</text>
              
              <rect x="135" y="70" width="60" height="30" fill="#1A237E" fillOpacity="0.3" stroke="#666" strokeWidth="1" rx="4" />
              <text x="165" y="90" textAnchor="middle" fill="#1A237E" fontSize="10">Index</text>
              
              <circle cx="165" cy="130" r="18" fill="#666" stroke="#1A237E" strokeWidth="2" />
              <text x="165" y="135" textAnchor="middle" fill="white" fontSize="10">B</text>
              
              <rect x="220" y="70" width="60" height="30" fill="#1A237E" fillOpacity="0.3" stroke="#666" strokeWidth="1" rx="4" />
              <text x="250" y="90" textAnchor="middle" fill="#1A237E" fontSize="10">Index</text>
              
              <circle cx="250" cy="130" r="18" fill="#666" stroke="#1A237E" strokeWidth="2" />
              <text x="250" y="135" textAnchor="middle" fill="white" fontSize="10">C</text>
              
              <line x1="80" y1="100" x2="80" y2="112" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="165" y1="100" x2="165" y2="112" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="250" y1="100" x2="250" y2="112" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />
              
              <text x="150" y="165" textAnchor="middle" fill="#666" fontSize="10">인덱스 룩업 필요</text>
            </svg>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <p className="text-gray-700">O(log n) 탐색 성능</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <p className="text-gray-700">깊이에 따라 성능 저하</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <p className="text-gray-700">예: JanusGraph, OrientDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Index-Free Adjacency */}
      <div className="mb-8 bg-[#F5F5F5] p-6 rounded-lg">
        <h3 className="text-[#1A237E] mb-3">Index-Free Adjacency 개념</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-700 mb-3">
              각 노드가 인접 노드에 대한 직접 포인터를 유지하여, 인덱스 조회 없이 
              관계를 즉시 탐색할 수 있습니다. 이는 그래프 데이터베이스의 핵심 성능 
              차별화 요소입니다.
            </p>
            <div className="bg-white p-4 rounded border border-[#00BCD4]">
              <code className="text-xs text-[#1A237E]">
                Node A → [직접 포인터] → Node B<br/>
                탐색 시간: O(1) 상수 시간
              </code>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 300 150" className="w-full">
              <text x="150" y="20" textAnchor="middle" fill="#1A237E" fontSize="11">성능 비교</text>
              
              <rect x="40" y="40" width="220" height="30" fill="#00BCD4" fillOpacity="0.2" stroke="#00BCD4" strokeWidth="2" rx="4" />
              <text x="50" y="60" fill="#1A237E" fontSize="10">Native (Index-Free)</text>
              <rect x="40" y="40" width="200" height="30" fill="#00BCD4" rx="4" />
              <text x="245" y="60" textAnchor="end" fill="#1A237E" fontSize="10">1x</text>
              
              <rect x="40" y="85" width="220" height="30" fill="#1A237E" fillOpacity="0.2" stroke="#666" strokeWidth="2" rx="4" />
              <text x="50" y="105" fill="#1A237E" fontSize="10">Non-Native (Index)</text>
              <rect x="40" y="85" width="60" height="30" fill="#666" rx="4" />
              <text x="245" y="105" textAnchor="end" fill="#666" fontSize="10">10-100x slower</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ACID vs BASE */}
      <div>
        <h3 className="text-[#1A237E] text-xl mb-4">트랜잭션 모델: ACID vs BASE</h3>
        
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A237E] text-white">
                <th className="p-3 text-left">특성</th>
                <th className="p-3 text-left">ACID</th>
                <th className="p-3 text-left">BASE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 bg-[#F5F5F5]">정의</td>
                <td className="p-3">
                  <div className="space-y-1 text-xs">
                    <div><span className="text-[#00BCD4]">A</span>tomicity: 원자성</div>
                    <div><span className="text-[#00BCD4]">C</span>onsistency: 일관성</div>
                    <div><span className="text-[#00BCD4]">I</span>solation: 격리성</div>
                    <div><span className="text-[#00BCD4]">D</span>urability: 지속성</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="space-y-1 text-xs">
                    <div><span className="text-[#1A237E]">B</span>asically Available: 기본 가용성</div>
                    <div><span className="text-[#1A237E]">S</span>oft state: 유연한 상태</div>
                    <div><span className="text-[#1A237E]">E</span>ventual consistency: 최종 일관성</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 bg-[#F5F5F5]">일관성</td>
                <td className="p-3 text-[#00BCD4]">강한 일관성 (Strong)</td>
                <td className="p-3">최종 일관성 (Eventual)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 bg-[#F5F5F5]">가용성</td>
                <td className="p-3">중간</td>
                <td className="p-3 text-[#1A237E]">높음</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 bg-[#F5F5F5]">확장성</td>
                <td className="p-3">수직 확장 중심</td>
                <td className="p-3 text-[#1A237E]">수평 확장 용이</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 bg-[#F5F5F5]">사용 사례</td>
                <td className="p-3 text-[#00BCD4]">금융 거래, 중요 데이터</td>
                <td className="p-3">소셜 네트워크, 추천 시스템</td>
              </tr>
              <tr>
                <td className="p-3 bg-[#F5F5F5]">대표 DB</td>
                <td className="p-3">Neo4j, TigerGraph</td>
                <td className="p-3">JanusGraph (Cassandra)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 8</p>
      </div>
    </div>
  );
};
