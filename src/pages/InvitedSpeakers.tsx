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
  },
  {
  name: "Swapna Putti",
  designation: "Solution Architect",
  company: "Pearson Education Inc",
  experience: "20+ Years",
  email: "pswapna.cse@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk/",
  titleOfTalk: "Architecting Responsible AI for Global Enterprise Contact Centers: Integrating Human-in-the-Loop with Salesforce and AWS",
  abstract:
    "This talk presents an original framework for responsible AI in enterprise contact centers, integrating Salesforce and AWS architectures. It details data pipelines, AI decision engines, human-in-the-loop workflows, audit mechanisms, and resilience strategies, demonstrating how innovative architecture enables scalable, ethical, and high-impact AI solutions with global enterprise adoption.",
  profilePic: "invited-speakers/Swapna_Putti.jpeg",
  country: "",
  city: "",
  briefProfile:
    "Swapna Putti is a Solution Architect with over 20 years of experience designing and delivering enterprise-scale CRM, AI-driven contact center, and cloud platforms. A certified Salesforce and AWS architect, she has pioneered responsible AI frameworks, human-in-the-loop architectures, and scalable governance models, delivering mission-critical solutions adopted globally through innovative technical leadership."
},
{
  name: "Arjun Shivarudraiah",
  designation: "Senior Software Engineer",
  company: "Meijer",
  experience: "10+ Years",
  email: "arjunmandya26@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk/",
  titleOfTalk: "Engineering Scalable Enterprise Systems with Cloud-Native and AI-Driven Architectures",
  abstract:
    "This talk explores the design of scalable, cloud-native enterprise systems enhanced with AI-driven automation and intelligent workflows. It highlights architectural patterns, microservices, DevOps practices, and resilience strategies that enable high availability, performance optimization, and seamless digital transformation across large-scale retail and enterprise platforms.",
  profilePic: "invited-speakers/Arjun_Shivarudraiah.jpeg",
  country: "",
  city: "",
  briefProfile:
    "Arjun Shivarudraiah is a Senior Software Engineer with over 10 years of experience building scalable enterprise and retail technology platforms. He specializes in cloud-native architectures, microservices, DevOps, and AI-enabled systems. Arjun has contributed to high-impact, production-grade solutions that drive performance, reliability, and digital transformation at enterprise scale."
},
{
  name: "Anirban Roy",
  designation: "Principal Engineer",
  company: "Amazon Web Service",
  experience: "20+ Years",
  email: "roy.anir@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk/",
  titleOfTalk: "Training a 100B-Parameter AI Model Is Easy — Until One GPU Fails",
  abstract:
    "At frontier scale, training timelines depend less on peak TFLOPs than on goodput—the fraction of paid accelerator time that yields net learning. Faults, restarts, and orchestration overhead silently tax schedules and budgets. Modern, training-aware infrastructure compresses recovery from hours to minutes, restoring predictability and materially cutting cost for large clusters.",
  profilePic: "invited-speakers/Anirban_Roy.jpg",
  country: "",
  city: "",
  briefProfile:
    "Anirban Roy is a Principal Engineer at AWS, building large-scale AI training infrastructure for foundation models. With 20+ years across cloud, distributed systems, and ML platforms, he drives resilient, cost-efficient training at extreme scale. He helped launch SageMaker HyperPod checkpointless recovery and elastic training in 2025, sustaining high goodput across thousands of accelerators, and holds multiple patents and open-source contributions."
},
{
  name: "Venkata Reddy Pasam",
  designation: "Senior Data Engineer and Cloud Architect",
  company: "Boardwalk Pipelines",
  experience: "15 Years",
  email: "venkatdbapp@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk/invitedspeakers",
  titleOfTalk: "Protecting Sensitive Data While Driving Societal Innovation",
  abstract:
    "The release of individual-level or aggregated statistical data can introduce serious privacy risks, including the unintended disclosure of Personally Identifiable Information (PII). Although protecting sensitive information is essential, many traditional privacy-preserving techniques often restrict the ability to extract valuable insights from data. Differential Privacy provides a principled approach that helps maintain a balance between privacy protection and data utility, enabling organizations to share and analyze data securely without exposing confidential information. This talk will discuss the fundamental concepts of differential privacy, highlight practical implementation challenges, and examine its growing importance in developing future data-driven systems that support a safe and secure society. In addition, the talk will outline potential research directions for integrating differential privacy into the development of next-generation AI models.",
  profilePic: "invited-speakers/Venkata_Reddy_Pasam.jpeg",
  country: "",
  city: "",
  briefProfile:
    "Venkata Reddy Pasam is a Senior Software Engineer with over 15 years of experience in enterprise databases, AI-driven data platforms, and large-scale cloud migrations. An independent researcher with international publications and award-winning papers, he specializes in AI, AWS, Azure, and PostgreSQL architectures. He actively contributes to global conferences and technical communities and is recognized for advancing AI-driven solutions in enterprise data systems."
},
{
  name: "Arun Pratap Singh",
  designation: "Lead Analytics Engineer - Agentic AI & BI Platform ",
  company: "Freshworks, USA",
  experience: "",
  email: "",
  conferenceLink: "https://www.dasgri.co.uk/invitedspeakers",
  titleOfTalk: "",
  abstract: "",
  profilePic: "invited-speakers/Arun_Pratap_Singh.jpeg",
  country: "USA",
  city: "Mountain View, CA",
  briefProfile: ""
},
{
  name: "Amit Kumar Padhy",
  designation: "",
  company: "University of Illinois Urbana-Champaign",
  experience: "",
  email: "akpadhy2@illinois.edu",
  conferenceLink: "https://www.dasgri.co.uk/invitedspeakers",
  titleOfTalk: "",
  abstract: "",
  profilePic: "invited-speakers/Amit.jpeg",
  country: "USA",
  city: "Urbana, IL",
  briefProfile: ""
},
{
  name: "Sujatha Lakshmi Narra",
  designation: "Sr Security Engineer",
  company: "Robinhood",
  experience: "15 Years",
  email: "sujathanarra87@gmail.com",
  conferenceLink: "https://www.dasgri.co.uk",
  titleOfTalk: "AI-Driven Identity Threat Protection",
  abstract:
    "Identity has become the primary control plane of modern enterprise security, with organizations relying on cloud identity providers, SSO, and federated authentication. Attackers increasingly target identities, tokens, and authorization flows through techniques like credential theft, MFA fatigue, token hijacking, and OAuth abuse. Traditional IAM controls struggle to detect and prevent these evolving, adaptive identity-based threats effectively.",
  profilePic: "invited-speakers/Sujatha.jpg",
  country: "",
  city: "",
  briefProfile:
    "Sujatha Lakshmi Narra is a Senior Security Engineer with over 15 years of experience in enterprise security, identity and access management, and threat protection. She specializes in securing modern cloud-based identity systems and mitigating advanced identity-driven attacks. She actively contributes to strengthening organizational security postures against evolving cyber threats."
},
{
  "name": "Novman Mohammed",
  "designation": "Sr. DevOps / MLOps Engineer",
  "company": "Amdocs",
  "experience": "12 Years",
  "email": "novman@ieee.org",
  "conferenceLink": "",
  "titleOfTalk": "Securing LLM Workloads on Azure Kubernetes Service (AKS): GPU-Accelerated MLOps with End-to-End DevSecMLOps Framework",
  "abstract": "This session demonstrates how Large Language Models (LLMs) and machine learning workloads can be securely deployed on GPU-enabled Microsoft Azure Kubernetes Service (AKS) using DevSecMLOps practices. It focuses on end-to-end security across training, deployment, and inference, highlighting controls for model integrity, data protection, and runtime security in scalable AI systems.",
  "profilePic": "invited-speakers/Novman_Mohammed.jpeg",
  "country": "",
  "city": "",
  "briefProfile": "Novman Mohammed is a Senior DevOps and Cloud Engineer with 12 years of experience and co-author of Cloud Native Applications on Microsoft Azure. He specializes in MLOps and DevSecOps for AI-driven enterprise applications, focusing on building secure, resilient, and fault-tolerant cloud-native systems with high availability and operational excellence."
},
  {
    "name": "Nithin Reddy Gadicharla",
    "designation": "Database Administrator",
    "company": "Elan Technologies",
    "experience": "10+ Years",
    "email": "Nithin.gadicharla@ieee.org",
    "conferenceLink": "https://www.dasgri.co.uk",
    "titleOfTalk": "Engineering Resilient Multi-Cloud Architectures for High-Performance AI and Data Workload",
    "abstract": "As AI and data-intensive systems redefine enterprise innovation, resilient multi-cloud architectures have become the foundation of scalable intelligence. This session explores advanced design paradigms for building fault-tolerant, high-performance platforms across diverse cloud environments, integrating distributed systems principles and cloud-native strategies to enable secure, adaptive, and globally scalable data ecosystems.",
    "profilePic": "invited-speakers/Nithin_Reddy_Gadicharla.jpeg",
    "country": "",
    "city": "",
    "briefProfile": "Nithin Gadicharla is a technology leader specializing in cloud-native architecture, data engineering, and AI-driven platforms. He has designed scalable, high-performance systems across multi-cloud environments, enabling real-time analytics and intelligent decision-making. His work focuses on distributed systems, performance optimization, and building resilient, next-generation data platforms for enterprise innovation."
  },
  {
    "name": "Narendra Kandregula",
    "designation": "Assistant Vice President",
    "company": "Deutsche Bank",
    "experience": "13 Years",
    "email": "narendravsk@gmail.com",
    "conferenceLink": "",
    "titleOfTalk": "AI-Powered Compliance: Scaling Audit Capabilities in Financial Systems",
    "abstract": "Financial compliance processes are often manual, time-intensive, and difficult to scale with increasing regulatory demands. This session explores how Generative AI can act as an intelligent auditor by automating transaction reviews, interpreting policies, and generating audit-ready narratives. It highlights real-world fintech use cases, RAG architectures, and human-in-the-loop validation while addressing explainability, privacy, and governance challenges.",
    "profilePic": "invited-speakers/Narendra_Kandregula.jpeg",
    "country": "USA",
    "city": "New York",
    "briefProfile": "Narendra Kandregula is an AVP at Deutsche Bank with over 13 years of experience in building scalable fintech platforms, cloud-native microservices, and real-time trading systems. He has worked with organizations like Apple and JP Morgan. An active researcher with multiple publications, his work spans generative AI in fintech, healthcare AI, IoT analytics, and cybersecurity. He holds certifications in AWS, Java, and Blockchain and is a graduate of the National University of Singapore."
  },
  {
    "name": "Kapil Kumar Sharma",
    "company": "Fuquay Varina, NC",
    "experience": "13 Years",
    "email": "narendravsk@gmail.com",
    "conferenceLink": "",
    "titleOfTalk": "AI-Powered Compliance: Scaling Audit Capabilities in Financial Systems",
    "abstract": "Financial compliance processes are often manual, time-intensive, and difficult to scale with increasing regulatory demands. This session explores how Generative AI can act as an intelligent auditor by automating transaction reviews, interpreting policies, and generating audit-ready narratives. It highlights real-world fintech use cases, RAG architectures, and human-in-the-loop validation while addressing explainability, privacy, and governance challenges.",
    "profilePic": "invited-speakers/Kapil_Kumar_Sharma.jpeg",
    "country": "USA",
    "city": "New York",
    "briefProfile": "Narendra Kandregula is an AVP at Deutsche Bank with over 13 years of experience in building scalable fintech platforms, cloud-native microservices, and real-time trading systems. He has worked with organizations like Apple and JP Morgan. An active researcher with multiple publications, his work spans generative AI in fintech, healthcare AI, IoT analytics, and cybersecurity. He holds certifications in AWS, Java, and Blockchain and is a graduate of the National University of Singapore."
  }
];

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-12">
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
