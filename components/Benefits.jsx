"use client";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Image from "next/image";
import Link from "next/link";
import { blue_bg } from "@/assets";
import { Gradient } from "./design/Hero";
import features from "@/data/features";
import { Slide, Fade, Zoom } from "react-awesome-reveal";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <div className="px-4 mx-auto  sm:px-6 lg:px-8 my-12">
          <div className=" mx-auto sm:max-w-4xl text-center">
            <Slide direction="up" triggerOnce="true">
              <p className="mt-5 text-4xl text-left sm:text-center font-bold leading-tight text-gray-900 sm:leading-tight sm:text-4xl lg:text-5xl lg:leading-tight font-pj">
                Explore Our Comprehensive
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-50 w-full h-full absolute inset-0"></span>
                  <span className="relative"> Features </span>
                </span>
              </p>
            </Slide>
            <h1 className="sm:px-6 text-md text-left sm:text-center text-gray-700 my-6">
              Explore EduVerse&apos;s array of features designed to optimize
              your preparation journey, from comprehensive study materials to
              interactive tools.
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 ">
          {features.map((item) => (
            <div
              className="block group cursor-pointer relative p-0.5 b md:max-w-[20rem] group shadow-2 rounded-xl border border-gray-300"
              key={item.id}
            ><Link href={"/dashboard"}>
              <Zoom triggerOnce="true">
                <div className="relative z-2 flex flex-col min-h-[16rem] p-[1rem] rounded-xl pointer-events-none overflow-hidden">
                  <div className="flex justify-center items-center max-h-[10rem] rounded-xl  ">
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      height={150}
                      className="transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h5 className=" text-lg my-3 font-medium ">{item.title}</h5>
                  <p className="text-xs mb-6 text-gray-700 ">{item.desc}</p>
                </div>
              </Zoom></Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
