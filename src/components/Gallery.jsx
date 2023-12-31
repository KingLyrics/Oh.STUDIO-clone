/* eslint-disable react/no-unescaped-entities */
import Card from "./Card";
import ImageData from "../Data";
import GetInTouch from "./GetInTouch";

export default function Gallery() {
  return (
    <div className="flex justify-center items-center mt-36 ">
      <div className="mt-52">
        <div className="grid gap-7 grid-cols-2 mx-44 pb-14">
          {ImageData.map((image) => (
            <Card ImageData={image} key={image.id} />
          ))}
        </div>
       <GetInTouch/>
      </div>
    </div>
  );
}
