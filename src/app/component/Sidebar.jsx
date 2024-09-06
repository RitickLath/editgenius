import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import React from "react";
import {
  FaHome,
  FaCrop,
  FaMagic,
  FaRuler,
  FaImage,
  FaWrench,
  FaFillDrip,
  FaUser,
  FaCreditCard,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const menus = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Round Corner",
    link: "/round-corner",
    icon: <FaCrop />,
  },
  {
    name: "AI Image Enhancer",
    link: "/ai-image-enhancer",
    icon: <FaMagic />,
  },
  {
    name: "Sharpen",
    link: "/sharpen",
    icon: <FaRuler />,
  },
  {
    name: "Background Removal",
    link: "/bg-removal",
    icon: <FaImage />,
  },
  {
    name: "Generative Restore",
    link: "/generative-restore",
    icon: <FaWrench />,
  },
  {
    name: "Generative Fill",
    link: "/generative-fill",
    icon: <FaFillDrip />,
  },
];

const Sidebar = () => {
  const { userId } = auth();

  return (
    <div className="py-6 lg:pl-6 pl-3 h-screen border-r-[1.5px] border-[#3A3B3C] flex flex-col justify-between">
      <div>
        <h1 className="text-[#B888FF] font-medium text-xl flex space-x-2 items-center">
          <IoSparkles /> <span className="hidden sm:flex">IMAGINARY</span>
        </h1>

        <div className="pr-6 border-b-[1.5px] pb-6 border-[#3A3B3C] ">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="w-full flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-6"
            >
              {menu.icon}
              <span className="w-full whitespace-nowrap hidden sm:flex">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section for Profile and Buy Credit */}
      <div className="pr-6 pb-6">
        <Link
          href="/profile"
          className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-6"
        >
          <FaUser />
          <span className="hidden sm:flex">Profile</span>
        </Link>
        <Link
          href="/buy-credit"
          className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-6"
        >
          <FaCreditCard />
          <span className="hidden sm:flex">Buy Credit</span>
        </Link>
        {userId ? (
          <Link
            href="/buy-credit"
            className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-6"
          >
            <FaCreditCard />
            <span className="hidden sm:flex">Log Out</span>
          </Link>
        ) : (
          <Link
            href="/buy-credit"
            className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-6"
          >
            <FaCreditCard />
            <span className="hidden sm:flex">Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
