import React from "react";
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div className="pt-[2rem] pb-[4rem]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <button href="#contact" className="btn btn-sm text-[25px]">
            Travaillons ensemble
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
