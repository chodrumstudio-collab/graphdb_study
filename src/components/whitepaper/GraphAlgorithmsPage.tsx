import React from 'react';
import { PageProps } from '../../types/PageProps';

export const GraphAlgorithmsPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">05</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">그래프 알고리즘</h2>
            <p className="text-gray-500">Graph Algorithms</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* BFS - Breadth First Search */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 className="text-[#1A237E] mb-3">너비 우선 탐색 (BFS)</h3>
          <p className="text-sm text-gray-600 mb-4">
            레벨별로 확장하며 최단 경로를 찾는 알고리즘
          </p>
          
          <svg viewBox="0 0 300 280" className="w-full mb-4">
            {/* Central node */}
            <circle cx="150" cy="140" r="20" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
            <text x="150" y="145" textAnchor="middle" fill="white" fontSize="12">A</text>
            <text x="150" y="175" textAnchor="middle" fill="#00BCD4" fontSize="10">Level 0</text>
            
            {/* Level 1 */}
            <circle cx="90" cy="80" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="90" y="85" textAnchor="middle" fill="white" fontSize="11">B</text>
            
            <circle cx="210" cy="80" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="210" y="85" textAnchor="middle" fill="white" fontSize="11">C</text>
            
            <circle cx="90" cy="200" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="90" y="205" textAnchor="middle" fill="white" fontSize="11">D</text>
            
            <circle cx="210" cy="200" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="210" y="205" textAnchor="middle" fill="white" fontSize="11">E</text>
            
            <text x="50" y="140" textAnchor="middle" fill="#00BCD4" fontSize="10">Level 1</text>
            
            {/* Level 2 */}
            <circle cx="40" cy="50" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
            <text x="40" y="55" textAnchor="middle" fill="white" fontSize="10">F</text>
            
            <circle cx="140" cy="35" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
            <text x="140" y="40" textAnchor="middle" fill="white" fontSize="10">G</text>
            
            <circle cx="260" cy="50" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
            <text x="260" y="55" textAnchor="middle" fill="white" fontSize="10">H</text>
            
            <text x="30" y="30" textAnchor="middle" fill="#1A237E" fontSize="9" opacity="0.7">Level 2</text>
            
            {/* Edges */}
            <line x1="135" y1="125" x2="100" y2="95" stroke="#00BCD4" strokeWidth="2" />
            <line x1="165" y1="125" x2="200" y2="95" stroke="#00BCD4" strokeWidth="2" />
            <line x1="135" y1="155" x2="100" y2="185" stroke="#00BCD4" strokeWidth="2" />
            <line x1="165" y1="155" x2="200" y2="185" stroke="#00BCD4" strokeWidth="2" />
            
            <line x1="75" y1="70" x2="50" y2="60" stroke="#1A237E" strokeWidth="1.5" opacity="0.5" />
            <line x1="105" y1="70" x2="130" y2="45" stroke="#1A237E" strokeWidth="1.5" opacity="0.5" />
            <line x1="220" y1="70" x2="250" y2="60" stroke="#1A237E" strokeWidth="1.5" opacity="0.5" />
          </svg>
          
          <div className="text-sm space-y-1 text-gray-700">
            <p><span className="text-[#00BCD4]">•</span> 시간 복잡도: O(V + E)</p>
            <p><span className="text-[#00BCD4]">•</span> 활용: 최단 경로, 관계 거리</p>
          </div>
        </div>

        {/* DFS - Depth First Search */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 className="text-[#1A237E] mb-3">깊이 우선 탐색 (DFS)</h3>
          <p className="text-sm text-gray-600 mb-4">
            한 방향으로 깊게 탐색한 후 백트래킹하는 알고리즘
          </p>
          
          <svg viewBox="0 0 300 280" className="w-full mb-4">
            {/* Root */}
            <circle cx="150" cy="40" r="20" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
            <text x="150" y="45" textAnchor="middle" fill="white" fontSize="12">A</text>
            <text x="150" y="15" textAnchor="middle" fill="#00BCD4" fontSize="10">1</text>
            
            {/* Second level */}
            <circle cx="80" cy="100" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="80" y="105" textAnchor="middle" fill="white" fontSize="11">B</text>
            <text x="80" y="80" textAnchor="middle" fill="#00BCD4" fontSize="10">2</text>
            
            <circle cx="220" cy="100" r="18" fill="#1A237E" fillOpacity="0.3" stroke="#00BCD4" strokeWidth="2" />
            <text x="220" y="105" textAnchor="middle" fill="white" fontSize="11">C</text>
            <text x="220" y="80" textAnchor="middle" fill="#1A237E" fontSize="10" opacity="0.5">6</text>
            
            {/* Third level */}
            <circle cx="40" cy="160" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="40" y="165" textAnchor="middle" fill="white" fontSize="11">D</text>
            <text x="40" y="140" textAnchor="middle" fill="#00BCD4" fontSize="10">3</text>
            
            <circle cx="120" cy="160" r="18" fill="#1A237E" fillOpacity="0.3" stroke="#00BCD4" strokeWidth="2" />
            <text x="120" y="165" textAnchor="middle" fill="white" fontSize="11">E</text>
            <text x="120" y="140" textAnchor="middle" fill="#1A237E" fontSize="10" opacity="0.5">5</text>
            
            {/* Fourth level */}
            <circle cx="40" cy="220" r="16" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="40" y="225" textAnchor="middle" fill="white" fontSize="10">F</text>
            <text x="40" y="200" textAnchor="middle" fill="#00BCD4" fontSize="10">4</text>
            
            {/* Edges with arrows */}
            <defs>
              <marker id="arrowDFS" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#00BCD4" />
              </marker>
            </defs>
            
            <line x1="140" y1="55" x2="90" y2="85" stroke="#00BCD4" strokeWidth="2.5" markerEnd="url(#arrowDFS)" />
            <line x1="70" y1="115" x2="50" y2="145" stroke="#00BCD4" strokeWidth="2.5" markerEnd="url(#arrowDFS)" />
            <line x1="40" y1="178" x2="40" y2="204" stroke="#00BCD4" strokeWidth="2.5" markerEnd="url(#arrowDFS)" />
            
            <line x1="90" y1="110" x2="115" y2="145" stroke="#1A237E" strokeWidth="1.5" opacity="0.3" strokeDasharray="3,3" />
            <line x1="160" y1="55" x2="210" y2="85" stroke="#1A237E" strokeWidth="1.5" opacity="0.3" strokeDasharray="3,3" />
          </svg>
          
          <div className="text-sm space-y-1 text-gray-700">
            <p><span className="text-[#00BCD4]">•</span> 시간 복잡도: O(V + E)</p>
            <p><span className="text-[#00BCD4]">•</span> 활용: 사이클 탐지, 경로 찾기</p>
          </div>
        </div>

        {/* Dijkstra's Algorithm */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 className="text-[#1A237E] mb-3">다익스트라 알고리즘</h3>
          <p className="text-sm text-gray-600 mb-4">
            가중치가 있는 그래프에서 최단 경로를 찾는 알고리즘
          </p>
          
          <svg viewBox="0 0 300 250" className="w-full mb-4">
            {/* Nodes */}
            <circle cx="50" cy="50" r="20" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">S</text>
            
            <circle cx="150" cy="50" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="150" y="55" textAnchor="middle" fill="white" fontSize="11">A</text>
            
            <circle cx="250" cy="50" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="250" y="55" textAnchor="middle" fill="white" fontSize="11">B</text>
            
            <circle cx="100" cy="150" r="18" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
            <text x="100" y="155" textAnchor="middle" fill="white" fontSize="11">C</text>
            
            <circle cx="250" cy="150" r="20" fill="#1A237E" stroke="#00BCD4" strokeWidth="3" />
            <text x="250" y="155" textAnchor="middle" fill="white" fontSize="12">T</text>
            
            {/* Weighted Edges - Shortest Path Highlighted */}
            <line x1="65" y1="60" x2="135" y2="55" stroke="#00BCD4" strokeWidth="4" />
            <text x="100" y="50" textAnchor="middle" fill="#1A237E" fontSize="11">4</text>
            
            <line x1="168" y1="55" x2="232" y2="55" stroke="#00BCD4" strokeWidth="4" />
            <text x="200" y="45" textAnchor="middle" fill="#1A237E" fontSize="11">3</text>
            
            <line x1="250" y1="68" x2="250" y2="132" stroke="#00BCD4" strokeWidth="4" />
            <text x="265" y="100" textAnchor="middle" fill="#1A237E" fontSize="11">2</text>
            
            {/* Other Edges */}
            <line x1="60" y1="68" x2="92" y2="135" stroke="#999" strokeWidth="2" opacity="0.4" />
            <text x="65" y="110" textAnchor="middle" fill="#666" fontSize="11">6</text>
            
            <line x1="118" y1="155" x2="232" y2="155" stroke="#999" strokeWidth="2" opacity="0.4" />
            <text x="175" y="170" textAnchor="middle" fill="#666" fontSize="11">5</text>
            
            <line x1="145" y1="68" x2="105" y2="135" stroke="#999" strokeWidth="2" opacity="0.4" />
            <text x="120" y="110" textAnchor="middle" fill="#666" fontSize="11">8</text>
            
            {/* Distance labels */}
            <text x="50" y="30" textAnchor="middle" fill="#00BCD4" fontSize="10">0</text>
            <text x="150" y="30" textAnchor="middle" fill="#00BCD4" fontSize="10">4</text>
            <text x="250" y="30" textAnchor="middle" fill="#00BCD4" fontSize="10">7</text>
            <text x="250" y="185" textAnchor="middle" fill="#00BCD4" fontSize="10">9</text>
          </svg>
          
          <div className="text-sm space-y-1 text-gray-700">
            <p><span className="text-[#00BCD4]">•</span> 시간 복잡도: O((V + E) log V)</p>
            <p><span className="text-[#00BCD4]">•</span> 활용: 네비게이션, 네트워크 라우팅</p>
          </div>
        </div>

        {/* Triadic Closure */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 className="text-[#1A237E] mb-3">삼각 폐쇄 (Triadic Closure)</h3>
          <p className="text-sm text-gray-600 mb-4">
            공통 친구를 통한 관계 형성 가능성을 분석
          </p>
          
          <svg viewBox="0 0 300 250" className="w-full mb-4">
            {/* Triangle 1 - Closed */}
            <g>
              <text x="75" y="20" textAnchor="middle" fill="#00BCD4" fontSize="11">폐쇄된 삼각형</text>
              
              <circle cx="75" cy="60" r="16" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="75" y="65" textAnchor="middle" fill="white" fontSize="10">A</text>
              
              <circle cx="35" cy="120" r="16" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="35" y="125" textAnchor="middle" fill="white" fontSize="10">B</text>
              
              <circle cx="115" cy="120" r="16" fill="#00BCD4" stroke="#1A237E" strokeWidth="2" />
              <text x="115" y="125" textAnchor="middle" fill="white" fontSize="10">C</text>
              
              <line x1="70" y1="75" x2="45" y2="105" stroke="#00BCD4" strokeWidth="3" />
              <line x1="80" y1="75" x2="105" y2="105" stroke="#00BCD4" strokeWidth="3" />
              <line x1="51" y1="120" x2="99" y2="120" stroke="#00BCD4" strokeWidth="3" />
              
              <text x="75" y="150" textAnchor="middle" fill="#00BCD4" fontSize="9">강한 클러스터</text>
            </g>
            
            {/* Triangle 2 - Open */}
            <g>
              <text x="225" y="20" textAnchor="middle" fill="#1A237E" fontSize="11" opacity="0.6">열린 삼각형</text>
              
              <circle cx="225" cy="60" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
              <text x="225" y="65" textAnchor="middle" fill="white" fontSize="10">D</text>
              
              <circle cx="185" cy="120" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
              <text x="185" y="125" textAnchor="middle" fill="white" fontSize="10">E</text>
              
              <circle cx="265" cy="120" r="16" fill="#1A237E" fillOpacity="0.5" stroke="#00BCD4" strokeWidth="2" />
              <text x="265" y="125" textAnchor="middle" fill="white" fontSize="10">F</text>
              
              <line x1="220" y1="75" x2="195" y2="105" stroke="#00BCD4" strokeWidth="3" />
              <line x1="230" y1="75" x2="255" y2="105" stroke="#00BCD4" strokeWidth="3" />
              <line x1="201" y1="120" x2="249" y2="120" stroke="#00BCD4" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
              
              <text x="225" y="150" textAnchor="middle" fill="#1A237E" fontSize="9" opacity="0.6">추천 가능</text>
            </g>
            
            {/* Formula */}
            <rect x="40" y="180" width="220" height="50" fill="white" stroke="#00BCD4" strokeWidth="2" rx="6" />
            <text x="150" y="200" textAnchor="middle" fill="#1A237E" fontSize="11">삼각형 계수 (Clustering Coefficient)</text>
            <text x="150" y="218" textAnchor="middle" fill="#666" fontSize="10">
              C = (실제 삼각형 수) / (가능한 삼각형 수)
            </text>
          </svg>
          
          <div className="text-sm space-y-1 text-gray-700">
            <p><span className="text-[#00BCD4]">•</span> 커뮤니티 탐지 및 분석</p>
            <p><span className="text-[#00BCD4]">•</span> 활용: 친구 추천, 네트워크 분석</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 7</p>
      </div>
    </div>
  );
};
