import React from 'react'
import CollectionsCard from './CollectionsCard'
import col1 from "./col1.png";
import col2 from "./col2.png";
import col3 from "./col3.png";
import col4 from "./col4.png";
import col5 from "./col5.png";
import col6 from "./col6.png";
import col7 from "./col7.png";
import col8 from "./col8.png";
import { BsArrowRightCircle } from "react-icons/bs";
import arrow1 from './arrow1.png'

const Collection = () => {
    const collectionsData = [
        {
          imageSrc: col1,
          title: "Golden Retriever",
          gender: "Male",
          age: "2 months",
        },
        {
            imageSrc: col2,
            title: "Doberman",
            gender: "Male",
            age: "2 months",
          },
          {
            imageSrc: col3,
            title: "Apso",
            gender: "Female",
            age: "1 year",
          },
          {
            imageSrc: col4,
            title: "Chihuahua",
            gender: "Female",
            age: "1 year",
          },
          {
            imageSrc: col5,
            title: "Japanese Spitz",
            gender: "Male",
            age: " 2 months",
          },
          {
            imageSrc: col6,
            title: "German Shepard",
            gender: "Male",
            age: "2 months",
          },
          {
            imageSrc: col7,
            title: "Husky",
            gender: "Female",
            age: "3 months",
          },
          {
            imageSrc: col8,
            title: "Pug",
            gender: "Female",
            age: "4 Months",
          },
        
      ];
  return (
    <div>
    <div className='box text-center'>
    <p className="textcolordarblue fontnunito text-[45px] font-[800] leading-[60px]">Our Pet Collections</p>
    <p className="textgray fontnunito text-[22px] font-[500] leading-[32px] mb-12">"Bring joy to your home with a furry companion from our pet selection."</p>
   
    <div className='flex flex-wrap gap-5 justify-center'>
    {collectionsData.map((collection, index) => (
      <CollectionsCard
        key={index}
        imageSrc={collection.imageSrc}
        title={collection.title}
        gender={collection.gender}
        age={collection.age}
      />
    ))}
  </div>
  <div className='flex justify-center mt-6'>
  <div className="w-[160.87px] h-[50px] left-[705.93px] rounded-[25px] bgbluecolor flex gap-6 items-center">
  <p className="fontinter text-[15px] ml-6 font-[600] leading-[32px] text-white">
  View All</p>
  <div className=' flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white'>
  <img src={arrow1}/>
  </div>
  </div>
  </div>
  
    </div>
    </div>
  )
}

export default Collection