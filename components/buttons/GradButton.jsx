import Link from "next/link";
import React from "react";

const GradButton = ({ url, text, child }) => {
  return (
    <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
      <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
      <Link
        href={url}
        title=""
        className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
        role="button"
      >
        {" "}
        {text} {child}{" "}
      </Link>
    </div>
  );
};

export default GradButton;
