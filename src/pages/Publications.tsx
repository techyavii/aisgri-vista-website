
import React from 'react';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Publications</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              All the accepted papers will be published in the proceedings of ICCTRDA 2025 by 
              Springer (Proposed) indexed in reputed databases like Scopus, EI, WoS and many more.
            </p>
            <p>
              The associated journal will consider high-quality extended papers for publication.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
