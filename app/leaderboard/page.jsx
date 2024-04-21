'use client'
import { podium, previousyear, first, second, third } from "@/assets";
import GoBackButton from "@/components/buttons/GoBackButton";
import HeadingText from "@/components/design/HeadingText";
import leaderboardData from "@/data/leaderBoard";
import previousYear from "@/data/previousYear";
import Image from "next/image";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";


const LeaderBoard = () => {
  return (
    <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
      <div className="w-full  px-4 sm:px-6 lg:px-8 pb-10 pt-8 bg-gradient-to-b  from-[#0000CD] to-[#000f89] rounded-xl   ">
        <div className="  text-center mx-auto relative flex justify-center items-center flex-col">
          <Image src={podium}  width={300}/>
          <h1 className="block text-2xl md:text-3xl lg:text-5xl mt-4">
            <span className=" font-normal text-white">
              Leaderboard
            </span>
          </h1>
          
        </div>
      </div>
      <div className="">
        <LeaderBoardData/>
      </div>
      <GoBackButton/>
    </div>
  );
};

export default LeaderBoard;

const LeaderBoardData = ()=>{

    return(<div className="flex justify-center items-center mt-[2rem]">
<ul totalpoints="list" className="divide-y divide-gray-100 w-full sm:max-w-4xl">
      {leaderboardData?.map((person, index) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5 shadow-3 px-4 my-4 rounded-md "><Zoom>
          <div className="flex min-w-0 gap-x-4 items-center">
           {
            index === 0 ? <Image src={first} width={50} height={50} /> 
            : index === 1 ? <Image src={second} width={50} height={50} /> 
            : index === 2 ? <Image src={third} width={50} height={50} /> 
            : <span className="text-lg font-bold leading-6 text-gray-700">{index + 1}</span>
           }
            <div className="min-w-0 flex-auto  flex items-center">
              <p className="text-sm font-medium leading-6 text-gray-800">{person.name}</p>
            </div>
          </div>
          <div className="flex items-center flex-col">
          <p className="text-sm font-medium leading-6 text-gray-600">Points</p>
            <p className="text-lg font-bold leading-6 text-[#0000CD]">{person.totalpoints}</p>
          </div></Zoom>
        </li>
      ))}
    </ul></div>
  )

}
