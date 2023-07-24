import { FaPaw } from "react-icons/fa";

import { linklst } from "../utils/homesettings";
import SearchInput from "./SearchInput";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [dropdown, setDropDowm] = React.useState(false);
  const [showSearch, setSearch] = React.useState(false);
  const [tab, setTab] = React.useState(1);

  const toggleDoprDown = () => {
    setDropDowm((prev) => !prev);
  };
  const toggleSearch = () => {
    
    if (window.innerWidth < 1024) setSearch((prev) => !prev);
  };
  return (
    <nav className="relative lg:static min-h-[10vh]">
      <div
        className={
          showSearch
            ? "hidden lg:flex lg:items-center lg:gap-[2%]   lg:font-[600] lg:text-[30px]"
            : "nav-heading"
        }
      >
        <FaPaw />
        <h1 className=" whitespace-nowrap">Dog Care</h1>
      </div>
      <div
        className={
          dropdown
            ? "flex flex-col gap-[5%] text-center font-[15px] lg:flex-row h-max p-3 lg:p-0 lg:justify-between w-[100%] absolute left-0 bg-white lg:w-[35%]  top-full lg:static bg-blue z-40  "
            : "flex-row gap-[5%] font-[15px] justify-between w-[35%] absolute  bg-white  bottom-full lg:static bg-blue -  hidden lg:flex "
        }
      >
        {linklst.map((item) => {
          return (
            <span
              onClick={() => setTab(item.id)}
              className={
                item.id === tab
                  ? "nav-item active py-3 lg:py-0 hover:text-[#007fff]  hover:lg:bg-transparent hover:bg-[#f5fafa] "
                  : "nav-item  py-3 lg:py-0 hover:text-[#007fff] hover:bg-[#f5fafa]  hover:lg:bg-transparent"
              }
              key={item.id}
            >
              {item.text}
            </span>
          );
        })}
      </div>

      <div
        className={
          showSearch
            ? "d-flex  w-[100%] lg:w-[40%] nav-search  lg:static ms-auto "
            : "d-flex  w-[40%] nav-search  lg:static  ms-auto  justify-end "
        }
      >
        <div
          className={
            showSearch ? "w-[100%] lg:w-[100%]  " : "w-max lg:w-[100%] "
          }
        >
          <SearchInput show={showSearch} toggleSearch={toggleSearch} />
        </div>
        <div className=" nav-options ">
          <AiFillHeart className="heart-icon" />
          <div className="nav-cart relative flex flex-row items-center   xl:pr-[22.15625px] xl:pt-[16px] xl:pb-[17px] xl:pl-[22px] lg:rounded-[8px]  xl:border-[1px] xl:border-[#007fff] xl:border-solid xl:gap-[11.421875px] xl:rounded-[8px]">
            <HiShoppingCart className="icon" />
            <span className=" xl:after:content-['items'] xl:after:ms-2 xl:static xl:text-[1rem] xl:w-min xl:h-min xl:bg-transparent xl:top-0 absolute top-[-15px] right-[-2px] text-[9px] h-[15px] w-[15px] bg-red-500 flex flex-row items-center justify-center rounded-[50px] text-white xl:text-black  xl:translate-y-0 ">
              2
            </span>
          </div>
        </div>
        <div
          className={
            dropdown
              ? "hamburger lg:hidden flex cursor-pointer  "
              : "hamburger  lg:hidden cursor-pointer"
          }
          onClick={toggleDoprDown}
        >
          {dropdown ? (
            <ImCross className="fa-bars" />
          ) : (
            <GiHamburgerMenu className="fa-bars" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;