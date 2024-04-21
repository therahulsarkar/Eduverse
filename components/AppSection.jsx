"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
const AppSection = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <section className="py-20 sm:py-32">
      <Zoom triggerOnce="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="xl:p-24 gap-6 sm:gap-32 px-4 py-12 sm:p-12 rounded-2xl bg-gradient-to-b  from-[#3000cd] to-[#000a54] flex  justify-between flex-col-reverse lg:flex-row">
            <div className="w-full  relative">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/app.png?alt=media&token=07ca01cc-0f77-4507-a010-1cb66b46d23e"
                alt="EduVerse App"
                className="xl:absolute xl:bottom-0 -mb-8 mx-auto lg:mb-0  lg:mx-0"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-7 text-center sm:text-left">
                Instant Access to Learning.{" "}
              </h2>
              <p className="text-xl text-white leading-8 mb-6 text-center lg:text-left">
                {" "}
                Download EduVerse Web App now
              </p>
              <p className="text-xs text-white  mb-12 text-center lg:text-left bg-blue-900 p-2 rounded-md">
                If the install button does not work, click on the three dots {" "}
                <span className="inline-flex">
                (<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
                  <path fill="#fff" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28">
                  </path>
                 
                </svg>)</span>{" "} 
                 in the browser and scroll down to 
                 {" "}
                <span className="inline-flex">
                (<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#fff" d="M7.615 22q-.69 0-1.152-.462T6 20.385V3.615q0-.69.463-1.152T7.615 2h6.462v3.5H7v13h10v-2h1v3.885q0 .69-.462 1.152T16.385 22zM18 13.289L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z"></path></svg>)</span>{" "}
                  install the app option.
              </p>
              <div className="flex items-center flex-col gap-7 text-lg md:flex-row lg:justify-start justify-center">
                <button
                  onClick={handleInstallClick}
                  disabled={!deferredPrompt}
                  className="inline-flex justify-center cursor-pointer items-center gap-x-2 text-center hover:gap-x-3 transition-all duration-300 shadow-lg  border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-2 sm:py-3 px-3 sm:px-6  dark:focus:ring-offset-gray-800  bg-gradient-to-tl from-slate-100  to-gray-200 hover:shadow-white/30 text-gray-800"
                >
                   <span className="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#000" d="M7.615 22q-.69 0-1.152-.462T6 20.385V3.615q0-.69.463-1.152T7.615 2h6.462v3.5H7v13h10v-2h1v3.885q0 .69-.462 1.152T16.385 22zM18 13.289L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z"></path></svg></span>Install App 
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default AppSection;
