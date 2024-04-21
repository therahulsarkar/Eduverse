import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import Image from "next/image";
import logo_dark from "@/assets/main/logo_dark.png";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full font-pop py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-b  from-[#002470fd] to-[#000d3b]">
   
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <Image src={logo_dark} width={100} alt="EduVerse"/>
      </div>
    
  
      <div className="mt-3 text-gray-100">
        <div className="flex flex-row justify-center gap-3 text-sm my-1">
          <p><Link href={"/dashboard"}>Dashboard</Link></p>|
          <p><Link href={"/privacy"}>Privacy Policy</Link></p> | 
          <p><a href="mailto:thecoderrahul@gmail.com">Report Issue</a></p>
        </div>
        <p className="">© EduVerse | All rights reserved.</p>
      </div>
  
<p className="text-xs text-center text-white">Made with 💙</p>

 
    </div>

   
  </footer>
  );
};

export default Footer;
