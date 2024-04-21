
'use client'
import React from "react";
import Image from "next/image";
import notesData from "@/data/notes";
import Link from "next/link";
import HeadingText from "@/components/design/HeadingText";
import { Zoom } from "react-awesome-reveal";
import GoBackButton from "@/components/buttons/GoBackButton";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mt-5 max-w-2xl text-center mx-auto relative">
         <HeadingText title={"Notes"}/>
        </div>    
      </div>
      <DashBoardCards />
      <GoBackButton/>
    </div>
  );
};

export default Hero;

const DashBoardCards = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"><Zoom>
        {notesData.map((note, index) => {
          const bgStyle = {
            background: `linear-gradient(to bottom, ${note.Bg_from}, ${note.Bg_to}) `,
          };
          return (
            <Link href={`notes/${note.route}`} key={index}>
            <div
              key={index}
              className="transform transition-transform duration-200 hover:-translate-y-4 group flex flex-col h-full font-pop bg-white border border-gray-200 shadow-lg rounded-xl "
            >
              <div
                style={bgStyle}
                className={` aspect-square h-40 sm:h-52 flex flex-col justify-center items-center rounded-t-xl p-4 overflow-hidden`}
              >
                {/* <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                {/* <Image
                  src={card.imgUrl}
                  alt={card.name}
                  height={210}
                  width={210}
                /> */}
                <h3 className=" sm:text-md font-medium mt-1 text-white ">
                  {note.name}
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

                <h3 className=" sm:text-md font-medium mt-1 text-gray-800 ">
                  {note.name}
                </h3>
              </div>
              {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
                <a
                  className="w-full overflow-hidden py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                  href={card.url}
                >
                  View API
                </a>
              </div> */}
            </div>
            </Link>
          );
        })}</Zoom>
      </div>
    </div>
  );
};


