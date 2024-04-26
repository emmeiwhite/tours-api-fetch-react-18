import errorSVG from "../assets/404.svg";

export default function Error({ msg }) {
  console.log(msg);
  return (
    <div className="text-center container mx-auto py-[100px]">
      <h1 className="capitalize text-3xl mb-12">{msg}</h1>
      <img
        src={errorSVG}
        alt="Error Loading Page!"
        className="max-w-[400px] object-contain mx-auto"
      />
    </div>
  );
}
