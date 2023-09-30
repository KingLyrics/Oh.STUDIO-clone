/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";

const ExperienceData = [
  {
    id: 1,
    yearStarted: 2012,
    yearEnded: "Present",
    companyName: "OH.STUDIO",
    position: "Freelance Designer",
    type: "Director",
  },
];

const Profile = () => {
 
  return (
    <>
      <head>
        <title>Profile</title>
      </head>
      <Navbar />
      <FadeIn delay={500} transitionDuration={2000}>
        <div className="flex justify-center mt-64 flex-col items-center pb-56  ">
          <h1 className="text-6xl font-Poppins mt-40">Hey 🤘🏿 I'm Ekom</h1>
        </div>
        <div className=" mx-auto max-w-4xl mt-10 mb-10">
          <div className="grid grid-cols-2 gap-40">
            <img src="../../src/Images/me.jpg" className="" alt="" />
            <img src="../../src/Images/me2.jpg" className="" />
          </div>
        </div>
        <div className=" mx-auto mt-64 mb-56">
          <h1 className="bg-gray bg-SlateGray rounded-full text-center text-2xl w-20 mx-auto py-3 px-2">
            About
          </h1>

          <p className="text-center text-2xl font-Poppins max-w-3xl  leading-relaxed mx-auto mt-5">
            I decided to clone{" "}
            <a href="https://oh.studio/profile" className="underline">
              Oh.Studio
            </a>{" "}
            portfolio page. Was really fun to make and learnt a lot. This
            website was made using react :) But really I'm a frontend developer
            learning React and React native.
          </p>
        </div>

        <div className=" mx-auto mt-64 mb-10">
          <h1 className="bg-gray bg-SlateGray rounded-full text-center text-2xl w-40 mx-auto py-3 px-2">
            Experience
          </h1>
          <p className="text-center text-2xl font-Poppins max-w-3xl  leading-relaxed mx-auto mt-5">
            Where I've worked
          </p>
        </div>

        <div className="mt-10 max-w-md mx-auto pb-48">
          <div className="grid grid-cols-3">
          {/* component */}
          <div className="flex flex-col text-center items-center">
            <p className="text-OffGray">{ExperienceData[0].yearStarted} - {ExperienceData[0].yearEnded}</p>
            <p className="mt-2 text-2xl font-Poppins">{ExperienceData[0].companyName}</p>
          </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Profile;
