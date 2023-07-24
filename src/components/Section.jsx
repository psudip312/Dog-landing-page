import React from "react";
import dog1 from "./dog1.png";
import { BsArrowRightCircle } from "react-icons/bs";
import arrow from "./arrow.png";

const Section = () => {
  return (
    <div className="min-h-[30vh] px-3 flex relative rounded-[24px] overflow-hidden">
      <img src={dog1} className="w-full object-cover object-right " />
      <div className="absolute top-[20%] left-[5%]">
        <p className="textwhite fontinter text-[20px] font-[600] leading-[32px] mb-4">
          One More Friend Thousands More Fun!
        </p>
        <p className="textwhite fontnunito lg:text-[34px] font-[900] leading-[32px] mb-12 ">
          "Find your furry soulmate at Our Pet Shop."
        </p>
        <div className="w-[160.87px] h-[50px] rounded-[25px] bg-white flex gap-6 items-center">
          <p className="fontinter text-[15px] ml-6 font-[600] leading-[32px] textorange">
            Get Now
          </p>
          <div className=" flex items-center justify-center w-[32px] h-[32px] rounded-full bgorange">
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
