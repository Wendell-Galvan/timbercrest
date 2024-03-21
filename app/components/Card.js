import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="m-6 pt-5 pb-10 lg:max-w-md mx-10 overflow-hidden transition duration-500 hover:scale-105 cursor-pointer border-4 bg-white border-black rounded-lg">
      <div className="flex justify-center px-2">
        <Image
          className="w-full rounded-lg"
          height={80}
          width={60}
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="font-bold uppercase text-xl pt-6 pb-2 flex justify-center">
        <h2>{props.header}</h2>
      </div>
      <div className="px-6 pb-4 text-base">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
