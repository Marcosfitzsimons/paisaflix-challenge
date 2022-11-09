import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="">
      <div className="w-[min(85%,1200px)] mx-auto flex flex-col items-center gap-3 py-8 lg:flex-row lg:items-start lg:gap-6 lg:py-28">
        <div className="text-center lg:text-start w-full lg:w-[40%]">
          <p className="font-semibold text-2xl pb-4 lg:pb-10 lg:text-4xl xl:text-6xl">
            Paisaflix
          </p>
          <form className="flex flex-col items-center gap-2 lg:gap-6 lg:items-start">
            <label htmlFor="email" className="font-semibold">
              Join Newsletters
            </label>
            <div className="relative flex items-center w-full max-w-[260px] lg:max-w-[290px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Insert your mail here"
                className="w-full max-w-[260px] bg-transparent p-3 border border-gray-800 outline-none focus:outline-1 active:outline-1 focus:outline-yellow-400 active:outline-yellow-400 rounded-md lg:max-w-[290px]"
              />
              <div className="bg-yellow-400 rounded-lg absolute right-2">
                <BsArrowRightShort className="text-4xl text-black cursor-pointer p-1" />
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-[60%]">
          <div className="flex flex-col items-center text-center lg:text-start lg:flex-row lg:justify-between">
            <div className="border-b border-b-white py-2 lg:border-none lg:py-0">
              <p className="font-semibold mb-2 lg:mb-6">Product</p>
              <ul>
                <li className="text-gray-400 mb-2 lg:mb-6">Movies</li>
                <li className="text-gray-400 mb-2 lg:mb-6">TV Show</li>
                <li className="text-gray-400 mb-2">Videos</li>
              </ul>
            </div>
            <div className="border-b border-b-white py-2 lg:border-none lg:py-0">
              <p className="font-semibold mb-2 lg:mb-6">Media Group</p>
              <ul>
                <li className="text-gray-400 mb-2 lg:mb-6">Nice Studio</li>
                <li className="text-gray-400 mb-2 lg:mb-6">Nice News</li>
                <li className="text-gray-400 mb-2">Nice TV</li>
              </ul>
            </div>
            <div className="border-b border-b-white py-2 lg:border-none lg:py-0">
              <p className="font-semibold mb-2 lg:mb-6">Sitemap</p>
              <ul>
                <li className="text-gray-400 mb-2 lg:mb-6">About</li>
                <li className="text-gray-400 mb-2 lg:mb-6">Careers</li>
                <li className="text-gray-400 mb-2">Press</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 pt-4 lg:flex-row lg:gap-8 lg:mt-12 lg:flex-wrap">
            <p className="flex items-center gap-2 text-sm lg:text-base">
              <IoLocationOutline className="lg:text-lg" />
              8819 Enrique Martinez, Bs As, 90280
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FiMail className="lg:text-lg" />
              hola@paisanos.io
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FiPhoneCall className="lg:text-lg" />
              +271 386-647-3637
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
