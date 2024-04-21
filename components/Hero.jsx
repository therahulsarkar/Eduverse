"use client";
import { red_mark } from "../assets";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Image from "next/image";
import MainButton from "./buttons/MainButton";
import { Zoom } from "react-awesome-reveal";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem] bg-white relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/bgDesign.svg?alt=media&token=d2176bb7-5678-4576-8fe1-72ee3b576cd0')] before:bg-no-repeat before:bg-top before:size-full  before:transform before:-translate-x-1/2"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-8 lg:mb-[6.25rem]">
          <div className="flex justify-center mb-4">
            <a
              className="inline-flex items-center gap-x-1 bg-white border border-gray-200 shadow-sm text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-500 "
              href="/premium"
            >
              Explore EduVerse
              <span className="flex items-center ">
                <span className=" text-blue-700 ps-2 ">Premium</span>
                <svg
                  className="flex-shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          <Zoom direction="up" triggerOnce="true" delay={200}>
            <h1 className="text-3xl sm:h1 font-semibold mb-12 text-gray-800">
              The Ultimate Platform for your{" "}
              <span className="animate-text  font-extrabold bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-violet-600 text-transparent">
                GATE CSE
              </span>{" "}
              {` `}
              <span className="inline-block relative">
                Preparation{" "}
              </span>
            </h1>
            <p className="body-2 max-w-3xl mx-auto  mt-4 mb-6 text-gray-700 lg:mb-8">
              Gain Access to a Comprehensive Suite of Study Resources,
              Encompassing Detailed Notes, Rigorous Tests, Thorough Performance
              Analysis, and Expert Strategic Guidance.
            </p>
          </Zoom>
          <MainButton
            name={"Go to Resources"}
            url={"/dashboard"}
            isBlue={true}
          />
          <img className="hidden sm:block" src="https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/people.svg?alt=media&token=2447a0cd-5656-4f03-a5ee-d843b0914a8d" />
        </div>
      </div>

      {/* server image */}<ScrollParallax >
      <div className="flex justify-center items-center  sm:hidden">
        
            <img
              className=" h-44 "
              src="https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/server.webp?alt=media&token=b0bb4519-4dfc-4956-b775-09ba5a4189e8"
            />
          </div></ScrollParallax>
    </Section>
  );
};

export default Hero;
