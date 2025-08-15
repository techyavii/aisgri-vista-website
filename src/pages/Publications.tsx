import React from 'react';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-goldsmiths-blue font-publico">Publications</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-goldsmiths-blue">Conference Proceedings</h2>
                <p className="text-lg mb-4 text-gray-700">
                  All the accepted papers will be published in the proceedings of DASGRI 2026.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  The associated journal will consider high-quality extended papers for publication.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-goldsmiths-blue">Indexing and Databases</h3>
                <p className="text-gray-600 mb-6">
                  Our proceedings are indexed in major academic databases ensuring maximum visibility and impact for your research.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/1aa13591-33cc-4f0c-8a48-2ac822c11bdc.png" 
                    alt="Academic Indexing Services - Web of Science, Scopus, IET Inspec, dblp" 
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;