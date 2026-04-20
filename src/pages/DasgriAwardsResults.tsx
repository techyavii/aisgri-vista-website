import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface AwardWinner {
  name: string;
  category: string;
  subAward: string;
}

const DasgriAwardsResults: React.FC = () => {
  const awardWinners: AwardWinner[] = [
    {
      name: 'Milan Parikh',
      category: 'Academia–Industry Synergy Awards',
      subAward: 'Global Industry Engagement Award'
    },
    {
      name: 'SACHIN SINGH',
      category: 'Academic Excellence & Leadership Awards',
      subAward: 'Institutional Leadership Excellence Award (Principal / Director)'
    },
    {
      name: 'Ankur R. Tiwari',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Explainable AI (XAI) Innovation Award'
    },
    {
      name: 'Datta Snehith Dupakuntla Naga',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI-Powered Automation Excellence Award'
    },
    {
      name: 'Divija Vijaya Ganiga',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Jeevan reddy Geereddy',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Mallesh Deshapaga',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Generative AI Innovation Award'
    },
    {
      name: 'Prajkta Waditwar',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI Innovation Leadership Award'
    },
    {
      name: 'Praneeth Reddy Baddipadiga',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI-Powered Automation Excellence Award'
    },
    {
      name: 'Rakesh Ramakrishna Pai',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Healthcare & Life Sciences Excellence Award'
    },
    {
      name: 'Swetha Sree Kommuri',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Utham Kumar Anugula Sethupathy',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Ashok Kumar Kanagala',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Multi-Cloud & Hybrid Cloud Strategy Excellence Award'
    },
    {
      name: 'Gopi Krishna Pamula',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Hassan Rehan',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Ivan Martis',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'KARTHIKA K',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud Security & Compliance Leadership Award'
    },
    {
      name: 'Mohith Reddy Patlolla',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Real-Time Data Streaming & Analytics Excellence Award'
    },
    {
      name: 'Nithin Reddy Gadicharla',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'High-Availability & Disaster Recovery Excellence Award'
    },
    {
      name: 'Nitin Adik',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud Migration & Modernization Champion Award'
    },
    {
      name: 'Srikanth Reddy Keshireddy',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Enterprise Data Integration Excellence Award'
    },
    {
      name: 'Vamshi Krishna Pamula',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Vivek Venkatesan',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'Md Razibul Islam',
      category: 'Manufacturing & Industry 4.0 Awards',
      subAward: 'Smart Supply Chain & Logistics Innovation Award'
    },
    {
      name: 'Sunnykumar Kamani',
      category: 'Manufacturing & Industry 4.0 Awards',
      subAward: 'Industrial Cybersecurity Excellence Award'
    },
    {
      name: 'Aditya Gupta',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Dr. Saurabh Raj Sangwan',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'High-Impact Scholarly Contribution Award'
    },
    {
      name: 'Gabadarallegedara Dhanushka Kumari Karunaratne',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Translational Research Innovation Award'
    },
    {
      name: 'Kishore Arul',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Healthcare & Biomedical Research Excellence Award'
    },
    {
      name: 'Praveen Kumar Pal',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Intellectual Property Achievement Award'
    },
    {
      name: 'Prem Anand Rathina Sabapathy',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'AI-Driven Research Excellence Award'
    },
    {
      name: 'RODWAN A ELBAROUNI',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Sahil Garg',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Sharath Chandra Macha',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Satish Namballa',
      category: 'SAP Cloud & Enterprise Digital Transformation Awards',
      subAward: 'SAP Analytics Cloud Excellence Award'
    },
    {
      name: 'Anil Kumar Batchu',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Software Architecture Leadership Award'
    },
    {
      name: 'Devi Manoharan',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'AI-Enabled Software Solutions Excellence Award'
    },
    {
      name: 'Sai Krishna Anche',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'DevOps Transformation Excellence Award'
    }
  ];

  // Group winners by category
  const groupedWinners = awardWinners.reduce((acc, winner) => {
    if (!acc[winner.category]) {
      acc[winner.category] = [];
    }
    acc[winner.category].push(winner);
    return acc;
  }, {} as Record<string, AwardWinner[]>);

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">DASGRI 2026 Awards Results</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence and innovation across academia, industry, and research at DASGRI 2026.
            These distinguished individuals have been recognized for their outstanding contributions.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedWinners).map(([category, winners]) => (
            <Card key={category} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  {category}
                </CardTitle>
                <p className="text-blue-100">
                  {winners.length} award{winners.length > 1 ? 's' : ''} in this category
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {winners.map((winner, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-yellow-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {winner.name}
                          </h3>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {winner.subAward}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recognition of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These awards recognize outstanding achievements in various domains including artificial intelligence,
              cloud computing, research innovation, and enterprise solutions. Each recipient has demonstrated
              exceptional leadership, innovation, and impact in their respective fields. Congratulations to all
              the award winners for their remarkable contributions to DASGRI 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DasgriAwardsResults;
