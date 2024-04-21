import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import premiumFeatures from "@/data/premiumFeatures";
import GradButton from "./buttons/GradButton";
import MainButton from "./buttons/MainButton";

const features = [
  {
    id: 1,
    description: "Access to all unit and full length mock tests",
  },
  {
    id: 2,
    description: "Access to notes of all the subjects",
  },
  {
    id: 3,
    description: "Personalised performance analysis",
  },
  {
    id: 4,
    description: "Access to leaderboard",
  },
];
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container ">
      <div className="relative  ">
        {/* <Gradient /> */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer  p-0.25 rounded-[1rem] my-2 sm:my-1  `}
        >
          <div className="relative p-8 bg-n-8 rounded-[1rem] overflow-hidden xl:p-10">
            <div className="absolute top-0 left-0 max-w-full">
              <Image
                className="w-full"
                src={grid}
                width={350}
                height={350}
                alt="Grid"
              />
            </div>
            <div className="relative z-1">
              <h4 className="text-2xl sm:h4 mb-4 bg-clip-text uppercase font-extrabold bg-gradient-to-b from-blue-300 to-blue-700 text-transparent">
                Premium
              </h4>
              <div className="my-5">
                <span className="text-5xl   text-white   bg-gradient-to-r inline-block font-bold from-blue-600 via-blue-700 to-black ">
                  {" "}
                  Rs. 199
                </span>

                <p className="text-lg font-medium my-4 text-gray-200 ">
                  What&apos;s included in Premimum?
                </p>
              </div>

              <ul className="space-y-4 text-sm ">
                {features.map((item, index) => {
                  return (
                    <li key={index} className="flex space-x-3 ">
                      <CharmTick />
                      <span className="text-white mt-1">
                        {item.description}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex justify-start pb-12 mt-12">
                <MainButton
                  name={"Buy Premium for Rs. 199"}
                  url={"/premium"}
                  isBlue={true}
                />
              </div>
            </div>
          </div>

          <div className="relative p-8 hidden sm:block  rounded-[1rem] overflow-hidden xl:p-10">
            <div className="relative z-1">
              <img src="https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/payy.png?alt=media&token=0181a56c-e70f-4d3f-95d5-5a4005d9319c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Roadmap;

export function CharmTick(props) {
  return (
    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-800 text-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m2.75 8.75l3.5 3.5l7-7.5"
        ></path>
      </svg>
    </span>
  );
}
