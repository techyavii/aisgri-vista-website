import React from 'react'

const CallForSpecialSession: React.FC = () => {
  // Put your file in the `public` folder (e.g. public/special-session-format.pdf)
  // and update this path if you place it in a subfolder (e.g. /calls/special-session-format.pdf).
  const formatHref = '/Call for Special Session-Template.docx'

  const openMail = () => {
    const subject = encodeURIComponent('Special Session Proposal for DASGRI-2026')
    window.location.href = `mailto:dasgri.congress@gmail.com?subject=${subject}`
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <header className="bg-gradient-to-r from-sky-50 to-white border border-sky-100 rounded-lg p-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-sky-900 mb-3">
          Call for Special Sessions — DASGRI 2026
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Invitation to organise a special session at the International Conference on
          Data Science and AI for Social Good and Responsible Innovation (DASGRI-2026)
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <button
            onClick={openMail}
            className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-700 transition"
          >
            Submit Special Session Proposal
          </button>

          <a
            className="text-sky-600 underline"
            href="https://www.dasgri.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Conference website
          </a>

          {/* Download button for the special session format */}
          <a
            href={formatHref}
            download
            target="_blank"
            rel="noreferrer"
            aria-label="Download special session proposal format"
            className="inline-flex items-center px-4 py-2 border border-sky-200 bg-white text-sky-700 rounded-md shadow-sm hover:bg-sky-50 transition"
          >
            {/* simple document icon (SVG) */}
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Special Session Format
          </a>
        </div>
      </header>

      <section className="bg-white border rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold text-sky-800 mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          DASGRI Conference team invites you to organize special sessions in your
          research domain for DASGRI-2026, to be held at Goldsmiths, University of
          London, United Kingdom on 10–11 April 2026. The two-day conference will
          include workshops, technical sessions and keynote talks covering cutting
          edge topics in Data Science and AI for social good and responsible
          innovation. Learn more at{' '}
          <a
            href="https://www.dasgri.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 underline"
          >
            dasgri.co.uk
          </a>
          .
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-semibold text-sky-800 mb-3">Highlights & Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Proceedings in Springer (LNNS) — Scopus / WoS indexed.</li>
            <li>You will receive 10% of the total registration fees collected for your session.</li>
            <li>Opportunity to chair the session and invite speakers.</li>
            <li>Extended paper opportunities in SCI / Scopus / ESCI / DBLP / ACM journals (announcements soon).</li>
            <li>International and national keynote speakers and accessible venue.</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-semibold text-sky-800 mb-3">Important Dates</h3>
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>Proposal deadline:</strong> 30 November 2026
            </li>
            <li>
              <strong>Conference dates:</strong> 10–11 April 2026
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-sky-800 mb-3">Proposal format & Submission</h3>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Proposals should include: session title, 200–300 word description,
          list of invited/anticipated speakers, proposed session format
          (talks/panel/workshop), organiser name(s), affiliation(s) and contact
          email. Send proposals to{' '}
          <a href="mailto:dasgri.congress@gmail.com" className="text-sky-600 underline">
            dasgri.congress@gmail.com
          </a>{' '}
          with subject <strong>"Special Session Proposal — DASGRI 2026"</strong>.
        </p>

        <p className="text-gray-700 leading-relaxed">
          All accepted papers (after double-blind peer review) will be published
          in Springer’s Lecture Notes in Networks and Systems. Selected extended
          papers may be invited to special issues of indexed journals.
        </p>
      </section>
    </main>
  )
}

export default CallForSpecialSession
