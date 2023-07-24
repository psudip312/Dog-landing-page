import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div className="flex flex-row gap-12 flex-wrap justify-center">
      {services?.map((service) => (
        <div
          key={service.id}
          className="w-[334.23px] h-[409.62px] border-[1px] shadow-2xl"
        >
          <div>
            <img src={service.image} alt={service.title} />
          </div>
          <div className="w-[290.67px]">
            <div className="p-4">
              <p className="text-[20px] font-[800] leading-[38px] fontnunito textcolordarblue">
                {service.title}
              </p>
              <p className="h-[63.66px] text-[14px] font-[500] leading-[24px] fontnunito textgray">
                {service.description}
              </p>
              
            </div>
          </div>
          <div className="flex items-center justify-center  mt-4 ">
          <button className=" py-[12px] rounded-[5px] px-[12px] text-[12px] font-[600] leading-[20px] fontinter text-white bgdarkblue">
            View More
          </button>
        </div>
        </div>

      ))}

    </div>
  );
};

export default ServiceCard;
