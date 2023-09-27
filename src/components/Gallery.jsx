/* eslint-disable react/no-unescaped-entities */
import Card from "./Card";
import ImageData from "../Data";

export default function Gallery() {
  return (
    <div className="flex justify-center items-center mt-36 ">
      <div className="mt-52">
        <div className="grid gap-7 grid-cols-2 mx-44 pb-14">
          {ImageData.map((image) => (
            <Card ImageData={image} key={image.id} />
          ))}
        </div>
        <div className="mt-56 text-center font-Poppins pb-52 space-y-2">
          <h1 className="text-black text-4xl">Let's work together.</h1>
          <h2 className="text-OffGray text-3xl">Get in touch.</h2>
        </div>
      </div>
    </div>
  );
}
