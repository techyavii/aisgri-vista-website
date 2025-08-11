
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            About Conference
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            DASGRI-2026 is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Data Science and AI for Social Good and Responsible Innovation to a common platform. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions around the World. DASGRI 2026 will be organized by Goldsmiths, University of London, United Kingdom on 10th – 11th April 2026.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            <strong>All the accepted papers of DASGRI-2026 will be published as a proceedings of DASGRI -2026. Some papers will be invited to be submitted in Scopus and SCIE indexed Journals.</strong>
          </p>
          <Link to={"https://cmt3.research.microsoft.com/DASGRI2026"}>
          <Button className='mt-4'>Paper Submission Link</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
