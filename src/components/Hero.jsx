
export default function Hero() {

  return (
    <div className="flex justify-center mt-72 flex-col items-center">
      <p className="font-Poppins text-6xl w-[700px] text-center leading-snug">
        A brand and product designer working with clients globally
      </p>
      <div className="mt-8 space-x-4">
        <a href="">Expertise</a>
        <a className="bg-SlateGray py-3 px-4 text-sm rounded-full hover:cursor-text">
          Branding
        </a>
        <a className="bg-SlateGray py-3 px-4 text-sm rounded-full hover:cursor-text">
          Product
        </a>
        <a className="bg-SlateGray py-3 px-4 text-sm rounded-full hover:cursor-text">
          Design Systems
        </a>
      </div>
    </div>
  );
}
