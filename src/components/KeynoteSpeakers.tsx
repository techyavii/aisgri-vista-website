// import KeynoteSpeakerCard from "./KeynoteSpeakerCard";

// const KeynoteSpeakers = () => {
//   const speakers = [
//     {
//       name: "Prof. Larisa Soldatova",
//       designation: "Professor in Data Science",
//       company: "School of Computing, Goldsmiths, University of London",
//       titleOfTalk: "Keynote Speaker",
//       abstract: "Prof. Soldatova is a global expert in Data Science and AI...",
//       country: "UK",
//       city: "London",
//       briefProfile: "Prof. Larisa Soldatova is a distinguished Data Science researcher at Goldsmiths University, focusing on AI-driven scientific discovery, automation, and machine reasoning.",
//       profilePic: "/placeholder-larisa.jpg"
//     },
//     {
//       name: "Krishna Gandhi",
//       designation: "Automation Lead – Energy Sector",
//       company: "Artech LLC",
//       experience: "14+ years",
//       email: "gandhikrishna00@gmail.com",
//       conferenceLink: "https://www.dasgri.co.uk/",
//       titleOfTalk: "Agentic AI for Smart-Grid Reliability",
//       abstract:
//         "Agentic AI is reshaping grid operations through intelligent validation, outage automation, switching governance, and compliance assurance. This talk explains agent-driven architectures and AI frameworks enabling resilient, safe, and efficient energy systems.",
//       country: "India",
//       city: "Bangalore",
//       briefProfile:
//         "Krishna Gandhi is an Automation Lead in the Energy sector with 14+ years across utilities, mobility, telecom, and GIS. She works on ADMS/GIS automation and AI-based grid intelligence solutions that improve reliability and predictive insights.",
//       profilePic: "" // Add when available
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Keynote Speakers
//         </h2>

//         <div className="grid gap-10">
//           {speakers.map((speaker, index) => (
//             <KeynoteSpeakerCard key={index} {...speaker} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeynoteSpeakers;


import KeynoteSpeakerCard from "./KeynoteSpeakerCard";

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Larisa Soldatova",
      designation: "Professor in Data Science",
      company: "Goldsmiths, University of London",
      profilePic: "keynotes/laria.jpeg",
    },
    {
      name: "Krishna Gandhi",
      designation: "Automation Lead – Energy Sector",
      company: "Artech LLC",
      profilePic: "keynotes/krishna.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <KeynoteSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
