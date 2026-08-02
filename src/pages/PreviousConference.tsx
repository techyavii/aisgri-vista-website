import React from 'react';
import Footer from '@/components/Footer';

const PreviousConference: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-4">Previous Conference</h1>
          <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-blue mb-6">DASGRI 2026</h2>

          <p className="font-graphik text-lg leading-relaxed text-gray-700 mb-6">
            International Conference on Data Science and AI for Social Good and Responsible Innovation (DASGRI-2026) was held on 10th-11th April 2026 at School of Computing, Goldsmiths, University of London, UK. This conference was able to attract a diverse range of engineering practitioners, academicians, scholars and industry delegates, with the reception of 750 papers from different parts of the world. Only 115 papers have been accepted and registered with an acceptance ratio of 15% to be published in the two volume of prestigious Springer Lecture Notes on Networks & Systems (LNNS) series.
          </p>

          <div className="bg-goldsmiths-beige border border-goldsmiths-blue/20 rounded-lg p-6">
            <h3 className="font-druk text-xl text-[#001324] mb-4">DASGRI 2026 Proceedings</h3>
            <ul className="space-y-3 font-graphik text-lg text-gray-700">
              <li>
                <strong>Volume 1:</strong>{' '}
                <a
                  href="https://link.springer.com/book/9789819242054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://link.springer.com/book/9789819242054
                </a>
              </li>
              <li>
                <strong>Volume 2:</strong>{' '}
                <a
                  href="https://link.springer.com/book/9789819242092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://link.springer.com/book/9789819242092
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreviousConference;
