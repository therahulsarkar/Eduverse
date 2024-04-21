import React from "react";

const SocialButton = ({ name, url, isInsta, isTelegram, extraClass           }) => {
  let buttonClass =
    "inline-flex justify-center items-center gap-x-2 text-center shadow-lg shadow-transparent border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-2 sm:py-3 px-3 sm:px-6  dark:focus:ring-offset-gray-800";

  if (isInsta) {
    buttonClass +=
      " bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-red-500/50 hover:shadow-red-700/50";
  } else if (isTelegram) {
    buttonClass += " bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-blue-500/60 hover:shadow-blue-700/50";
  } else {
    buttonClass +=
      " bg-gradient-to-tl from-slate-100  to-gray-200 hover:shadow-white/30 text-gray-800";
  }

  if (extraClass) {
    buttonClass += ` ${extraClass}`;
  }

  return (
    <button className="text-center mr-1 ">
      <a className={buttonClass} href={url} target="_blank">
        {name}
        {isTelegram ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#fff"
              d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81M175.53 208l-82.68-72.5l119-85.29Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            ></path>
          </svg>
        )}
      </a>
    </button>
  );
};

export default SocialButton;
