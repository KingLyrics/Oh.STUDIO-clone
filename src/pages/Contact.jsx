/* eslint-disable react/no-unescaped-entities */
import FadeIn from "react-fade-in/lib/FadeIn";
import Navbar from "../components/Navbar";
import Bean from "../bean.svg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <FadeIn delay={500} transitionDuration={3000}>
        <div className="mt-96 text-center font-Poppins pb-52 space-y-2">
          <h1 className="text-black text-7xl">Let's work together.</h1>
          <h2 className="text-OffGray text-6xl">Get in touch.</h2>
        </div>
      </FadeIn>
      <footer className="max-w-7xl font-Roboto mx-auto flex justify-between items-center pb-6 mt-56">
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
    </div>
  );
};

export default Contact;
