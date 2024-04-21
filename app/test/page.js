'use client'
import React from "react";
import Image from "next/image";
import test from "@/data/tests";
import Link from "next/link";
import HeadingText from "@/components/design/HeadingText";
import GoBackButton from "@/components/buttons/GoBackButton";
import AuthComponent from "@/components/ProtectedComponent/AuthComponent";
import { Alert } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mt-5 max-w-2xl text-center mx-auto relative">
         <HeadingText title={"Test Series"}/>
        </div>    
      </div>
      <DashBoardCards />
    </div>
  );
};

// export default AuthComponent(Hero);
export default Hero;

const DashBoardCards = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {test.map((note, index) => {
          const bgStyle = {
            background: `linear-gradient(to bottom, ${note.Bg_from}, ${note.Bg_to}) `,
          };
          return (
            <Link href={`/test/${note.route}`} key={index}>
            <div
              
              className="transform cursor-pointer transition-transform duration-200 hover:-translate-y-4 group flex flex-col h-full font-pop bg-white border border-gray-200 shadow-lg rounded-xl "
            >
              <div
                style={bgStyle}
                className={` aspect-square h-40 sm:h-40 flex flex-col justify-center items-center rounded-t-xl p-4 overflow-hidden`}
              >
                {/* <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                {/* <Image
                  src={card.imgUrl}
                  alt={card.name}
                  height={210}
                  width={210}
                /> */}
                <h3 className=" sm:text-md font-medium mt-1 text-white ">
                  {note.type === "Unit test" ? `Unit Test ${note.id}` : `Final Test  ${note.id-10}`}
                </h3>
                {/* </svg> */}
              </div>
              <div className="p-4 md:p-6">
                {note?.premium ? (
                  <span className="block mb-1 text-xs font-medium bg-blue-200/30 p-1 w-20  rounded-full px-2 tracking-wider text-blue-500 ">
                    Premium
                  </span>
                ) : (
                  <span className="block mb-1 text-xs font-medium bg-green-200/30  p-1 px-2 w-12 tracking-wider rounded-full  text-teal-600 ">
                    Free 
                  </span>
                )}

                <p className=" text-xs font-medium mt-2 text-gray-800 ">Topic:<span className="text-gray-600 font-normal"> {note.name}</span></p>
                <p className=" text-xs font-medium mt-1 text-gray-800 ">Date:<span className="text-gray-600 font-normal"> {note.testData}</span></p>
                <p className=" text-xs font-medium mt-1 text-gray-800 ">Duration: <span className="text-gray-600 font-normal">{note.duration}</span></p>
                <p className=" text-xs font-medium mt-1 text-gray-800 ">Total MCQ: <span className="text-gray-600 font-normal">{note.mcq}</span></p>
                <p className=" text-xs font-medium mt-1 text-gray-800 ">Total MSQ: <span className="text-gray-600 font-normal">{note.msq}</span></p>
                <p className=" text-xs font-medium mt-1 text-gray-800 ">Total Marks: <span className="text-gray-600 font-normal">{note.totalmarks}</span></p>
              </div>
              
            </div></Link>

          )
        })}
      </div>
      <GoBackButton/>
    </div>
  );
};

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}


