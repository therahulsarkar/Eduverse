'use client'
import { Slide } from "react-awesome-reveal";

const Extra = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <section className="pt-12 bg-white sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Slide direction="up"  triggerOnce="true">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mt-5 text-3xl text-left sm:text-center font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl  lg:leading-tight ">
                Empowering learning with advanced tech{" "}
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span className="relative"> Dashboard </span>
                </span>
              </p>
              <h1 className="sm:px-6 text-left sm:text-center text-lg text-gray-600 font-inter mt-6">
                Experience streamlined learning with our cutting-edge tech
                dashboard, designed to optimize your study journey and maximize
                your success.
              </h1>
            </div>
          </Slide>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-white"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extra;
