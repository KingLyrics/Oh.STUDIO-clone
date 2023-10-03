import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="max-w-[300px] mx-auto text-center fixed top-7 left-0 right-0 space-x-7 py-3 font-Roboto font-[400] text-sm z-10 bg-OffGray backdrop-blur-lg bg-opacity-30 rounded-full">
      <Link
        to="/home"
        className={`${
          location.pathname === "/home"
            ? "bg-white rounded-full py-3 px-6 -ml-7"
            : ""
        } `}
      >
        Home
      </Link>
      <Link
        to="/profile"
        className={`${
          location.pathname === "/profile"
            ? "bg-white rounded-full py-3 px-6 -ml-7"
            : ""
        }`}
      >
        Profile
      </Link>
      <Link
        to="/contact"
        className={`${
          location.pathname === "/contact"
            ? "bg-white rounded-full py-3 px-6 -ml-7"
            : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
