import React from "react";
import ServiceCard from "../../ui/ServiceCard";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from "./s5.png";
import s6 from "./s6.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Puppies Buying & Selling",
      image: s1,
      description:
        "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
    },
    {
      id: 2,
      title: "Home Treatment",
      image: s2,
      description:
        "Our goal is to ensure pet welfare through home treatment and prompt client response.",
    },
    {
      id: 3,
      title: "Clinical Treatment",
      image: s3,
      description:
        "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
    },
    {
      id: 4,
      title: "Puppies Buying & Selling",
      image: s4,
      description:
        "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
    },
    {
      id: 5,
      title: "Dog Training",
      image: s5,
      description:
        "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
    },
    {
      id: 6,
      title: "Dog Matting",
      image: s6,
      description:
        "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
    },
  ];

  return (
    <>
      <div className="box mx-auto">
        <div className="textcolordarblue fontnunito text-[45px] font-[800] leading-[60px] mb-4 text-center">
          Our Services
        </div>
        <div className="mb-12">
        <p className="fontnunito text-center text-[22px] font-[500] leading-[32px]">
        We provide a wide range of products & services for pets such as food,
        toys, grooming supplies, and veterinary care.
      </p>
      <p className="fontnunito text-center text-[22px] font-[500] leading-[32px]">
      We aim to meet the needs of pet owners and ensure the health and happiness of their furry
      friends.
    </p>
        </div>
     
        <div className="flex flex-wrap ">    
          <ServiceCard services={servicesData} />
        </div>
      </div>
    </>
  );
};

export default Services;
