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
  },
  {
  name: "Avinash Chandra Vootkuri",
  designation: "Staff Data Scientist",
  company: "Walmart",
  experience: "10 Years",
  email: "avinashchandrav@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk/",
  titleOfTalk: "TBD",
  abstract: "TBD",
  profilePic: "invited-speakers/Avinash.jpeg",
  country: "USA",
  city: "TBD",
  briefProfile:
    "Avinash Chandra Vootkuri is a Staff Data Scientist at Walmart Global Tech and a recognized thought leader in AI-driven cybersecurity. He specializes in protecting high-volume enterprise systems from fraud, bot attacks, and abuse using advanced Machine Learning and Multi-Agent Systems. His work bridges academic research and real-world deployment, shaping next-generation autonomous security frameworks.",
},
  {
    name: "Chaithanya Etikala",
    designation: "Senior Technical Architect – AI & CRM Solutions",
    company: "Tata Consultancy Services (TCS)",
    experience: "10+ Years",
    email: "Chaithanya161719@gmail.com",
    conferenceLink: "https://www.dasgri.co.uk/",
    titleOfTalk:
      "Architecting Intelligent Enterprise Platforms: AI-Driven Systems for Scalable Digital Transformation",
    abstract:
      "This invited talk discusses architectural strategies for building AI-driven enterprise platforms that support intelligent automation, real-time analytics, and scalable cloud integration. It highlights real-world implementations, core design principles, and measurable business outcomes demonstrating how AI architectures enable large-scale digital transformation.",
    profilePic: "invited-speakers/Chaithanya_Etikala.jpeg",
    country: "India",
    city: "TBD",
    briefProfile:
      "Chaithanya Etikala is a Senior Technical Architect with over a decade of experience designing AI-enabled enterprise platforms and scalable cloud solutions. She specializes in intelligent automation, CRM ecosystems, and distributed system architecture, delivering high-impact digital transformation initiatives for global organizations."
  },

  {
    name: "Shivangi Chaughule",
    designation: "Physical Therapist",
    company: "FOX Rehabilitation",
    experience: "13 Years",
    email: "shivangisawant@ymail.com",
    conferenceLink: "https://www.dasgri.co.uk/call-for-papers",
    titleOfTalk: "AI for Remote Diagnostics and Telemedicine Platforms",
    abstract:
      "This talk explores how AI-driven telemedicine platforms enable faster, more accurate remote diagnostics through real-time data analysis, predictive modeling, and clinical decision support. It highlights applications in remote monitoring, symptom triage, and personalized care while addressing data privacy, regulatory, and ethical implementation challenges.",
    profilePic: "invited-speakers/Shivangi_Chaughule.jpeg",
    country: "USA",
    city: "New York",
    briefProfile:
      "Shivangi Chaughule is a licensed Physical Therapist in New York and a Medical Informatics professional with over a decade of experience in home health and rehabilitation. She specializes in remote patient care, geriatric mobility, and evidence-based therapy, contributing actively to research in telehealth and holistic rehabilitation."
  },

  {
    name: "Isha Bhonde",
    designation: "Physical Therapist",
    company: "FOX Rehabilitation",
    experience: "5 Years",
    email: "bhonde.isha@gmail.com",
    conferenceLink: "https://www.dasgri.co.uk/call-for-papers",
    titleOfTalk: "Mental Health Prediction and Emotion-Aware Systems",
    abstract:
      "Mental health prediction and emotion-aware systems use AI, wearables, and digital phenotyping to detect early emotional distress and predict risk of deterioration. This talk explores proactive intervention, ethical considerations, and clinical integration of intelligent systems that enable personalized, preventive, and compassionate mental healthcare.",
    profilePic: "invited-speakers/Isha_Bhonde.jpeg",
    country: "USA",
    city: "New York",
    briefProfile:
      "Isha Bhonde is a licensed Physical Therapist in New York and Medical Informatics professional specializing in home health rehabilitation and data-informed care. With clinical experience across long-term and home health settings, she focuses on personalized therapy, remote monitoring, mentorship, and research in holistic rehabilitation."
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
