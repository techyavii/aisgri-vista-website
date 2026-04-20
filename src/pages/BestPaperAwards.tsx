import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, FileText, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface Paper {
  id: string;
  title: string;
  authors: string;
}

const BestPaperAwards: React.FC = () => {
  const papers: Paper[] = [
    {
      id: '195',
      title: 'Multimodal Data Analytics: Advanced Fusion Architectures for Cross-Modal Sentiment Analysis and Customer Behavior Understanding',
      authors: 'Rakesh Ramakrishna Pai, Venkata Manikesh Iruku, Jothsna Praveena Pendyala'
    },
    {
      id: 'DASGRI-11',
      title: 'Cybersecure Embedded AI Systems for Remote Healthcare Monitoring in Smart Hospital',
      authors: 'Shiva Kumar Madishetty, Guru Kakaraparthi, Selvaraj Durairaj'
    },
    {
      id: '379',
      title: 'Secure and Resource-Aware AI Architectures for Large-Scale CPS and IoT Networks',
      authors: 'Kalpesh Rathod, Bhavinkumar Jayswal, Mihir Dhakan, Ketankumar Patel, Kirtikumar Avaiya'
    },
    {
      id: '442',
      title: 'Carrier-Compliant Integration and AI-Driven Interoperability Testing of LTE/5G Modems for Intelligent Transportation and V2X Systems',
      authors: 'Krushived Potturi'
    },
    {
      id: '443',
      title: 'AI-Assisted End-to-End Validation of 5G-Enabled Smart Medical Devices Modem, RF and Protocol Stack Optimization for Carrier-Certified Remote Healthcare',
      authors: 'Bhaskar Gautam'
    },
    {
      id: '479',
      title: 'Explainable Multimodal AI for early mental health risk prediction using wearable and behavioural data',
      authors: 'Harshit Kohli'
    },
    {
      id: '488',
      title: 'Edge-Enabled Predictive Maintenance and Coordinated Response in Smart Infrastructure Cyber-Physical Systems',
      authors: 'Dharnisha Narasappa'
    },
    {
      id: '525',
      title: 'Integrating Generative AI and Intelligent Process Management for Next-Generation Banking Systems',
      authors: 'Raghu Praneeth Akula'
    },
    {
      id: '533',
      title: 'Explainable Deep Learning for Cyberbullying and Hate Speech Detection with Forensic Accountability',
      authors: 'Vishnu Ravi, Maninder Pal Singh, Vineet Kumar Srivastava, Sivakumar Selvaraj'
    },
    {
      id: '563',
      title: 'FPGA-Accelerated Anomaly Detection for Secure Distributed Control Systems in Oil Refineries',
      authors: 'Mohammad Majharul Islam Jabed'
    },
    {
      id: '598',
      title: 'Edge-Enabled Intelligent Fault Localization and Coordinated Load Restoration in Smart Power Grid Cyber-Physical Systems',
      authors: 'Arjun Pedapati'
    },
    {
      id: '604',
      title: 'AI-Enabled Smart Computing Systems Using Cloud, Edge and IoT Integration for Intelligent and Secure Applications',
      authors: 'Sainath Reddy Adma'
    },
    {
      id: '605',
      title: 'Big Data Analytics in Cloud and Edge Computing for intelligent smart systems and real-time decision support',
      authors: 'Dishen Jangid, Bhavesh Kataria'
    },
    {
      id: '283',
      title: 'Handwritten Medical Text Recognition Using DenseNet121-CBAM and BILSTM',
      authors: 'Mustapha Bouakkaz, Millicent Auma Omondi'
    },
    {
      id: '76',
      title: 'Human-AI Synergy for Mental Wellness: A Multifactorial Analysis of Cyberbullying Across Demographic and Cultural Contexts',
      authors: 'Victor Chigbo, Olufemi Isiaq, Biodun Ajanaku, Sonia Hassan'
    },
    {
      id: '282',
      title: 'The C4AI Case: Governance and Accountability in a Brazilian Public-Private AI Partnership',
      authors: 'Juliane Helanski'
    },
    {
      id: '354',
      title: 'Neurosymbolic AI Models Bridging Learning, Reasoning, and Explainability',
      authors: 'Sri Lekha Bandla'
    },
    {
      id: '606',
      title: 'Hybrid Machine Learning Models for Portfolio Optimi-zation and Risk Control in Financial Trading Systems',
      authors: 'Deepak Kumar Giri'
    },
    {
      id: '607',
      title: 'FPGA-Accelerated AI Intrusion Detection for Embedded Financial Gateways',
      authors: 'Hamza Afzal, Malik Huzaifa, Muhammad Ghufran'
    },
    {
      id: '608',
      title: 'AI-Assisted Decision Support Framework for Managing Uncertainty and Complexity in Strategic Project Man-agement',
      authors: 'Rethish Nair Rajendran, Krunal Patel, Shashank Bharadwaj'
    },
    {
      id: '609',
      title: 'DevOps-Based AI Deployment for Embedded Automation Systems in Smart Factories',
      authors: 'Swathi Gangarapu'
    },
    {
      id: '610',
      title: 'Artificial Intelligence–Driven Project Management for Risk Prediction and Decision Support in Complex Engi-neering Projects',
      authors: 'Asadullah Mohammed'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Best Paper Awards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating outstanding research contributions at DASGRI 2026. These papers represent the pinnacle of innovation and excellence in their respective fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    Paper ID: {paper.id}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {paper.authors}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recognition of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These distinguished papers were selected through rigorous peer review and evaluation by our expert committee.
              Each submission represents cutting-edge research that advances knowledge and innovation in artificial intelligence,
              data science, and related fields. Congratulations to all the authors for their outstanding contributions to DASGRI 2026.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default BestPaperAwards;
