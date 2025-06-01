
import React from 'react';

const IndexingSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Conference Mode Banner */}
        <div className="text-center mb-8">
          <h2 className="text-blue-600 font-bold text-xl md:text-2xl mb-2">
            DASGRI 2026 will be organised in Hybrid Mode
          </h2>
          <p className="text-blue-600 font-semibold text-lg">
            [ 10th April 2026 - Physical Mode || 11th April 2026 - Digital Mode ]
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
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/725f0c57-2f02-4866-9ce2-7744742821cf.png" 
              alt="Scopus" 
              className="h-8 w-auto"
            />
          </div>

          {/* IET Inspec */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/45cd7b2b-6ce4-440d-b9c0-a42bcd8d6302.png" 
              alt="IET Inspec" 
              className="h-8 w-auto"
            />
          </div>

          {/* WTi */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/68fb2959-c0bc-4ab9-83e7-0cfa1b75966f.png" 
              alt="WTi AG" 
              className="h-8 w-auto"
            />
          </div>

          {/* SCImago */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/f7bd7e6d-7376-4e6d-91b3-e5a8422eebde.png" 
              alt="SCImago" 
              className="h-8 w-auto"
            />
          </div>

          {/* zbMATH */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/c29561bc-5bfa-4df6-b297-2bbcf25d05ae.png" 
              alt="zbMATH" 
              className="h-8 w-auto"
            />
          </div>

          {/* Google Scholar */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/f1354bff-c8da-4917-be3b-2eedd349e955.png" 
              alt="Google Scholar" 
              className="h-12 w-auto"
            />
          </div>

          {/* ISI Proceedings */}
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/57db661f-1774-4e59-bfc8-f4ff5285fe76.png" 
              alt="ISI Proceedings" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexingSection;
