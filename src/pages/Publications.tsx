// import React from 'react';
// import Footer from '@/components/Footer';

// const Publications = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="container mx-auto px-4 py-8 flex-grow">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-3xl font-bold mb-6 font-publico">Publications</h1>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p className="mb-6">
//               All the accepted papers will be published in the proceedings of DASGRI 2027 in Springer Lecture Notes in Networks & Systems (LNNS) (Proposed) - <a href="https://link.springer.com/series/15179" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://link.springer.com/series/15179</a>
//             </p>
//             <div className="flex justify-center">
//               <img 
//                 src="/lovable-uploads/822681ae-4ba1-4184-9459-a05d77964424.png" 
//                 alt="Academic Indexing Services - Web of Science, Scopus, IET Inspec, dblp" 
//                 className="max-w-full h-auto rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Publications;

import React from "react";
import Footer from "@/components/Footer";

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="container mx-auto flex-grow px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="font-publico text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Publications
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Information regarding the publication of accepted papers from
              DASGRI 2027 will be announced soon.
            </p>
          </div>

          {/* Publication Information Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 md:p-10">
              <div className="flex flex-col items-center text-center">
                {/* Status Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A2.625 2.625 0 0 1 12 5.625v-1.5A3.375 3.375 0 0 0 8.625.75H6.75A3.375 3.375 0 0 0 3.375 4.125v15.75A3.375 3.375 0 0 0 6.75 23.25h10.5a3.375 3.375 0 0 0 3.375-3.375v-2.625"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75h5.25m-5.25 3h5.25m-5.25 3h3"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900">
                  Publication Details
                </h2>

                {/* Status */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Publication details will be updated soon
                </div>
              </div>
  
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Please check this page periodically for the latest publication
            updates.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;
