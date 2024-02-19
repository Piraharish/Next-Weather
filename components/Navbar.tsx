import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-screen py-4 px-4 md:px-12 lg:px-60 z-10 bg-background">
      <nav className="flex items-center justify-between">
        <div className="flex object-contain w-16 h-auto items-center gap-x-2">
          <Image
            src="/favicon.ico"
            alt="icon"
            height={500}
            width={500}
            quality={100}
            priority
          />
          <h3 className="text-3xl font-semibold">ForeCastify</h3>
        </div>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
