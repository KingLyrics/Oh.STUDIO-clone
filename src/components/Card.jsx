/* eslint-disable react/prop-types */
export default function Card({ImageData}) {
  return (
    <div className="">
      <img src={ImageData.url} alt="" className="rounded-md hover:blur-sm transition-all" />
    </div>
  );
}
