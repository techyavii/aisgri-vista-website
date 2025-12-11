

// interface KeynoteSpeakerProps {
//   name: string;
//   designation: string;
//   company?: string;
//   experience?: string;
//   email?: string;
//   conferenceLink?: string;
//   titleOfTalk: string;
//   abstract: string;
//   profilePic?: string;
//   country: string;
//   city: string;
//   briefProfile: string;
// }

// const KeynoteSpeakerCard: React.FC<KeynoteSpeakerProps> = ({
//   name,
//   designation,
//   company,
//   experience,
//   email,
//   conferenceLink,
//   titleOfTalk,
//   abstract,
//   profilePic,
//   country,
//   city,
//   briefProfile
// }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
//       <div className="flex flex-col md:flex-row gap-6">
        
//         {/* Profile Image */}
//         <div className="w-40 h-40 rounded-lg bg-gray-200 overflow-hidden shadow">
//           {profilePic ? (
//             <img src={profilePic} alt={name} width={160} height={160} />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-gray-500">
//               No Image
//             </div>
//           )}
//         </div>

//         {/* Text Content */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
//           <p className="text-gray-600 mt-1">
//             {designation} {company && `, ${company}`}
//           </p>

//           {experience && (
//             <p className="text-gray-600 text-sm mt-1">Experience: {experience}</p>
//           )}

//           <p className="text-gray-600 text-sm">📍 {city}, {country}</p>

//           {email && (
//             <p className="text-gray-600 text-sm mt-1">
//               Email: <a href={`mailto:${email}`} className="text-blue-600 underline">{email}</a>
//             </p>
//           )}

//           {conferenceLink && (
//             <p className="text-gray-600 text-sm mt-1">
//               Conference: <a href={conferenceLink} target="_blank" className="text-blue-600 underline">Visit Link</a>
//             </p>
//           )}

//           <div className="mt-4">
//             <h3 className="text-xl font-semibold text-gray-900">Talk: {titleOfTalk}</h3>
//             <p className="text-gray-700 mt-2">{abstract}</p>
//           </div>

//           <div className="mt-4">
//             <h4 className="font-semibold text-gray-900">Brief Profile</h4>
//             <p className="text-gray-700 mt-1">{briefProfile}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeynoteSpeakerCard;


interface KeynoteSpeakerProps {
  name: string;
  designation: string;
  company?: string;
  profilePic?: string;
}

const KeynoteSpeakerCard: React.FC<KeynoteSpeakerProps> = ({
  name,
  designation,
  company,
  profilePic,
}) => {
  return (
    <div className="bg-white rounded-xl border hover:shadow-xl shadow-sm transition-all duration-300 p-6 flex flex-col items-center text-center">
      
      {/* Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden shadow-md bg-gray-100 mb-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={name}
            className="w-full h-full object-cover "
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Designation */}
      <p className="text-gray-700 mt-1">{designation}</p>

      {/* Company */}
      {company && (
        <p className="text-gray-600 text-sm mt-1">{company}</p>
      )}
    </div>
  );
};

export default KeynoteSpeakerCard;
