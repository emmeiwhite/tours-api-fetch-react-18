import { useState } from "react";

export default function Tour({ id, image, info, name, price, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[352px] font-roboto tracking-wide">
      <div className="relative">
        <img
          src={image}
          alt="info"
          className="object-cover w-[100%] max-h-[250px] lg:max-h-[180px]"
        />

        <div className="absolute right-0 top-0 bg-[#10B981] py-1 px-2 text-white">
          ${price}
        </div>
      </div>

      <div className="bg-white p-8">
        <h2 className="text-xl capitalize tracking-wider mb-3 text-center">
          {name}
        </h2>
        <p className="text-[#64748B]">
          {isOpen ? (
            <>
              {info} &nbsp;{" "}
              <span
                className="text-emerald-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Show Less
              </span>
            </>
          ) : (
            <>
              {info.substring(0, 140)}{" "}
              <span
                className="text-emerald-600 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                {" "}
                &nbsp; Show More
              </span>
            </>
          )}
        </p>
        <button
          className="capitalize rounded-sm text-center py-1 mt-6 border-2 w-full border-emerald-400 block"
          onClick={() => handleDelete(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
