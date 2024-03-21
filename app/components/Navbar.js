"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosConstruct } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-green-900 text-white relative flex items-center justify-between mx-auto px-6 lg:px-20 3xl:px-0 z-30 py-5">
      <Link href="/">
        <h1 className="bold">Logo</h1>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex items-center justify-center regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <p className="hidden md:flex">123-456-7890</p>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white lg:hidden"
      >
        {nav ? (
          <IoIosConstruct alt="menu" size={32} />
        ) : (
          <IoMenuSharp alt="menu" size={32} />
        )}
      </div>

      {nav && (
        <ul className="h-screen flex flex-col items-center justify-center absolute top-0 left-0 w-full bg-gradient-to-bl from-black to-green-900">
          {NAV_LINKS.map((link) => (
            <Link
              onClick={() => setNav(!nav)}
              href={link.href}
              key={link.key}
              className="text-lg text-white cursor-pointer pb-2 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
