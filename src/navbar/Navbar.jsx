import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-x-6">
            <ul className="flex items-center gap-x-6">
              <li><a href="#" className="text-black text-lg">Home</a></li>
              <li><a href="#" className="text-black text-lg">Services</a></li>
              <li><a href="#" className="text-black text-lg">Projects</a></li>
              <li><a href="#" className="text-black text-lg">Pricing</a></li>
              <li><a href="#" className="text-black text-lg">FAQs</a></li>
            </ul>
            <button className="text-lg font-semibold px-4 py-2 bg-[#CFFA90] rounded hover:bg-[#bde977]">
              Let's Chat
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col items-center gap-4">
            <a href="#" className="text-black text-base">Home</a>
            <a href="#" className="text-black text-base">Services</a>
            <a href="#" className="text-black text-base">Projects</a>
            <a href="#" className="text-black text-base">Pricing</a>
            <a href="#" className="text-black text-base">FAQs</a>
            <button className="text-base font-semibold px-4 py-2 bg-[#CFFA90] rounded hover:bg-[#bde977]">
              Let's Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
