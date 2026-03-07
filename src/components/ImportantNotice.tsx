import React from "react";

const ImportantNotice: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-start gap-3 text-gray-800">
        
        {/* Icon */}
        <div className="text-yellow-600 text-xl mt-1">
          ⚠️
        </div>

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed">
          <span className="font-semibold text-yellow-800">
            Important Conference Update:
          </span>{" "}
          We are closely monitoring the situation and are considering organizing
          the conference in a <b>fully online format</b>. This decision is being
          considered in light of the evolving situation in the Middle East and
          our commitment to prioritizing the safety and convenience of all
          participants. With approximately one month remaining before the
          conference, we wanted to provide early notice so that attendees have
          sufficient time to make any necessary adjustments to their bookings or
          travel plans.
        </p>
      </div>
    </div>
  );
};

export default ImportantNotice;