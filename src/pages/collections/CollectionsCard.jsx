import React from "react";
const CollectionsCard = (props) => {
  const { imageSrc, title, gender, age } = props;

  return (
    <div className="w-full lg:w-[280px] lg:h-[350px] p-1 rounded border border-purple-200 shadow-lg">
      <div>
        <img className="w-full object-cover" src={imageSrc} alt="Collection" />
      </div>
      <div className="m-2">
        <p className="textcolordarblue text-left mb-2 fontnunito text-[16px] font-[800] leading-[24px]">
          {title}
        </p>
        <div className="flex gap-5">
          <div className="flex">
            <p className="textgray fontnunito text-[12px] font-[400] leading-[18px]">
              Gender:
            </p>
            <p className="textgrey fontnunito text-[12px] font-[700] leading-[18px]">
              {gender}
            </p>
          </div>
          <div className="flex">
            <p className="textgray fontnunito text-[12px] font-[400] leading-[18px]">
              Age:
            </p>
            <p className="textgrey fontnunito text-[12px] font-[700] leading-[18px]">
              {age}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCard;
