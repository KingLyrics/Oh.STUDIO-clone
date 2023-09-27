import { useState } from "react";

export default function Navbar() {
  const [activeLink, setactiveLink] = useState("Home");

  const handleClick = (Link) => {
    setactiveLink(Link);
  };

  return (
    <nav className="max-w-[300px] mx-auto text-center fixed top-7 left-0 right-0 bg-SlateGray space-x-7 rounded-full py-3 font-Roboto font-[400] text-sm z-10">
      <a
        href=""
        className={
          activeLink === "Home" ? "bg-white rounded-full py-3 px-6 -ml-7" : ""
        }
        onClick={() => handleClick("Home")}
      >
        Home
      </a>
      <a
        href="#profile"
        className={
          activeLink === "Profile"
            ? "bg-white rounded-full py-3 px-6 -ml-7"
            : ""
        }
        onClick={() => handleClick("Profile")}
      >
        Profile
      </a>
      <a
        href="#contact"
        className={
          activeLink === "Contact"
            ? "bg-white rounded-full py-3 px-6 -mr-7"
            : ""
        }
        onClick={() => handleClick("Contact")}
      >
        Contact
      </a>
    </nav>
  );
}
