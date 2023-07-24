import React from "react";

const BlogsCard = ({ blogs }) => {
  return (
    <>
      {blogs?.map((blog) => (
        <div key={blog.id} className="w-[350px] h-[400px]">
          <img src={blog.image} alt={blog.title} />
          <div className=" text-[18px] font-[700] leading-[28px]">
            <h1>{blog.title}</h1>
          </div>
          <div className="text-[18px] font-[700] leading-[28px]">
            <p className=" blogsubtext text-[14px] font-[400] leading-[24.01px]">
              {blog.excerpt}
            </p>
          </div>
          <div className="mt-4">
            <button className=" flex justify-center items-center w-[97px]  h-[35px] px-[8px] py-[12px]  text-[12px] leading-[20px] font-[600] text-white rounded-[5px] bgdarkblue">
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsCard;
