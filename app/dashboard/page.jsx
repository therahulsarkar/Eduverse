"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React, { Suspense } from "react";
import dashboardData from "@/data/dashboard";
import Image from "next/image";
import Link from "next/link";
import ProfileModal from "@/components/ProfileModal";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import MainButton from "@/components/buttons/MainButton";
import GoBackButton from "@/components/buttons/GoBackButton";
import { crown } from "@/assets";
import toast from "react-hot-toast";
import LoadingComponent from "@/components/LoadingComponent";
import { Alert } from "@material-tailwind/react";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="relative overflow-hidden font-pop bg-white before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 pb-6 sm:pb-10">
          <div className="w-full  px-4 sm:px-6 lg:px-8 pb-10 pt-8 bg-gradient-to-b  from-[#3000cd] to-[#000a54] rounded-xl   ">
            {user?.isPremium ? (
              <div className="flex justify-center mt-6">
                <p className="group inline-flex bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600">
                  <span className="me-1 inline-flex flex-row items-center justify-center text-white text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFD700"
                        d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14z"
                      />
                    </svg>{" "}
                    EduVerse Premium
                  </span>
                </p>
              </div>
            ) : (
              <Link href={"/premium"}>
                <div className="flex justify-center mt-6">
                  <p className="group inline-flex bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600">
                    <span className="me-1 gap-1 py-0.5 inline-flex flex-row items-center justify-center text-white text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-2.9q0-2.1 1.45-3.55T17 12q-2.1 0-3.55-1.45T12 7q0 2.1-1.45 3.55T7 12q2.1 0 3.55 1.45T12 17Zm0-5Z"
                        ></path>
                      </svg>{" "}
                      Get EduVerse Premium{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </Link>
            )}
            <div className="  text-center  mx-auto relative flex justify-center items-center flex-col">
              {/* <Image src={podium}  width={300}/> */}
              <h1 className="block relative text-2xl md:text-3xl lg:text-5xl mt-4">
                <span className=" font-normal text-white">
                  <h1 className="block font-bold  text-3xl md:text-4xl lg:text-5xl">
                    Hello,{" "}
                    <span className="bg-clip-text bg-gradient-to-b from-slate-200 uppercase to-blue-200 text-transparent relative">
                      {user ? user.displayName?.split(" ")[0] : "Guest"}
                    </span>
                  </h1>
                </span>
              </h1>
              <p className="text-white mt-4">
                {!user && "Please login to gain full access"}
              </p>
              <div className="flex w-full justify-center items-center my-6">
                {user ? (
                  <ProfileModal user={user} />
                ) : (
                  <MainButton
                    name={"Sign In"}
                    url={"/auth/signin"}
                    extraClass="text-black"
                  />
                )}
              </div>
            </div>
          </div>
          {!user?.displayName && (
            <Alert className="mt-4" variant="ghost" icon={<Icon />}>
              After signing up or purchasing premium, please refresh the page to
              see the changes.
            </Alert>
          )}
        </div>

        <DashBoardCards />
      </div>
    </Suspense>
  );
};

export default Dashboard;

const DashBoardCards = () => {
  return (
    <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-8 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        {dashboardData.map((card, index) => {
          const bgStyle = {
            background: `linear-gradient(to bottom, ${card.Bg_from}, ${card.Bg_to})`,
          };
          return (
            <Link href={`${card.url}`} key={index}>
              <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl ">
                <div
                  style={bgStyle}
                  className={` aspect-square h-40 sm:h-52 flex flex-col justify-center items-center rounded-t-xl p-4 overflow-hidden`}
                >
                  {/* <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                  <Image
                    src={card.imgUrl}
                    alt={card.name}
                    height={210}
                    width={210}
                    className="transform transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* </svg> */}
                </div>
                <div className="p-4  md:p-6">
                  {card?.premium ? (
                    <span className="block mb-1 p-[2px] uppercase text-xs font-medium bg-blue-200/60  w-20 text-center rounded-full tracking-wider text-blue-500 ">
                      Premium
                    </span>
                  ) : (
                    <span className="block mb-1 p-[2px] uppercase text-xs font-medium bg-green-200/60 text-center  w-12 tracking-wider rounded-full  text-teal-600 ">
                      Free
                    </span>
                  )}

                  <h3 className=" sm:text-lg upper font-semibold mt-1 text-gray-800 ">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500">
                    {card.desc}
                  </p>
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
        })}
      </div>
      <GoBackButton />
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
