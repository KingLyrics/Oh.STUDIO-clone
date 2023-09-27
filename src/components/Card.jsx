/* eslint-disable react/prop-types */
export default function Card({ ImageData }) {
  return (
    <div className="font-Poppins relative">
      {ImageData.type == "image" ? (
        <img
          src={ImageData.url}
          alt=""
          className="rounded-md hover:blur-sm transition-all h-auto w-auto"
        />
      ) : (
        <video src={ImageData.videoUrl} autoPlay muted></video>
          
      )}

      <div>
        <h1 className="absolute top-3 left-2 text-white font-[300]">
          {ImageData.title}
        </h1>
      </div>
    </div>
  );
}
