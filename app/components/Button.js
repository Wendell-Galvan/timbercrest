import React from "react";
import Image from "next/image";

const Button = ({ type, title, icon }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-3 rounded-full border bg-green-900 px-8 py-4 text-white transition-all hover:bg-black"
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-base font-bold whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
