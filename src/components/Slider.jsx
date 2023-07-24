import React from "react";
import { slidelst } from "../utils/homesettings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Slider = () => {
  const [active, setActive] = React.useState(0);

  const onNext = () => {
    setActive((prev) => {
      return prev === slidelst.length - 1 ? prev : prev + 1;
    });
  };

  const onPrev = () => {
    setActive((prev) => {
      return prev === 0 ? prev : prev - 1;
    });
  };
  return (
    <div className="slider">
      {slidelst.map((item, index) => (
        <div
          className={
            active != index ? "hidden w-[100%] h-[100%]" : "w-[100%] h-[100%]"
          }
          key={item.id}
        >
          <img className='img' src={item.url} alt="" />
        </div>
      ))}

      <div className="slider-info">
        <h1 className="slider-title">
          We provide the best care to our furry friends!
        </h1>
        <h5 className="slider-subtitle">Top Quality of Pet Product Store.</h5>
      </div>

      <div
        className={
          active === 0
            ? "slider-icon left cursor-default"
            : "slider-icon left active cursor-pointer"
        }
        onClick={onPrev}
      >
        <IoIosArrowBack />
      </div>

      <div
        onClick={onNext}
        className={
          active === slidelst.length - 1
            ? "slider-icon right cursor-default"
            : "slider-icon right active cursor-pointer"
        }
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Slider;