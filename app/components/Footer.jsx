import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="w-[min(85%,1200px)] mx-auto">
        <div className="">
          <p>Paisaflix</p>
          <div className="">
            <label>Join Newsletters</label>
            <div className="input-box">
              <input type="email" placeholder="Insert your mail here" />
              <BsArrowRightShort />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="">Product</p>
            <ul>
              <li>Movies</li>
              <li>TV Show</li>
              <li>Videos</li>
            </ul>
          </div>
          <div className="">
            <p className="">Media Group</p>
            <ul>
              <li>Nice Studio</li>
              <li>Nice News</li>
              <li>Nice TV</li>
            </ul>
          </div>
          <div className="">
            <p className="">Sitemap</p>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="">
          <p>
            <GrLocation />
            8819 Enrique Martinez, Bs As, 90280
          </p>
          <p>
            <FiMail />
            hola@paisanos.io
          </p>
          <p>
            <FiPhoneCall />
            +271 386-647-3637
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
