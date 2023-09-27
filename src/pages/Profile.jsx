/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";

const Profile = () => {
  return (
    <>
      <Navbar />
      <FadeIn delay={500} transitionDuration={2000}>
        <div className="flex justify-center mt-72 flex-col items-center ">
          <h1 className="text-6xl font-Poppins mt-40">Hey 🤘🏿 I'm Ekom</h1>
        </div>
      </FadeIn>
    </>
  );
};

export default Profile;
