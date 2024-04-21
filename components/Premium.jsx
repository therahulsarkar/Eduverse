'use client'
import premiumFeatures from "@/data/premiumFeatures";
import React from "react";
import Roadmap from "./Roadmap";
import GradButton from "./buttons/GradButton";
import { Slide, Zoom } from "react-awesome-reveal";


const Premium = () => {
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          <div className="flex justify-center ">
            <p className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600">
              <span className="me-2 inline-block text-white text-sm">
                Supercharge you preparation with
              </span>
            </p>
          </div>
          <Slide direction="up" triggerOnce="true">
          <div className="max-w-3xl text-center mx-auto mt-10">
            
            <h1 className="block font-bold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              EduVerse{" "}
              <span className="bg-clip-text font-semibold bg-gradient-to-b from-blue-300 to-blue-700 text-transparent">
                Premium
              </span>
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="text-center max-w-4xl sm:max-w-2xl text-slate-300">
              Upgrade to Premium and supercharge your preparation. Unlock a
              wealth of resources tailored to elevate your exam readiness.
            </p>
          </div></Slide>
        </div>
        <Zoom triggerOnce="true">
        <Roadmap /></Zoom>
       
      </div>

    </div>
  );
};

export default Premium;
