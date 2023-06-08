import React from "react";
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div className="pt-[2rem] pb-[4rem]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" />
          <button href="#" className="btn btn-sm text-[25px]">
            Travaillons ensemble
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
