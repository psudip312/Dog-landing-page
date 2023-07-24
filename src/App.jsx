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
import Section from "./components/Section";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <section className=" w-100 bg-[#007fff] text-white font-[700] text-center py-3 ">
        Call us for Veterinary Support: +977-9861859764
      </section>
      <Navbar />
      <div className="flex flex-col gap-24">
        <Slider />
        <About />
        <Services />
      </div>
      <div className="py-[96px] px-3 lg:px-[10%]">
        <Collection />
      </div>
      <Section />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
