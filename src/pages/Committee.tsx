
import React from 'react';
import Footer from '@/components/Footer';

const Committee = () => {
  const generalChairs = [
    { name: "Larisa Soldatova", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Yang Xiao", affiliation: "The University of Alabama, USA" },
    { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
  ];

  const honoraryChairs = [
    { name: "Frances Corner", affiliation: "Vice-Chancellor, Goldsmiths, University of London, UK" },
    { name: "Janusz Kacprzyk", affiliation: "Polish Academy of Sciences, Warsaw, Poland" },
    { name: "Manu Malek", affiliation: "EiC Computer and Electrical Engineering, Stevens Institute of Technology, USA" },
    { name: "Jon G. Hall", affiliation: "EiC Expert Systems (WILEY), The Open University, UK" }
  ];

  const conferenceChairs = [
    { name: "Akshi Kumar", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Jamie Ward", affiliation: "Goldsmiths, University of London, UK" },
    { name: "MPS Bhatia", affiliation: "Netaji Subhas University of Technology, India" }
  ];

  const technicalProgramChairs = [
    { name: "Rajkumar Singh Rathore", affiliation: "Cardiff Metropolitan University, UK" },
    { name: "Saurabh Raj Sangwan", affiliation: "GL Bajaj Institute of Technology and Management, India" },
    { name: "Aditya Khamparia", affiliation: "Babasaheb Bhimrao Ambedkar University, India" }
  ];

  const conveners = [
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
    { name: "Harpreet Singh Arora", affiliation: "Tel-Aviv University, Israel" }
  ];

  const publicityChairs = [
    { name: "Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
    { name: "Zdzislaw Polokoswski", affiliation: "The Karkonosze University of Applied Sciences in Jelenia Góra, Poland" },
    { name: "Basel Barakat", affiliation: "Goldsmiths, University of London, UK" }
  ];

  const organisingChairs = [
    { name: "Professor Jennifer George", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Marco Gillies", affiliation: "Goldsmiths, University of London, UK" }
  ];

  const publicationChairs = [
    { name: "Professor MPS Bhatia", affiliation: "Netaji Subhas University of Technology, India" },
    { name: "Professor George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
    { name: "Dr. Prasanalakshmi B", affiliation: "King Khalid University, Saudi Arabia" },
    { name: "Professor Jennifer George", affiliation: "Goldsmiths, University of London, UK" }
  ];

  const advisoryCommittee = [
    { name: "Frederic Leymarie", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Sylvia Xueni Pan", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Rabail Tahir", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Sean McGrath", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Maggie Cooper", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Yoram Chisik", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Sarah Rauchas", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Alan Zucconi", affiliation: "Goldsmiths, University of London, UK" },
    { name: "Tony Russell-Rose", affiliation: "City St George, University of London, UK" },
    { name: "Patrick Gunawan Hartono", affiliation: "The Royal Melbourne Institute of Technology, Vietnam" },
    { name: "Sanjay Kumar", affiliation: "Delhi Technological University, India" },
    { name: "Kapil Sharma", affiliation: "Delhi Technological University, India" },
    { name: "Aditi Sharma", affiliation: "Thapar Institute of Engineering and Technology‬, India" },
    { name: "Suleyman EKEN", affiliation: "Kocaeli University, Turkey" },
    { name: "Vineet Kansal", affiliation: "ProVC, AKTU; Director, IET, Lucknow, India" },
    { name: "João Manuel R. S. Tavares", affiliation: "Universidade do Porto (FEUP), PORTUGAL" },
    { name: "Yu-Dong Zhang", affiliation: "University of Leicester, LE1 7RH, UK" },
    { name: "Zdzislaw Polokowski", affiliation: "The Karkonosze University of Applied Sciences in Jelenia Góra, Poland" },
    { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
    { name: "Abhishek Swaroop", affiliation: "Bhagwan Parshuram Institute of Technology, India" },
    { name: "Giorgos Karagiannidis", affiliation: "Aristotle University of Thessaloniki, Greece" },
    { name: "Sheng-Lung Peng", affiliation: "National Dong Swa University, Taiwan" },
    { name: "Dijana Oreski", affiliation: "University of Zagreb, Varazdin, Croatia" },
    { name: "Anil Kumar Ahlawat", affiliation: "Director Academics, NIET Greater Noida, India" },
    { name: "Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Salt - Jordan" },
    { name: "Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
    { name: "Isabel DE LA TORRE DÍEZ", affiliation: "University of Valladolid, Spain" },
    { name: "Oana Geman", affiliation: "Chalmers University of Technology, University of Gothenburg, Romania" },
    { name: "Varun G. Menon", affiliation: "SCMS School of Engineering and Technology, Kochi, India" },
    { name: "Mohammad Shojafar", affiliation: "University of Surrey, UK" },
    { name: "Anish Jindal", affiliation: "University of Essex, UK" },
    { name: "Suresh Chavhan", affiliation: "Indian Institute of Information Technology Raichur, India" },
    { name: "GaganGeet Singh Aujla", affiliation: "Durham University, UK" },
    { name: "Sachin Kumar", affiliation: "South Ural State University, Chelyabinsk, Russian Federation" },
    { name: "Prayag Tiwari", affiliation: "Aalto University, Finland" },
    { name: "Pradeep Malik", affiliation: "KIIT University, India" },
    { name: "Sahil Garg", affiliation: "École de technologie supérieure, Université du Québec, Montreal, Canada" },
    { name: "Gulshan Shrivastava", affiliation: "Bennett University, Gr.Noida., India" },
    { name: "Aditya Khamparia", affiliation: "Babasaheb Bhimrao Ambedkar University, India" },
    { name: "Amit Kumar Jaiswal", affiliation: "University of Leeds, United Kingdom" },
    { name: "Qianqian Xie", affiliation: "University of Manchester, Manchester, United Kingdom" },
    { name: "Francesco Piccialli", affiliation: "University of Naples Federico II, Italy" },
    { name: "Ashiq Anjum", affiliation: "University of Leicester, UK" },
    { name: "Nuno M.Garcia", affiliation: "University of Beira Interior, Covilhã, Portugal" },
    { name: "Kashif Saleem", affiliation: "Universiti Teknologi Malaysia, Riyadh, Saudi Arabia" },
    { name: "Le Hoang Son", affiliation: "University of Dannang, Vietnam" },
    { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, Lexington, VA" },
    { name: "Jalil Piran", affiliation: "Sejong University, South Korea" },
    { name: "Kemal Polat", affiliation: "Abant Izzet Baysal University, Turkey" },
    { name: "Juhriyansyah Dalle", affiliation: "Universitas Lambung Mangkurat, Indonesia" },
    { name: "Ahmed Elngar", affiliation: "Beni - Suef university, Egypt" },
    { name: "Prajoy Podder", affiliation: "Institute of Information and Communication Technology, BUET, Dhaka" },
    { name: "M.Rubaiyat Hossain Mondal", affiliation: "Institute of Information and Communication Technology, BUET, Dhaka" },
    { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
    { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
    { name: "Khan Muhammad", affiliation: "Sejong University, South Korea" },
    { name: "Yenumula B Reddy", affiliation: "Grambling State University, Louisiana" },
    { name: "Chandran Venkatesan", affiliation: "KPR Institute of Engineering and Technology, India" },
    { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
    { name: "Souvik Ganguli", affiliation: "Thapar Institute of Engineering and Technology, India" },
    { name: "Flah Aymen", affiliation: "National School of Engineering of Gabes, Tunisia" },
    { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
    { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
    { name: "Gautam Srivastava", affiliation: "Brandon University, Canada" },
    { name: "Vassilis C.Gerogiannis", affiliation: "University of Thessaly, Greece" },
    { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
    { name: "Muhibul Haque Bhuyan", affiliation: "Southeast University, Bangladesh" },
    { name: "Med Salim BOUHLEL", affiliation: "Lab SETIT; Sfax University, Tunisia" },
    { name: "Mamoun Alazab", affiliation: "Charles Darwin University, Australia" },
    { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
    { name: "Arij Naser Abougreen", affiliation: "University of Tripoli, Libya" },
    { name: "Sherif Mohamed Ismail", affiliation: "Egyptian German Academy" },
    { name: "Aslanbek Naziev", affiliation: "Ryazan State University named after S.A.Esenin, Russia" },
    { name: "Mwaffaq Otoom", affiliation: "Yarmouk University, Jordan" },
    { name: "Ahmed A.Ewees", affiliation: "Damietta University, Egypt" },
    { name: "Iwan Adhicandra", affiliation: "University of Sydney, Australia" },
    { name: "Meng Li", affiliation: "Hefei University of Technology, China" },
    { name: "Korhan Cengiz", affiliation: "Trakya University, Turkey" },
    { name: "Muhammad Bilal", affiliation: "Hankuk University of Foreign Studies, South Korea" },
    { name: "RR Venkatesha Prasad", affiliation: "TU Delft, The Netherlands" },
    { name: "Alfredo Grieco", affiliation: "Politecnico di Bari, Italy" },
    { name: "Quoc- Viet Pham", affiliation: "Pusan National University, South Korea" },
    { name: "Enkeleda Lula", affiliation: "University Haxhi Zeka, Peja, Kosovo" },
    { name: "Fides del Castillo", affiliation: "De La Salle University, Philippines" },
    { name: "Houda CHIHI", affiliation: "Innov'COM Lab of Sup'COM Tunisia" },
    { name: "Tu Nguyen", affiliation: "Kennesaw state university, Kennesaw, United States" },
    { name: "Christos Douligeris", affiliation: "University of Piraeus, Greece" },
    { name: "Surbhi Bhatia", affiliation: "King Faisal University, Saudi Arabia" },
    { name: "Feras M. Awaysheh", affiliation: "Tartu University, Delta Research Center, Estonia" },
    { name: "Assunta Di Vaio", affiliation: "University of Naples \"Parthenope\" (Italy)" },
    { name: "Rajesh Kumar Dhanaraj", affiliation: "Professor, Symbiosis International (Deemed University), Pune, India" },
    { name: "Lakshmanan Sethu Sankaranarayanan", affiliation: "Google, USA" },
    { name: "Shashi Kant Gupta", affiliation: "Post-Doctoral Fellow, Computer Science and Engineering, Eudoxia Research University, New Castle, Delaware, USA" },
    { name: "S.K. Lakshmanaprabu", affiliation: "Renault Nissan Technology & Business Centre India (RNTBCI), India" },
    { name: "Mohammad Atikur Rahman", affiliation: "San Francisco Bay University, Fremont, California, USA" },
    { name: "Md Shihab Uddin", affiliation: "San Francisco Bay University, Fremont, California, USA" },
    { name: "Daniel Lucky Michael", affiliation: "San Francisco Bay University, Fremont, California, USA" },
    { name: "Priya Podder", affiliation: "Dhaka National Medical College, Dhaka, Bangladesh" },
    { name: "Md Sazol Ahmmed", affiliation: "Missouri University of Science and Technology, Rolla, MO, USA" }
  ];

  const CommitteeSection = ({ title, members }: { title: string; members: { name: string; affiliation: string }[] }) => (
    <div className="mb-8">
      <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="bg-goldsmiths-beige p-3 rounded">
            <p className="font-graphik font-bold text-goldsmiths-text">{member.name}</p>
            <p className="font-publico text-sm text-goldsmiths-text">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
            Committee
          </h1>
          
          {/* Hierarchical Committee Structure */}
          <div className="space-y-8">
            <CommitteeSection title="General Chair(s)" members={generalChairs} />
            <CommitteeSection title="Honorary Chair(s)" members={honoraryChairs} />
            <CommitteeSection title="Conference Chair(s)" members={conferenceChairs} />
            <CommitteeSection title="Technical Program Chair(s)" members={technicalProgramChairs} />
            <CommitteeSection title="Convener(s)" members={conveners} />
            <CommitteeSection title="Publicity Chair(s)" members={publicityChairs} />
            <CommitteeSection title="Organising Chair(s)" members={organisingChairs} />
            <CommitteeSection title="Publication Chair(s)" members={publicationChairs} />
            
            {/* Advisory Committee */}
            <div className="mt-8">
              <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
                Advisory Committee and Technical Program Committee
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advisoryCommittee.map((member, index) => (
                  <div key={index} className="bg-goldsmiths-beige p-3 rounded">
                    <p className="font-graphik font-bold text-goldsmiths-text text-sm">{member.name}</p>
                    <p className="font-publico text-xs text-goldsmiths-text">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
