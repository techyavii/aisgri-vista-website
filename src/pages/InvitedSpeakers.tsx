import Footer from '@/components/Footer';
import InvitedSpeakerCard from '@/components/InvitedSpeakerCard';

const InvitedSpeakers = () => {
    const speakers = [
  {
    name: "Srikanth Kavuri",
    designation: "Senior Software QA Automation Engineer",
    company: "Iconsoft Inc",
    experience: "11+ Years",
    email: "srikanth1539@gmail.com",
    conferenceLink: "https://www.dasgri.co.uk/",
    titleOfTalk:
      "AI-Driven Quality Engineering for Scalable Cloud Data Systems for Social Good",
    abstract:
      "Data science and artificial intelligence are increasingly shaping critical societal systems; however, their real-world impact depends fundamentally on the reliability, security, and quality of the data infrastructures that support them. This keynote examines how AI-enabled quality engineering frameworks and secure cloud-based data architectures can be purposefully designed to support large-scale, mission-critical platforms in which data integrity directly affects public trust and societal outcomes.",
    profilePic: "invited-speakers/srikanth.jpeg",
    country: "USA",
    city: "Seattle",
  },
];


  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 font-publico text-center text-gray-900 mb-12">
          Invited Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <InvitedSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default InvitedSpeakers
