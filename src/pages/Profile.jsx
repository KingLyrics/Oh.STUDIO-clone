/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";
import ExperienceData from "../ExperienceData";
import ExperienceView from "../components/ExperienceView";
import LogosUrls from "../LogosUrls";
import LogoView from "../components/LogoView";
import GetInTouch from "../components/GetInTouch";
import Bean from "../bean.svg";


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
        <div className=" mx-auto mt-64 mb-28">
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
          <p className="text-center text-3xl font-Poppins max-w-3xl  leading-relaxed mx-auto mt-5 mb-24">
            Where I've worked
          </p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto pb-48">
          <div className="grid grid-cols-3 gap-y-40">
            {/* component */}
            {ExperienceData.map((experience) => (
              <ExperienceView key={experience.id} experience={experience} />
            ))}
          </div>
        </div>

        <div className=" mx-auto mt-32 mb-10">
          <h1 className="bg-gray bg-SlateGray rounded-full text-center text-2xl w-40 mx-auto py-1 px-1">
            Clients
          </h1>
          <p className="text-center text-3xl font-Poppins max-w-3xl  leading-relaxed mx-auto mt-5 mb-24">
            Who I've Worked With
          </p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-4 gap-y-32 place-items-center">
            {/* component */}
            {LogosUrls.map((logo) => (
              <LogoView url={logo} key={logo.id} />
            ))}
          </div>
        </div>

        <GetInTouch />
        <footer className="max-w-7xl font-Roboto mx-auto flex justify-between items-center pb-6">
      <div className="flex items-center space-x-2">
        <div>
          <img src={Bean} alt="" />
        </div>
        <div>&copy; Ekomobong Edeme 2023</div>
      </div>
      <div className="space-x-3">
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Mail</a>
      </div>
    </footer>
      </FadeIn>
    </>
  );
};

export default Profile;
