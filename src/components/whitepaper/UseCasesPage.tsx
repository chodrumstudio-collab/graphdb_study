import React from 'react';
import { Shield, Heart, Users, Brain, Server } from 'lucide-react';
import { PageProps } from '../../types/PageProps';

export const UseCasesPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  const useCases = [
    {
      icon: Shield,
      title: '사기 탐지',
      subtitle: 'Fraud Detection',
      description: '복잡한 거래 패턴과 관계를 실시간으로 분석하여 사기 행위를 조기에 발견합니다.',
      benefits: ['실시간 패턴 인식', '링 탐지', '이상 거래 식별'],
      example: '금융기관: 카드 사기 탐지율 85% 향상',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      icon: Heart,
      title: '추천 시스템',
      subtitle: 'Recommendation Systems',
      description: '사용자 행동과 선호도 관계를 분석하여 개인화된 추천을 제공합니다.',
      benefits: ['협업 필터링', '실시간 추천', '다차원 분석'],
      example: '이커머스: 클릭률 40% 증가',
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      icon: Users,
      title: '소셜 네트워크',
      subtitle: 'Social Networks',
      description: '사용자 간 관계와 커뮤니티를 효율적으로 관리하고 분석합니다.',
      benefits: ['친구 추천', '영향력 분석', '커뮤니티 탐지'],
      example: 'SNS 플랫폼: 쿼리 성능 1000x 향상',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: Brain,
      title: '지식 그래프',
      subtitle: 'Knowledge Graphs',
      description: '개념과 개체 간의 관계를 구조화하여 지능적인 검색과 추론을 가능하게 합니다.',
      benefits: ['의미론적 검색', '추론 엔진', 'AI 통합'],
      example: '검색엔진: 검색 정확도 60% 향상',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      icon: Server,
      title: 'IT 운영 관리',
      subtitle: 'IT Operations',
      description: 'IT 인프라의 복잡한 의존성과 영향 범위를 시각화하고 관리합니다.',
      benefits: ['영향도 분석', '장애 추적', '자원 최적화'],
      example: '대기업: 장애 해결 시간 70% 단축',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">07</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">사용 사례</h2>
            <p className="text-gray-500">Use Cases</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      <p className="text-gray-700 mb-8 max-w-4xl">
        그래프 데이터베이스는 다양한 산업 분야에서 연결된 데이터의 가치를 극대화하고 있습니다. 
        실제 비즈니스 사례를 통해 그래프 기술의 실용성을 확인하세요.
      </p>

      {/* Use Case Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {useCases.slice(0, 4).map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <div 
              key={index}
              className={`${useCase.color} border-2 p-6 rounded-lg hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-6 h-6 ${useCase.iconColor}`} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-[#1A237E] text-lg mb-1">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.subtitle}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{useCase.description}</p>
              
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2">주요 기능:</div>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/60 p-3 rounded border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">실제 성과</div>
                <p className="text-sm text-[#1A237E]">{useCase.example}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Last use case - full width */}
      <div className={`${useCases[4].color} border-2 p-6 rounded-lg hover:shadow-lg transition-shadow mb-8`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Server className={`w-6 h-6 ${useCases[4].iconColor}`} />
          </div>
          <div className="flex-grow">
            <h3 className="text-[#1A237E] text-lg mb-1">{useCases[4].title}</h3>
            <p className="text-sm text-gray-600">{useCases[4].subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-700 mb-4">{useCases[4].description}</p>
            <div className="mb-4">
              <div className="text-xs text-gray-600 mb-2">주요 기능:</div>
              <div className="flex flex-wrap gap-2">
                {useCases[4].benefits.map((benefit, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <svg viewBox="0 0 300 150" className="w-full">
              <text x="150" y="20" textAnchor="middle" fill="#1A237E" fontSize="11">IT 인프라 의존성 맵</text>
              
              {/* Server nodes */}
              <rect x="130" y="40" width="40" height="30" fill="#10B981" stroke="#059669" strokeWidth="2" rx="4" />
              <text x="150" y="60" textAnchor="middle" fill="white" fontSize="9">Web</text>
              
              <rect x="50" y="90" width="40" height="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" rx="4" />
              <text x="70" y="110" textAnchor="middle" fill="white" fontSize="9">App1</text>
              
              <rect x="130" y="90" width="40" height="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" rx="4" />
              <text x="150" y="110" textAnchor="middle" fill="white" fontSize="9">App2</text>
              
              <rect x="210" y="90" width="40" height="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" rx="4" />
              <text x="230" y="110" textAnchor="middle" fill="white" fontSize="9">API</text>
              
              <rect x="90" y="135" width="40" height="30" fill="#EF4444" stroke="#DC2626" strokeWidth="2" rx="4" />
              <text x="110" y="155" textAnchor="middle" fill="white" fontSize="9">DB1</text>
              
              <rect x="170" y="135" width="40" height="30" fill="#EF4444" stroke="#DC2626" strokeWidth="2" rx="4" />
              <text x="190" y="155" textAnchor="middle" fill="white" fontSize="9">DB2</text>
              
              {/* Dependencies */}
              <line x1="145" y1="70" x2="75" y2="90" stroke="#00BCD4" strokeWidth="2" />
              <line x1="150" y1="70" x2="150" y2="90" stroke="#00BCD4" strokeWidth="2" />
              <line x1="155" y1="70" x2="225" y2="90" stroke="#00BCD4" strokeWidth="2" />
              <line x1="70" y1="120" x2="105" y2="135" stroke="#00BCD4" strokeWidth="2" />
              <line x1="150" y1="120" x2="115" y2="135" stroke="#00BCD4" strokeWidth="2" />
              <line x1="230" y1="120" x2="195" y2="135" stroke="#00BCD4" strokeWidth="2" />
            </svg>
            
            <div className="bg-white/60 p-3 rounded border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">실제 성과</div>
              <p className="text-sm text-[#1A237E]">{useCases[4].example}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Adoption */}
      <div className="bg-[#F5F5F5] p-6 rounded-lg">
        <h3 className="text-[#1A237E] mb-4">산업별 도입 현황</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-4 rounded text-center">
            <div className="text-2xl text-[#00BCD4] mb-1">78%</div>
            <p className="text-gray-600">금융 서비스</p>
          </div>
          <div className="bg-white p-4 rounded text-center">
            <div className="text-2xl text-[#00BCD4] mb-1">65%</div>
            <p className="text-gray-600">소매/이커머스</p>
          </div>
          <div className="bg-white p-4 rounded text-center">
            <div className="text-2xl text-[#00BCD4] mb-1">52%</div>
            <p className="text-gray-600">헬스케어</p>
          </div>
          <div className="bg-white p-4 rounded text-center">
            <div className="text-2xl text-[#00BCD4] mb-1">71%</div>
            <p className="text-gray-600">통신/IT</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 9</p>
      </div>
    </div>
  );
};
