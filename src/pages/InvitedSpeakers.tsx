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
  {
      name: "Rahul Ganta",
      designation: "Staff Software Engineer, Digital Intelligence",
      company: "Wabtec Corporation",
      experience: "17+ Years",
      email: "gantarahul@gmail.com",
      conferenceLink: "https://www.dasgri.co.uk/",
      titleOfTalk:
        "Collaborative AI & Human-Centered Engineering: Lessons from Scaling Performance and Quality Across Teams",
      abstract:
        "Successful AI adoption depends as much on collaboration and human-centered engineering as on model accuracy. In complex enterprise environments, organizational design, shared responsibility models, tooling adoption including AI-assisted development, and cross-functional communication strongly influence outcomes. This talk explores how leaders balance velocity with quality, autonomy with alignment, and innovation with safety.",
      profilePic: "invited-speakers/Rahul.jpeg",
      country: "USA",
      city: "",
    },
    {
      name: "Venkata Pavan Kumar Gummadi",
      designation: "Integration Architect (MuleSoft / AWS)",
      company: "Broadridge Financials",
      experience: "18 Years",
      email: "pavangummadi@gmail.com",
      conferenceLink: "https://www.dasgri.co.uk/",
      titleOfTalk:
        "Serverless and Microservices Architecture for Scalable Enterprise Integration",
      abstract:
        "This talk focuses on modern enterprise integration using serverless and microservices architecture. Drawing from large-scale real-world projects, it highlights API-led connectivity, cloud-native integration patterns, and best practices for building scalable, resilient, and secure integration platforms across diverse enterprise ecosystems.",
      profilePic: "invited-speakers/Venkata.jpeg",
      country: "UK",
      city: "",
    },
    {
      name: "Jeganraja Rajamani",
      designation: "Senior Data Engineer",
      company: "Amazon",
      experience: "19+ Years",
      email: "jeganraja.r@gmail.com",
      conferenceLink: "https://www.dasgri.co.uk/",
      titleOfTalk: "TBD",
      abstract: "TBD",
      profilePic: "invited-speakers/Jeganraja.jpeg",
      country: "USA",
      city: "",
    },
    {
      name: "Ashraf Syed",
      designation: "Technical Lead",
      company: "Virginia Department of Health",
      experience: "16 Years",
      email: "maverick.ashraf@gmail.com",
      conferenceLink: "https://www.dasgri.co.uk/",
      titleOfTalk: "Empowering Enterprise Operational Resilience: Agentic AI infused Incident Management Systems via Oracle APEX",
      abstract: "Artificial intelligence is profoundly influencing organizational operations and societal resilience; yet its effectiveness in incident management hinges on proactive automation, ethical integration, and robust data handling. This keynote explores how AI agents embedded within Oracle APEX platforms enable automated detection, predictive prevention, ethical root cause analysis, reduced downtime, and resilient public health systems.",
      profilePic: "invited-speakers/Ashraf.jpeg",
      country: "USA",
      city: ""
    },
    {
    name: "Arun Kumar Elengovan",
    designation: "Security Engineering Leader",
    company: "Okta, Inc.",
    experience: "",
    email: "",
    conferenceLink: "https://www.dasgri.co.uk/",
    titleOfTalk: "TBD",
    abstract: "TBD",
    profilePic: "invited-speakers/Arun.jpeg",
    country: "",
    city: "",
    highlights: "FBCS, HackathonRaptors Fellow, Author"
  },
  {
    name: "Dharnisha Narasappa",
    designation: "Sr Network Architect",
    company: "Versa Networks",
    experience: "20+ Years",
    email: "dharanishnarasappa@gmail.com",
    conferenceLink: "https://www.dasgri.co.uk/",
    titleOfTalk: "Zero Trust Architecture (ZTA) for Enterprise and IoT Ecosystems",
    abstract: "Architecting and implementing a Zero-Trust Architecture (ZTA) for Enterprise and IoT environments addresses the evolving Cybersecurity landscape and the inherent limitations of traditional network security models. Unlike conventional perimeter-based security approaches that rely on static defenses such as firewalls and VPNs, ZTA adopts a dynamic, identity-centric strategy grounded in the principle of least privilege access. Zero-Trust operates under the core assumption of 'never trust, always verify,' ensuring that no entity—whether inside or outside the network—is automatically granted access. By continuously validating identities, enforcing granular access controls, and monitoring user and device behavior, ZTA mitigates risks associated with lateral movement, unauthorized access, and insider threats. This proactive security model shifts the focus from network location to identity, device posture, and contextual access requirements, strengthening security postures and minimizing attack surfaces across enterprise and IoT ecosystems.",
    profilePic: "invited-speakers/Dharnisha.jpg",
    country: "USA",
    city: ""
  }

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
