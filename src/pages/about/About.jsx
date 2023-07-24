import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./Vector.png";
import img5 from "./Vector2.png";
import arrow1 from "./arrow1.png"

const About = () => {
  return (
    <div className="px-3 lg:px-[12%] flex flex-row justify-between">
      <div className="hidden md:flex w-[523.81px] h-[605.21px] relative">
        <div className=" rounded-lg">
          <img
            src={img1}
            alt="img1"
            class="border-8 rounded-[10px] border-white absolute top-24 z-30"
          />
        </div>
        <img
          src={img3}
          alt="image3"
          class="border-8  rounded-[10px] border-white absolute bottom-0 right-16 z-40"
        />
        <img
          src={img2}
          alt="image2"
          class="border-8 rounded-[10px] border-white absolute top-60 right-2 z-50"
        />
        <img src={img4} alt="vector1" class="absolute top-0 right-0 " />
        <img src={img5} alt="vector2" class="absolute bottom-4 left-20" />
      </div>
      <div className="lg:w-1/2 py-24">
        <div>
          <p className="textcolordarblue fontnunito text-[45px] font-[800] leading-[60px] mb-4">
            About Us
          </p>
        </div>
        <p
          className="w-fulll lg:h-[96px]  textgray fontnunito text-[22px] font-[500] leading-[32px] mb-8"
        >
          Pet House & Animal clinic was established with moto to provide
          qualitative and affordable animal healthcare service to your doorstep.
        </p>
        <div className="flex items-center gap-3 mb-3">
          <RiCheckboxCircleLine className="w-[13.3px] h-[13.84px] textbluecolor " />
          <p className=" textgray fontnunito text-[18px] font-[600] leading-[32px]">
            Comprehensive
          </p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <RiCheckboxCircleLine className="w-[13.3px] h-[13.84px] textbluecolor " />
          <p className="textgray fontnunito text-[18px] font-[600] leading-[32px]">
            Professional
          </p>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <RiCheckboxCircleLine className="w-[13.3px] h-[13.84px] textbluecolor " />
          <p className="textgray fontnunito text-[18px] font-[600] leading-[32px]">
            Compassionate veterinary service.
          </p>
        </div>
        <div className="w-[160.87px] h-[50px] left-[705.93px] rounded-[25px] bgbluecolor flex gap-6 items-center">
  <p className="fontinter text-[15px] ml-6 font-[600] leading-[32px] text-white">
  Contact</p>
  <div className=' flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white'>
  <img src={arrow1}/>
  </div>
  </div>
      </div>
    </div>
  );
};

export default About;
