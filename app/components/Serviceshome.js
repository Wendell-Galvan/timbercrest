import React from "react";
import Card from "./Card";
import Link from "next/link";

const Serviceshome = () => {
  return (
    <div className="h-full p-10 bg-slate-300">
      <div>
        <h1 className="flex justify-center text-4xl font-bold pb-5 text-green-900">
          Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        <Link href="/services">
          <Card
            img="/images/hero.jpg"
            header="Custom Homes"
            alt="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores!"
          />
        </Link>
        <Link href="/services">
          <Card
            img="/images/hero.jpg"
            header="Decking"
            alt="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores!"
          />
        </Link>
        <Link href="/services">
          <Card
            img="/images/hero.jpg"
            header="Remodel"
            alt="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores!"
          />
        </Link>
      </div>
    </div>
  );
};

export default Serviceshome;
