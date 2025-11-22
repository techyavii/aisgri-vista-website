import React from 'react'
import { Link } from 'react-router-dom'

interface SessionCard {
  id: string
  link: string
  title: string
  organizers: Array<{
    name: string
    affiliation: string
  }>
  listingFile: string
}

const SpecialSessions: React.FC = () => {
  const sessions: SessionCard[] = [
    {
      id: 'SS_001',
      link: 'SS_001: AI-Driven Cyber-Physical Consumer Technologies for Connected Lifestyles',
      title: 'AI-Driven Cyber-Physical Consumer Technologies for Connected Lifestyles',
      organizers: [
        {
          name: 'Deepa Narayanasamy',
          affiliation:
            'SIMATS Engineering, Saveetha Institute of Medical and Technical Sciences,India',
        },
        {
          name: 'Pavan Nutalapati',
          affiliation:
            'Oracle Corp, Dallas, Texas, USA. ',
        },
        {
          name: 'Goutham Sunkara',
          affiliation:
            'Broadcom Inc., ANSBU, Palo Alto, CA, USA.',
        },
      ],
      listingFile: 'SS_001.pdf',
    },
    {
      id: 'SS_002',
      link: 'SS_002: Responsible and Sustainable AI: Multi-Domain Innovations for Global Development',
      title: 'Responsible and Sustainable AI: Multi-Domain Innovations for Global Development',
      organizers: [
        {
          name: 'Devi Thiyagarajan',
          affiliation:
            ' SIMATS Engineering, Saveetha Institute of Medical and Technical Sciences, India',
        },
        {
          name: 'Sathish Kuppan Pandurangan',
          affiliation:
            'Zurich North America, Chicago, USA',
        },
        {
          name: 'Kathiresan Jayabalan',
          affiliation:
            'Mastercard Technologies,St. Louis, USA',
        },
      ],
      listingFile: 'SS_002.pdf',
    },
    {
      id: 'SS_003',
      link: 'SS_003: Bridging the Digital Divide in the Age of Artificial Intelligence: The Role of Explainability and Inclusive AI',
      title: 'Bridging the Digital Divide in the Age of Artificial Intelligence: The Role of Explainability and Inclusive AI',
      organizers: [
        {
          name: 'Naren J',
          affiliation:
            'Ramaiah University of Applied Sciences, India',
        },
        {
          name: 'Prabadevi B',
          affiliation:
            'Ramaiah University of Applied Sciences, India',
        },
      ],
      listingFile: 'SS_003.pdf',
    },
    {
    id: 'SS_004',
    link: 'SS_004: Applications of Explainable Artificial Intelligence on Responsible Innovation',
    title: 'Applications of Explainable Artificial Intelligence on Responsible Innovation',
    organizers: [
      {
        name: 'Dr Prasanta Dey',
        affiliation:
          'Ashton Business School, United Kingdom. Email: p.k.dey@ahton.ac.uk (ORCID: 0000-0002-9984-5374)',
      },
      {
        name: 'Dr Souvik Banerjee',
        affiliation:
          'Management Development Institute, India. Email: souvik.banerjee@mdim.ac.in',
      },
      {
        name: 'Dr Aditi Srivastava',
        affiliation:
          'ABES Business School, India. Email: Draditisrivastava11@gmail.com',
      },
    ],
    listingFile: 'SS_004.pdf',
    },
    {
      id: 'SS_005',
      link: 'SS_005: Trustworthy AI, Digital Safety, and Forensic Intelligence for Social Good',
      title: 'Trustworthy AI, Digital Safety, and Forensic Intelligence for Social Good',
      organizers: [
        {
          name: 'Dr. Keshav Kaushik',
          affiliation:
            'Center for Cyber Security and Cryptology, Sharda School of Computer Science & Engineering, Sharda University, Greater Noida, India. Email: officialkeshavkaushik@gmail.com',
        },
        {
          name: 'Dr. Manvi Breja',
          affiliation:
            'The NorthCap University, Gurugram, Haryana, India. Email: manvibreja@ncuindia.edu',
        },
      ],
      listingFile: 'SS_005.pdf',
    },
    {
  id: 'SS_006',
  link: 'SS_006: Recent Advances in Cyber-Security, Artificial Intelligence, Machine Learning & Communication Technology',
  title: 'Recent Advances in Cyber-Security, Artificial Intelligence, Machine Learning & Communication Technology',
  organizers: [
    {
      name: 'Dr. Vikash Yadav',
      affiliation:
        'Government Polytechnic Bighapur Unnao, Uttar Pradesh, India. Email: vikas.yadav.cs@gmail.com',
    },
    {
      name: 'Navjot Singh Talwandi',
      affiliation:
        'Chandigarh University, Chandigarh, India. Email: navjotsingh49900@gmail.com',
    },
  ],
  listingFile: 'SS_006.pdf',
}

  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Special Sessions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore curated special sessions organized by leading researchers and
            industry experts at DASGRI 2026
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="h-full bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Link/Title */}
              <div className="mb-6">
                <Link to={`/${session.id}.pdf`} target="_blank" rel="noopener noreferrer"><p className="text-sm font-semibold text-amber-100 mb-2">Link</p>
                <h3 className="text-xl font-bold leading-tight">{session.link}</h3></Link>
              </div>

              {/* Organizers */}
              <div className="mb-8 flex-grow">
                <p className="text-sm font-semibold text-amber-100 mb-3">Organiser</p>
                <ul className="space-y-4">
                  {session.organizers.map((org, idx) => (
                    <li key={idx} className="text-sm">
                      <span className="font-semibold block mb-1">
                        {idx + 1}. {org.name}
                      </span>
                      <span className="text-amber-100 text-xs leading-relaxed block">
                        {org.affiliation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Link */}
              <div className="border-t border-amber-600 pt-4">
                <p className="text-sm font-semibold text-amber-100 mb-2">Listing</p>
                <a
                  href={`/sessions/${session.listingFile}`}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white font-semibold hover:text-amber-100 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 16.5a1 1 0 11-2 0 1 1 0 012 0zM15 7a1 1 0 11-2 0 1 1 0 012 0z" />
                    <path d="M14.066 7.5H7.534a2.5 2.5 0 00-2.36 3.738l3.906 8.172A2.5 2.5 0 0010.866 20h4.732a2.5 2.5 0 002.36-3.738l-3.906-8.172a2.5 2.5 0 00-2.36-1.562zm-7-4a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {session.listingFile}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Organizing a Special Session?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We invite researchers and industry experts to organize special sessions
            at DASGRI 2026. Submit your proposal today!
          </p>
          <a
            href="/call-for-special-session"
            className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
          >
            View Call for Special Sessions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7m0 0l-7 7m7-7H5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SpecialSessions
