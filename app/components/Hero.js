import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero = () => {
  const style = {
    backgroundImage: "url(/images/hero.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section
      className="h-screen w-screen bg-fixed mx-auto px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
      style={style}
    >
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px]">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-xl mt-6 text-white bold xl:max-w-[520px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="my-12">
        <Button type="button" title="Get a Quote" />
      </div>
    </section>
  );
};

export default Hero;
