import React from "react";

const MainButton = ({
  name,
  url,
  isBlue,
  isOrange,
  svg,
  child,
  extraClass,
}) => {
  let buttonClass =
    "inline-flex justify-center items-center gap-x-2 text-center hover:gap-x-3 transition-all duration-300 shadow-lg  border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-2 sm:py-3 px-3 sm:px-6  dark:focus:ring-offset-gray-800";

  if (isBlue) {
    buttonClass +=
      " bg-gradient-to-tl from-blue-600 to-violet-600  hover:shadow-blue-700/80 focus:ring-blue-600 text-white shadow-blue-300";
  } else if (isOrange) {
    buttonClass +=
      " bg-gradient-to-tl from-orange-400 to-orange-600  hover:shadow-orange-700/50 focus:ring-orange-600 text-white shadow-orange-300";
  } else {
    buttonClass +=
      " bg-gradient-to-tl from-slate-100  to-gray-200 hover:shadow-white/30 text-gray-800";
  }

  if (extraClass) {
    buttonClass += ` ${extraClass}`;
  }

  return (
    <button className="text-center mr-1 ">
      <a className={buttonClass} href={url}>
        {name}
        {!svg && (
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </a>
    </button>
  );
};

export default MainButton;
