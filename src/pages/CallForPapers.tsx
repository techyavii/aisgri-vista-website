
import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers</h1>
          
          <div className="mb-8">
            <h2 className="font-druk text-2xl text-[#001324] mb-3">DASGRI 2026 – International Conference on Data Science and AI for Social Good and Responsible Innovation</h2>
            <p className="font-graphik mb-1">9–10 April 2026 (Hybrid Mode)</p>
            <p className="font-graphik mb-1">Goldsmiths, University of London, UK</p>
            <p className="font-graphik mb-4">Publisher: Springer | Indexed in Scopus</p>
          </div>
          
          <div className="mb-8">
            <p className="font-graphik text-lg mb-4">
              The aim of DASGRI 2026 is to provide a global platform for researchers, engineers, academicians, technologists, and professionals from academia, industry, and government to present their latest research findings, development activities, and practical experiences across a wide spectrum of Data Science and Artificial Intelligence for Social Good and Responsible Innovation. The conference serves as a catalyst for cross-disciplinary collaboration, aiming to advance high-impact research and real-world applications of Data Science and AI that address urgent societal challenges with ethical foresight, inclusivity, and global relevance.
            </p>
            <p className="font-graphik text-lg">
              The conference comprises multiple tracks covering a broad range of topics, detailed below:
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 1: AI for Health, Wellbeing, and Assistive Technologies</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Mental health prediction and emotion-aware systems</li>
              <li>Explainable AI in clinical diagnostics and care</li>
              <li>Biomedical NLP, medical summarization, and entity extraction</li>
              <li>AI-powered wearables and patient monitoring systems</li>
              <li>Health data fusion and privacy-preserving models</li>
              <li>AI in public health surveillance and pandemic preparedness</li>
              <li>Therapeutic AI agents and digital health assistants</li>
              <li>AI for accessibility and rehabilitation support</li>
              <li>Digital twins for personalized healthcare and treatment simulation</li>
              <li>AI for remote diagnostics and telemedicine platforms</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 2: Cyber Informatics and Digital Safety</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Cyberbullying detection and online safety mechanisms</li>
              <li>Misinformation, disinformation, and hate speech analytics</li>
              <li>Cybersecurity in AI-integrated systems</li>
              <li>Sentiment and intent analysis for threat intelligence</li>
              <li>AI for online harms mitigation and user protection</li>
              <li>Detection of deepfakes, bot networks, and algorithmic manipulation</li>
              <li>Privacy-aware user modelling and digital forensics</li>
              <li>Trust, transparency, and accountability in online ecosystems</li>
              <li>Responsible content moderation and platform governance</li>
              <li>Algorithmic transparency and forensic explainability for AI-driven decisions</li>
              <li>Real-time detection of coordinated inauthentic behaviour (CIB)</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 3: Algorithmic Fairness, Transparency, and AI Ethics</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Bias and fairness auditing in AI systems</li>
              <li>Explainability and interpretability in AI pipelines</li>
              <li>Regulatory frameworks and algorithmic accountability</li>
              <li>Human-AI collaboration and ethical decision-making</li>
              <li>Trustworthy AI in high-stakes domains</li>
              <li>Cultural and socio-technical dimensions of ethical AI</li>
              <li>AI governance and policy development</li>
              <li>Safety, alignment, and value-sensitive design</li>
              <li>Participatory design and co-creation in responsible AI development</li>
              <li>Fairness in recommender systems and content moderation</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 4: Cyber-Physical Systems and Sustainable Intelligence</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>AI for smart grids, energy efficiency, and intelligent cities</li>
              <li>Real-time CPS applications in transport, agriculture, and utilities</li>
              <li>Disaster prediction and resilience through integrated sensing</li>
              <li>Edge and fog computing for sustainable operations</li>
              <li>Human-in-the-loop control in intelligent environments</li>
              <li>Secure architectures for CPS and IoT deployments</li>
              <li>AI for coordinated response and predictive maintenance</li>
              <li>Resource-aware AI design for green computing</li>
              <li>CPS for social good and adaptive infrastructure</li>
              <li>Digital agriculture and precision farming with AI-enabled sensors</li>
              <li>AI for sustainable water, waste, and resource management</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 5: Immersive Intelligence and Extended Realities</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>AI-driven content generation in XR/VR/AR environments</li>
              <li>Emotion-aware and affective computing in immersive systems</li>
              <li>XR for mental health, therapy, and rehabilitation</li>
              <li>Adaptive and personalized immersive learning environments</li>
              <li>Human-computer interaction in extended reality platforms</li>
              <li>Ethics, accessibility, and inclusivity in immersive experiences</li>
              <li>Intelligent avatars and social presence in virtual spaces</li>
              <li>Immersive storytelling and AI-enhanced narrative design</li>
              <li>Cognitive load modelling and adaptive immersion using AI</li>
              <li>Ethical frameworks for immersive persuasion and behavioural influence</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Track 6: Foundational Advances and Interdisciplinary AI</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Hybrid symbolic-statistical AI models</li>
              <li>Commonsense reasoning and causal inference</li>
              <li>Multimodal and multilingual learning systems</li>
              <li>Knowledge graphs, data fusion, and reasoning engines</li>
              <li>Interdisciplinary AI linking humanities and technology</li>
              <li>AI for creative domains (art, literature, media, music)</li>
              <li>Conversational AI, dialogue systems, and argument mining</li>
              <li>Ethics-aware dataset construction and benchmark design</li>
              <li>Small and efficient language models for low-resource and edge deployment</li>
              <li>Neurosymbolic approaches bridging learning and reasoning</li>
            </ul>
          </div>
          
          <div className="mt-10">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Submission Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Submissions must present original, unpublished work and follow the Springer LNCS formatting guidelines.</li>
              <li>All submitted papers will undergo double-blind peer review by the Technical Program Committee.</li>
              <li>Accepted papers will be published in the Scopus-indexed Springer proceedings.</li>
              <li>Selected high-quality papers may be invited for extended versions in special issues of reputed journals.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
