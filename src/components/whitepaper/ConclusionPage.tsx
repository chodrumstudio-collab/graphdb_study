import React from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';
import { PageProps } from '../../types/PageProps';

export const ConclusionPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">08</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">결론</h2>
            <p className="text-gray-500">Conclusion</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      <div className="max-w-4xl mb-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          그래프 데이터베이스는 단순히 새로운 데이터 저장 기술이 아닙니다. 연결된 데이터의 가치를 
          발견하고 활용하는 패러다임의 전환입니다. 관계형 데이터베이스로는 해결하기 어려웠던 
          복잡한 관계 분석과 실시간 패턴 인식이 가능해졌습니다.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          AI와 머신러닝의 발전과 함께 그래프 데이터베이스의 중요성은 더욱 커지고 있습니다. 
          특히 대규모 언어 모델(LLM)과의 통합을 통해 새로운 가능성이 열리고 있습니다.
        </p>
      </div>

      {/* Future Vision: Graph DB + RAG + LLM */}
      <div className="mb-8">
        <h3 className="text-[#1A237E] text-xl mb-6">미래 비전: Graph DB + RAG + LLM</h3>
        
        <div className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] p-8 rounded-lg">
          <svg viewBox="0 0 900 300" className="w-full">
            {/* Graph Database */}
            <g>
              <rect x="20" y="80" width="200" height="140" fill="white" stroke="#00BCD4" strokeWidth="3" rx="12" />
              <text x="120" y="110" textAnchor="middle" fill="#1A237E" fontSize="16">Graph Database</text>
              
              <circle cx="80" cy="150" r="12" fill="#00BCD4" />
              <circle cx="120" cy="150" r="12" fill="#00BCD4" />
              <circle cx="160" cy="150" r="12" fill="#00BCD4" />
              <circle cx="100" cy="185" r="12" fill="#00BCD4" />
              <circle cx="140" cy="185" r="12" fill="#00BCD4" />
              
              <line x1="92" y1="150" x2="108" y2="150" stroke="#1A237E" strokeWidth="2" />
              <line x1="132" y1="150" x2="148" y2="150" stroke="#1A237E" strokeWidth="2" />
              <line x1="85" y1="160" x2="95" y2="175" stroke="#1A237E" strokeWidth="2" />
              <line x1="125" y1="160" x2="135" y2="175" stroke="#1A237E" strokeWidth="2" />
            </g>

            {/* Arrow 1 */}
            <defs>
              <marker id="arrowConc" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="white" />
              </marker>
            </defs>
            <line x1="220" y1="150" x2="280" y2="150" stroke="white" strokeWidth="4" markerEnd="url(#arrowConc)" />
            <text x="250" y="140" textAnchor="middle" fill="white" fontSize="12">맥락 제공</text>

            {/* RAG System */}
            <g>
              <rect x="280" y="80" width="200" height="140" fill="white" stroke="#00BCD4" strokeWidth="3" rx="12" />
              <text x="380" y="110" textAnchor="middle" fill="#1A237E" fontSize="16">RAG System</text>
              <text x="380" y="130" textAnchor="middle" fill="#666" fontSize="11">(Retrieval-Augmented</text>
              <text x="380" y="145" textAnchor="middle" fill="#666" fontSize="11">Generation)</text>
              
              <rect x="310" y="160" width="140" height="20" fill="#00BCD4" fillOpacity="0.2" stroke="#00BCD4" strokeWidth="1" rx="4" />
              <text x="380" y="174" textAnchor="middle" fill="#1A237E" fontSize="10">검색 증강</text>
              
              <rect x="310" y="185" width="140" height="20" fill="#00BCD4" fillOpacity="0.2" stroke="#00BCD4" strokeWidth="1" rx="4" />
              <text x="380" y="199" textAnchor="middle" fill="#1A237E" fontSize="10">컨텍스트 구성</text>
            </g>

            {/* Arrow 2 */}
            <line x1="480" y1="150" x2="540" y2="150" stroke="white" strokeWidth="4" markerEnd="url(#arrowConc)" />
            <text x="510" y="140" textAnchor="middle" fill="white" fontSize="12">강화된 프롬프트</text>

            {/* LLM */}
            <g>
              <rect x="540" y="80" width="200" height="140" fill="white" stroke="#00BCD4" strokeWidth="3" rx="12" />
              <text x="640" y="110" textAnchor="middle" fill="#1A237E" fontSize="16">Large Language</text>
              <text x="640" y="128" textAnchor="middle" fill="#1A237E" fontSize="16">Model (LLM)</text>
              
              <circle cx="640" cy="165" r="30" fill="#1A237E" fillOpacity="0.1" stroke="#00BCD4" strokeWidth="2" />
              <text x="640" y="172" textAnchor="middle" fill="#1A237E" fontSize="20">AI</text>
              
              <text x="640" y="205" textAnchor="middle" fill="#666" fontSize="10">지능형 응답 생성</text>
            </g>

            {/* Arrow 3 */}
            <line x1="740" y1="150" x2="800" y2="150" stroke="white" strokeWidth="4" markerEnd="url(#arrowConc)" />
            <text x="770" y="140" textAnchor="middle" fill="white" fontSize="12">정확한 답변</text>

            {/* Output */}
            <g>
              <rect x="800" y="120" width="80" height="60" fill="white" stroke="#00BCD4" strokeWidth="3" rx="8" />
              <text x="840" y="142" textAnchor="middle" fill="#1A237E" fontSize="11">사용자</text>
              <text x="840" y="160" textAnchor="middle" fill="#00BCD4" fontSize="11">인사이트</text>
            </g>

            {/* Benefits */}
            <text x="450" y="260" textAnchor="middle" fill="white" fontSize="13">✓ 정확도 향상  ✓ 환각(Hallucination) 감소  ✓ 실시간 지식 업데이트</text>
          </svg>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-[#1A237E] mb-2">성장 잠재력</h4>
          <p className="text-sm text-gray-700">
            그래프 데이터베이스 시장은 연평균 24% 성장하며 2028년까지 57억 달러 규모로 예상됩니다.
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-[#00BCD4]" />
          </div>
          <h4 className="text-[#1A237E] mb-2">즉시 적용 가능</h4>
          <p className="text-sm text-gray-700">
            클라우드 기반 서비스와 오픈소스 솔루션으로 진입 장벽이 낮아져 즉시 시작할 수 있습니다.
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-[#1A237E] mb-2">비즈니스 가치</h4>
          <p className="text-sm text-gray-700">
            관계 분석을 통해 새로운 인사이트를 발견하고 경쟁 우위를 확보할 수 있습니다.
          </p>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-[#1A237E] text-white p-8 rounded-lg">
        <h3 className="text-[#00BCD4] text-xl mb-4">다음 단계</h3>
        <p className="leading-relaxed mb-4">
          그래프 데이터베이스는 데이터의 연결성을 활용하여 비즈니스 문제를 해결하는 강력한 도구입니다. 
          조직의 데이터 전략에 그래프 기술을 통합하여 연결된 데이터의 진정한 가치를 발견하세요.
        </p>
        <div className="flex gap-4 text-sm">
          <div className="flex-1 bg-white/10 p-4 rounded">
            <p className="text-[#00BCD4] mb-1">1. 평가</p>
            <p className="text-sm">현재 데이터 관계 복잡도 분석</p>
          </div>
          <div className="flex-1 bg-white/10 p-4 rounded">
            <p className="text-[#00BCD4] mb-1">2. 파일럿</p>
            <p className="text-sm">소규모 프로젝트로 시작</p>
          </div>
          <div className="flex-1 bg-white/10 p-4 rounded">
            <p className="text-[#00BCD4] mb-1">3. 확장</p>
            <p className="text-sm">성공 사례 기반 전사 확대</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 10</p>
      </div>
    </div>
  );
};
