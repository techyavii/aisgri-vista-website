
import React from 'react';

const IndexingSection: React.FC = () => {
  return (
    <section className="py-12 bg-goldsmiths-yellow">
      <div className="container mx-auto px-4">
        {/* Conference Mode Banner */}
        <div className="text-center mb-8">
          <h2 className="text-red-600 font-bold text-xl md:text-2xl mb-2">
            DASGRI 2026 will be organised in Physical Mode
          </h2>
          <p className="text-red-600 font-semibold text-lg">
            [ 10th April 2026 - Physical Mode || 11th April 2026 - Physical Mode ]
          </p>
        </div>

        {/* Publication Info */}
        <div className="text-center mb-8">
          <h3 className="text-gray-700 font-bold text-lg md:text-xl uppercase tracking-wide">
            All accepted papers will be published in Scopus proceeding, SCI journals and Scopus journals.
          </h3>
        </div>

        {/* Indexing Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <div className="text-gray-700 font-bold text-lg">
            INDEXING**
          </div>
          
          {/* Scopus Logo */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-orange-500 font-bold text-xl">Scopus</span>
            <span className="text-gray-600 text-sm">*</span>
          </div>

          {/* IET Inspec */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-purple-600 font-semibold">IET</span>
            <span className="text-purple-400 font-light">Inspec</span>
          </div>

          {/* WTi */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-gray-700 font-bold">WTi</span>
          </div>

          {/* EI */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-blue-600 font-bold text-xl">ei</span>
            <span className="text-gray-600 text-sm">.</span>
          </div>

          {/* SCImago */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-gray-600 font-semibold">SCImago</span>
          </div>

          {/* zbMATH */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-blue-500 font-bold">zbMATH</span>
            <span className="text-blue-300">■</span>
          </div>

          {/* Google Scholar */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-blue-500 font-bold">Google</span>
            <span className="text-red-500 font-bold">Scholar</span>
          </div>

          {/* ISI Proceedings */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">ISI</span>
            </div>
            <span className="text-xs text-gray-600 ml-1">PROCEEDINGS</span>
          </div>

          {/* Springer */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm">
            <span className="text-gray-700 font-bold">🐎 Springer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexingSection;
