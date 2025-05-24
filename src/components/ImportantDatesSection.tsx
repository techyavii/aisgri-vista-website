
import React from 'react';
import { Calendar } from 'lucide-react';

const ImportantDatesSection: React.FC = () => {
  const importantDates = [
    { title: "Paper Submission Deadline", date: "30th September 2025" },
    { title: "Acceptance Notification Due", date: "30th November 2025" },
    { title: "Registration Due", date: "30th December 2025" },
    { title: "Camera Ready Submission", date: "30th January 2026" },
    { title: "Conference Dates", date: "10th – 11th April 2026" }
  ];

  return (
    <section id="important-dates" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
          Important Dates
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-goldsmiths-blue mr-2" />
                  <h3 className="font-graphik font-bold text-goldsmiths-text text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="font-publico text-goldsmiths-text bg-goldsmiths-beige px-3 py-2 rounded text-center">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;
