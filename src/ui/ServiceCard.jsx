import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[5%] gap-4 justify-center">
      {services?.map((service,index) => (
        <div
          key={service.id}
          className={index > 2 ? "hidden lg:flex lg:flex-col lg:max-w-[334.23px] lg:max-h-[409.62px] border-[1px] pb-4 rounded-[12px] border-[border:#D4D2E3]":"lg:max-w-[334.23px] lg:max-h-[409.62px] border-[1px] pb-4 rounded-[12px] border-[border:#D4D2E3]"}
        >
          <div className="w-full">
            <img className='w-full object-cover' src={service.image} alt={service.title} />
          </div>
          <div className="">
            <div className="p-4">
              <p className="lg:text-[20px] font-[800] lg:leading-[38px] fontnunito textcolordarblue">
                {service.title}
              </p>
              <p className="h-[63.66px] lg:text-[14px] font-[500] leading-[24px] fontnunito textgray">
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
