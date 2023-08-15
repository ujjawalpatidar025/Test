import React from "react";
import Navbar from "../Components/Navbar.jsx";
import ELV from "../Images/ELV.png";
import scooter from "../Images/scooter.png";
import play from "../Images/play.png";
import apple from "../Images/apple.png";
import vd from "../Images/vd.png";
import {ArrowLeft, ArrowRight} from 'lucide-react';


const HomePage = () => {
  return (
    <div className="min-h-screem max-h-auto  bg-[#103956] ">
      <Navbar />

      <div className="flex justify-center items-center  flex-wrap  ">
        <div className="h-auto py-4  max-h-auto w-1/2 bg-[#275373] max-lg:w-full overflow-hidden max-xl:h-[100vh] max-lg:h-auto max-lg:pb-[6.7%] max-md:h-[86vh] max-md:pb-[0%] ">
          <div className="text-6xl text-white px-12 mt-20 w-4/5 font-serif leading-[5rem] max-xl:mt-14 max-xl:text-5xl max-sm:w-full max-sm:text-4xl">
            Enjoy smooth rides with your Friends
            <div className="w-16 bg-[#103956] h-1 my-4 rounded-full"></div>
          </div>
          <div className=" px-12 text-white text-xl py-4 font-semibold max-xl:py-9">
            <ol>
              <li>1. Easy to use </li>
              <li>2. Environmental friendly</li>
              <li>3. Satisfaction guarantee</li>
            </ol>
          </div>

          <div className="flex justify-start items-center w-[80%] px-12 h-24 max-md:px-4 max-md:w-[90%]  max-sm:w-full max-sm:px-1 max-sm:justify-evenly">
          <img src={play} className="h-12 mx-4 hover:cursor-pointer max-sm:h-9 "/>
          <img src={apple} className="h-12 mx-4 hover:cursor-pointer max-sm:h-9"/>
          
          </div>
          <div className="w-full px-8 flex justify-between items-end h-24">
            <img src={vd} className="h-10 max-md:hidden"/>
            <div>
            <div className="bg-[#103956] p-2 text-white max-lg:hidden hover:cursor-pointer">
            <ArrowLeft />
            </div>
            </div>
          </div>
        </div>
        <div className="h-[87.1vh]  max-h-auto w-1/2 max-xl:h-[100vh] bg-[#103956] max-lg:w-full max-lg:h-0 max-sm:hidden overflow-hidden">
          <div className="w-full flex justify-center   items-center">
            <img src={ELV} className=" h-[350px] max-lg:hidden" />
          </div>

          <img
            src={scooter}
            className=" h-[380px] absolute right-[8%] bottom-[5%] max-xl:right-[1%] max-lg:h-[300px] max-md:h-[220px] max-md:bottom-[25%]"
          />
          <div className="bg-[#275373] w-10 absolute right-[45%] bottom-3  p-2 text-white max-lg:hidden hover:cursor-pointer">
            <ArrowRight />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
