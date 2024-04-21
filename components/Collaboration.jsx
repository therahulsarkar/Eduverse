'use client'
import { Slide } from "react-awesome-reveal";
import { brainwaveSymbol, check, logo } from "../assets";
import { subjectIcons, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Image from "next/image";

const Collaboration = () => {
  return (
    <Section>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <Slide direction="up">
          <p className="mt-5 text-4xl text-left sm:text-center font-bold leading-tight text-gray-900 sm:leading-tight sm:text-4xl lg:text-5xl lg:leading-tight font-pj">
            Why JECA{" "}
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative"> 360? </span>
            </span>
          </p></Slide>

          <ul className="max-w-[22rem] my-6 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-2 py-2" key={item.id}>
                <div className="flex items-center">
                  <span className="bgGrad rounded-full text-white p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M9.575 12L5 7.4L6.4 6l6 6l-6 6L5 16.6zm6.6 0L11.6 7.4L13 6l6 6l-6 6l-1.4-1.4z"
                      />
                    </svg>
                  </span>
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] my-12 sm:mt-4">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border-dashed border border-gray-500 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border-dashed	 border border-gray-400 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                  <Image
                    src={logo}
                    width={60}
                    height={60}
                    alt="EduVerse"
                  />
                </div>
              </div>
            </div>

            <ul>
              {subjectIcons.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white shadow-2 border border-gray-300/50 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
