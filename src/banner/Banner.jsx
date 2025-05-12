import React from "react";
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/Bannner2.png";
import Banner3 from "../assets/Banner3.png";
import LastVEctor from "../assets/LastVector.png";

const Banner = () => {
  const opacities = [1, 1, 3, 4, 0.5];
  return (
    <div className="pt-36 pb-24">
      <div className="w-full container  max-w-full mx-auto">
        <div className="flex flex-col gap-[87px] items-center justify-center">
          <div className="relative">
            <h2 className="text-7xl relative font-[400px] font-sans  w-[786px] ">
              Crafting Impactful Designs That Engage
            </h2>
            <span className="bg-[#CFFA90] absolute top-[45%] right-[27%] w-[300px] h-2 -z-2"></span>
          </div>
          <div className="w-[966px] relative flex flex-wrap gap-5">
            <div className="relative">
              <div class="absolute top-[-5px] left-[-5px] w-4 h-4 border-t-2 border-l-2 border-black"></div>
              <img src={Banner1} alt="Banner1" />
            </div>
            <div className="relative w-[300px] h-[200px] flex justify-center items-center ">
              <p className="text-xl ">Design That Speaks Volumes</p>
            </div>
            <div className="relative">
              <div class="absolute top-[-5px] right-[-5px] w-4 h-4 border-t-2 border-r-2 border-black"></div>
              <img src={Banner2} alt="Banner1" />
            </div>
            <div className="relative">
              <div className="relative w-[300px] h-[200px] flex justify-center items-center ">
                <p className="text-xl ">Where Creativity Meets Precision</p>
              </div>
            </div>
            <div className="relative">
              <div class="absolute top-[-5px] left-[-5px] w-4 h-4 border-t-2 border-l-2 border-black"></div>
              <div class="absolute top-[-5px] right-[-5px] w-4 h-4 border-t-2 border-r-2 border-black"></div>
              <div class="absolute bottom-[-5px] right-[-5px] w-4 h-4 border-t-2 border-r-2 rotate-90 border-black"></div>
              <div class="absolute bottom-[-5px] left-[-5px] w-4 h-4 border-b-2 border-l-2 border-black scale-x-100"></div>
              <img src={Banner3} alt="Banner1" />
            </div>
            <div className="flex justify-center items-center w-[300px] h-[200px]">
                <p className="text-xl ">Bold Designs, Endless Possibilities</p>
            </div>
          </div> 
          <div>
          <button className="text-xl font-semibold px-6 py-4 rounded-xl cursor-pointer bg-[#CFFA90] hover:bg-[#bde977] transition">
              Get in touch
            </button>


          </div>
          <div className="w-full h-16 bg-[#CFFA90] flex gap-6 justify-center items-center">
            <p className="text-3xl">Trusted By</p>
            <div className="w-1 h-10 bg-black"></div>
            <div className="marquee">
               <div className="flex gap-7">
            {opacities.map((opacity,index)=>(
              <img
                key={index}
                src={LastVEctor}
                alt="LastVEctor"
                style={{ opacity, }}
    />
            ))}
           </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
