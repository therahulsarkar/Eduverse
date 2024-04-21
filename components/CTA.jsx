'use client'
import { cta } from "@/assets";
import Image from "next/image";
import GradButton from "./buttons/GradButton";
import MainButton from "./buttons/MainButton";
import { Slide } from "react-awesome-reveal";


const CTA = () => {
  return (
    <div className="bg-white px-2">
      <div className="mx-auto  py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate rounded-xl overflow-hidden  bg-gradient-to-b  from-[#3000cd] to-[#000a54] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0  ">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
           <Slide >
            <h2 className="text-xl font-medium text-left   text-white sm:text-2xl">
              <span className="text-primary text-3xl text-left  mb-8 bg-gradient-to-r inline-block font-bold from-blue-500 via-blue-800  to-[#3000cd] uppercase  p-2">
              Prepare Persevere Succeed
              </span>{" "}
              <br /> Empower your GATE CSE journey with tailored resources for success!
            </h2></Slide>
            <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start ">
              <div className="flex items-center mb-10 justify-center">
                <GradButton url={"/dashboard"} text={"Explore Resources"} />
              </div>{" "}
            </div>
          </div>
          <div className="relative sm:mt-16 h-80 lg:mt-8 w-full">
            <Image
              className="absolute right-0 top-4 w-[18rem] sm:w-[20rem] max-w-none rounded-md "
              src={cta}
              alt="Subscription"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
