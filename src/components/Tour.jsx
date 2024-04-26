export default function Tour({ id, image, info, name, price }) {
  return (
    <div className="max-w-[352px]">
      <img
        src={image}
        alt="info"
        className="object-cover w-[100%] max-h-[250px]"
      />

      <div className="bg-white p-8">
        <h2 className="text-xl capitalize tracking-wider mb-3 text-center">
          {name}
        </h2>
        <p className="text-[#64748B]">{info}</p>
      </div>
    </div>
  );
}
