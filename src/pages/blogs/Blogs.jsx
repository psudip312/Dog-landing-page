import React from "react";
import BlogsCard from "../../ui/BlogsCard";
import dog1 from "./dog1.png";
import dog2 from "./dog2.png";
import dog3 from "./dog3.png";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "How to Choose the Right Bully Stick for Your Dog",
      image: dog1,
      excerpt:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
    },
    {
      id: 2,
      title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
      image: dog2,
      excerpt:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
    },
    {
      id: 3,
      title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
      image: dog3,
      excerpt:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
    },
  ];

  return (
    <div className="py-16">
      <div className="textcolordarblue fontnunito text-[45px] font-[800] leading-[60px] mb-10 text-center">
        Our Blogs
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
        <BlogsCard blogs={blogsData} />
      </div>
    </div>
  );
};

export default Blogs;
