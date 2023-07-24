import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogsCard from "./ui/BlogsCard";
import Blogs from "./pages/blogs/Blogs";
import Services from "./pages/services/Services";
import { Navbar, Slider } from "./components/Index";
import About from "./pages/about/About";
import Collection from "./pages/collections/Collection";
import CollectionsCard from "./pages/collections/CollectionsCard";

function App() {
  return (
    <>
      <section className=" w-100 bg-[#007fff] text-white font-[700] text-center py-3 ">
        Call us for Veterinary Support: +977-9861859764
      </section>
      <div className="">
        <Navbar />
      </div>
      <div className=" flex flex-col gap-26">
        <section id="one">
          <Slider />
        </section>
        <Blogs />
        <Services />
        <About />
      </div>
      <Collection/>
    </>
  );
}

export default App;
