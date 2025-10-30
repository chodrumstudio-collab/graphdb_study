import React from 'react';
import { PageProps } from '../../types/PageProps';

export const QueryLanguagesPage: React.FC<PageProps> = ({ onNavigateToPage }) => {
  return (
    <div className="h-full bg-white p-16 relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
            <span className="text-white">04</span>
          </div>
          <div>
            <h2 className="text-[#1A237E] text-3xl">쿼리 언어</h2>
            <p className="text-gray-500">Query Languages</p>
          </div>
        </div>
        <div className="w-20 h-1 bg-[#00BCD4]"></div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Cypher */}
          <div>
            <h3 className="text-[#1A237E] text-xl mb-4">Cypher</h3>
            <p className="text-sm text-gray-600 mb-4">
              Neo4j에서 개발한 선언적 그래프 쿼리 언어입니다.
            </p>
            <div className="bg-[#1A237E] p-4 rounded-lg">
              <pre className="text-white text-xs">
{`MATCH (p:Person {name: "Alice"})
-[:KNOWS]->(friend)
RETURN friend.name`}
              </pre>
            </div>
          </div>

          {/* Gremlin */}
          <div>
            <h3 className="text-[#1A237E] text-xl mb-4">Gremlin</h3>
            <p className="text-sm text-gray-600 mb-4">
              Apache TinkerPop의 그래프 트래버설 언어입니다.
            </p>
            <div className="bg-[#1A237E] p-4 rounded-lg">
              <pre className="text-white text-xs">
{`g.V().has('name', 'Alice')
  .out('knows')
  .values('name')`}
              </pre>
            </div>
          </div>
        </div>

        {/* Additional content for scrolling test */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-[#1A237E] text-lg font-semibold mb-4">성능 최적화 팁</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 인덱스를 적절히 활용하여 쿼리 성능 향상</li>
              <li>• 복잡한 쿼리는 단계별로 분해하여 실행</li>
              <li>• EXPLAIN을 사용하여 쿼리 실행 계획 분석</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-[#1A237E] text-lg font-semibold mb-4">실제 사용 예시</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              <div>// 친구의 친구 찾기</div>
              <div>MATCH (p:Person)-[:FRIEND]-(friend)-[:FRIEND]-(fof)</div>
              <div>WHERE p.name = "Alice"</div>
              <div>RETURN fof.name</div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-[#1A237E] text-lg font-semibold mb-4">주의사항</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 너무 복잡한 쿼리는 성능에 영향을 줄 수 있습니다</li>
              <li>• 적절한 LIMIT을 사용하여 결과를 제한하세요</li>
              <li>• 정기적으로 쿼리 성능을 모니터링하세요</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right text-gray-400">
        <p>Page 6</p>
      </div>
    </div>
  );
};