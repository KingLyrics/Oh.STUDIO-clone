/* eslint-disable react/prop-types */

const ExperienceView = ({ experience }) => {
const yearStarted = experience.yearStarted;
const yearEnded = experience.yearEnded;
const yearRange = yearEnded ? `${yearStarted} - ${yearEnded}` : yearStarted;

  return (
    <div className="flex flex-col text-center items-center">
      <p className="text-OffGray">
      {yearRange}
      </p>
      <p className="mt-2 text-2xl font-Poppins">{experience.companyName}</p>
      <p className="text-OffGray text-sm mt-2">{experience.position}</p>
      <p className="bg-SlateGray mt-3 py-2 px-3 rounded-full font-Roboto font-[400]">
        {experience.type}
      </p>
    </div>
  );
};

export default ExperienceView;
