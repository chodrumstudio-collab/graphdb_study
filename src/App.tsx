import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { CoverPage } from './components/whitepaper/CoverPage';
import { TableOfContents } from './components/whitepaper/TableOfContents';
import { IntroductionPage } from './components/whitepaper/IntroductionPage';
import { CoreConceptsPage } from './components/whitepaper/CoreConceptsPage';
import { DataModelingPage } from './components/whitepaper/DataModelingPage';
import { QueryLanguagesPage } from './components/whitepaper/QueryLanguagesPage';
import { GraphAlgorithmsPage } from './components/whitepaper/GraphAlgorithmsPage';
import { ArchitecturePage } from './components/whitepaper/ArchitecturePage';
import { UseCasesPage } from './components/whitepaper/UseCasesPage';
import { ConclusionPage } from './components/whitepaper/ConclusionPage';

const pages = [
  { id: 0, component: CoverPage, title: 'Cover' },
  { id: 1, component: TableOfContents, title: 'Table of Contents' },
  { id: 2, component: IntroductionPage, title: 'Introduction' },
  { id: 3, component: CoreConceptsPage, title: 'Core Concepts' },
  { id: 4, component: DataModelingPage, title: 'Data Modeling' },
  { id: 5, component: QueryLanguagesPage, title: 'Query Languages' },
  { id: 6, component: GraphAlgorithmsPage, title: 'Graph Algorithms' },
  { id: 7, component: ArchitecturePage, title: 'Architecture' },
  { id: 8, component: UseCasesPage, title: 'Use Cases' },
  { id: 9, component: ConclusionPage, title: 'Conclusion' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showThumbnails) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPreviousPage();
      } else if (e.key === 'Home') {
        setCurrentPage(0);
      } else if (e.key === 'End') {
        setCurrentPage(pages.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, showThumbnails]);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setShowThumbnails(false);
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-[#1A237E] text-white px-6 py-3 flex items-center justify-between shadow-lg">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => goToPage(0)}
        >
          <FileText className="w-6 h-6 text-[#00BCD4]" />
          <div>
            <h1 className="text-lg">그래프 데이터베이스 기술 백서</h1>
            <p className="text-xs text-gray-300">Graph Database Technology Whitepaper</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => goToPage(1)}
            className="px-4 py-2 bg-white text-[#1A237E] rounded hover:bg-gray-100 transition-colors font-medium"
          >
            목차보기
          </button>
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="px-4 py-2 bg-[#00BCD4] text-white rounded hover:bg-[#00ACC1] transition-colors"
          >
            {showThumbnails ? 'Hide Pages' : 'View All Pages'}
          </button>
          <div className="text-sm">
            Page {currentPage + 1} of {pages.length}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {showThumbnails ? (
          /* Thumbnail Grid View */
          <div className="grid grid-cols-5 gap-6 max-w-7xl w-full overflow-y-auto max-h-full">
            {pages.map((page, index) => {
              const ThumbnailComponent = page.component;
              return (
                <div
                  key={page.id}
                  onClick={() => goToPage(index)}
                  className={`cursor-pointer transform transition-all hover:scale-105 ${
                    currentPage === index ? 'ring-4 ring-[#00BCD4]' : ''
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden aspect-[8.5/11]">
                    <div className="w-full h-full scale-[0.15] origin-top-left" style={{ width: '666%', height: '666%' }}>
                      <ThumbnailComponent />
                    </div>
                  </div>
                  <div className="mt-2 text-center text-white text-xs">
                    <div className="text-[#00BCD4]">Page {index + 1}</div>
                    <div>{page.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Single Page View */
          <>
            {/* Navigation Arrows */}
            {currentPage > 0 && (
              <button
                onClick={goToPreviousPage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1A237E] text-white rounded-full flex items-center justify-center hover:bg-[#00BCD4] transition-colors shadow-lg z-10"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentPage < pages.length - 1 && (
              <button
                onClick={goToNextPage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1A237E] text-white rounded-full flex items-center justify-center hover:bg-[#00BCD4] transition-colors shadow-lg z-10"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Page Display */}
            <div className="bg-white rounded-lg shadow-2xl overflow-y-auto" style={{ width: '816px', height: '1056px' }}>
              <CurrentPageComponent onNavigateToPage={goToPage} />
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      {!showThumbnails && (
        <div className="bg-[#1A237E] text-white px-6 py-3">
          <div className="flex items-center justify-center gap-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? 'bg-[#00BCD4] w-8'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
