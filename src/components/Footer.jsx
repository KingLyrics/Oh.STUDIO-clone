import Bean from "../bean.svg";
export default function Footer() {
  return (
    <footer className="max-w-7xl font-Roboto mx-auto flex justify-between items-center pb-6">
      <div className="flex items-center space-x-2">
        <div>
          <img src={Bean} alt="" />
        </div>
        <div>&copy; Ekomobong Edeme 2023</div>
      </div>
      <div className="flex items-center bg-black text-white rounded-full py-3 px-4 fixed bottom-4 left-[48%] text-sm hover:cursor-pointer">
        {" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </span>
        Shop
      </div>

      <div className="space-x-3">
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Mail</a>
      </div>
    </footer>
  );
}
